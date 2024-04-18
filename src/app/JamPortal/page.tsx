"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { globalStyles } from "../../commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { Button } from "../../components/common";
import styled from "@emotion/styled";
import WeeklyCalendar from "../../components/Calendar/WeeklyCalendar";
import Song from "../../components/Song";
import colors from "../../commons/styles/theme";
import { ModalProvider } from "styled-react-modal";
import AddSongModal from "./AddSongModal";
import {
  InstrumentType,
  KeyType,
  RhythmType,
  SongProps,
  dateFormat,
} from "../../components/common/types";
import { exampleMembers } from "../../components/contents/exampleMembers";

const JamDayPortal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState(
    format(new Date(), "ccc dd MMM yy")
  );
  const [showDetails, setShowDetails] = useState(false);
  const [jamDayDate, setJamDayDate] = useState<Date[] | null>(null);

  const handleDateChange = (day: Date, dayStr: string) => {
    setSelectedDate(day);
    console.log("날짜: ", day);
    console.log("문자열: ", dayStr);
    setSelectedDateString(dayStr);
  };
  // const [data, setData] = useState<string | null>(null);
  const [addSongModalVisible, setAddSongModalVisible] = useState(false);

  const showDetailsHandle = (dayStr: string) => {
    // setData(dayStr);
    setShowDetails(true);
  };

  const openAddSongModal = () => {
    setAddSongModalVisible((prev) => !prev);
  };

  // 곡
  const [requestedSongs, setRequestedSongs] = useState<SongProps[]>([
    {
      date: new Date(),
      requester: exampleMembers[0],
      title: "Bolivia",
      key: "Eb",
      rhythm: "mediumSwing",
      instruments: [
        { name: "bass", participants: [exampleMembers[0]] },
        { name: "piano", participants: [exampleMembers[1]] },
        { name: "drums", participants: [] },
      ],
      details: "화이팅",
      participants: [exampleMembers[0], exampleMembers[1]],
    },
  ]);

  // 참가자 업데이트
  const updateHandler = (title: string, instrument: InstrumentType) => {
    setRequestedSongs((prev) => {
      return prev.map((song) => {
        if (song.title === title) {
          const updatedInstruments = song.instruments.map((inst) => {
            if (inst.name === instrument) {
              const participantExists = inst.participants.some(
                (participant) => participant.id === exampleMembers[3].id
              );
              const updatedParticipants = participantExists
                ? inst.participants.filter(
                    (participant) => participant.id !== exampleMembers[3].id
                  )
                : [...inst.participants, exampleMembers[3]];
              return { ...inst, participants: updatedParticipants };
            }
            console.log(inst);
            return inst;
          });

          return { ...song, instruments: updatedInstruments };
        }
        return song;
      });
    });
  };
  console.log("무한렌더 확인");
  //잼데이 날짜
  useEffect(() => {}, [requestedSongs]);

  // Form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data: SongProps = {
      date: new Date(),
      // TODO: requester는 context에서 가져오게
      requester: exampleMembers[3],
      title: fd.get("title") as string,
      key: fd.get("key") as KeyType,
      rhythm: fd.get("rhythm") as RhythmType,
      instruments: fd.getAll("instruments").map((name) => ({
        name: name as InstrumentType,
        participants: [],
      })),
      details: fd.get("details") as string,
    };
    setAddSongModalVisible(false);
    setRequestedSongs((prev) => [...prev, data]);
    console.log(data);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <ModalProvider>
        <WeeklyCalendar
          showDetailsHandle={showDetailsHandle}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          jamDayDate={jamDayDate}
        />
        <AddSongButtonContainer>
          <p>다른 연주자가 신청한 곡에 참가하시려면 악기 파트를 눌러주세요</p>
          <Button
            backgroundColor={colors.sub}
            text="곡 신청 +"
            onClick={openAddSongModal}
          />
        </AddSongButtonContainer>
        <Song
          requestedSongs={requestedSongs}
          updateParticipant={updateHandler}
          selectedDate={selectedDate}
        />
        {addSongModalVisible && (
          <AddSongModal
            isVisible={addSongModalVisible}
            closeHandler={() => {
              setAddSongModalVisible(false);
            }}
            handleSubmit={handleSubmit}
          />
        )}
      </ModalProvider>
    </>
  );
};

export default JamDayPortal;

const AddSongButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  cursor: pointer;
`;
