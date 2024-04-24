"use client";

import React, { useEffect, useState } from "react";
import { startOfDay } from "date-fns";
import { globalStyles } from "../../styles/globalStyles";
import { Global } from "@emotion/react";
import { Button } from "../../components/common";
import styled from "@emotion/styled";
import WeeklyCalendar from "../../components/Calendar/WeeklyCalendar";
import Song from "../../components/Song";
import colors from "../../styles/theme";
import { ModalProvider } from "styled-react-modal";
import AddSongModal from "./AddSongModal";
import {
  InstrumentType,
  KeyType,
  RhythmType,
  SongProps,
} from "../../components/common/types";
import { exampleMembers } from "../../components/contents/exampleMembers";
import { Timestamp, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import CancelSongModal from "./CancelSongModal";

const JamDayPortal = () => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const [jamDayDate, setJamDayDate] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestedSongs, setRequestedSongs] = useState<SongProps[]>([]);
  const [addSongModalVisible, setAddSongModalVisible] = useState(false);
  const [cancelSongModalVisible, setCancelSongModalVisible] = useState(false);

  const handleDateChange = (day: Date) => {
    setRequestedSongs([]);
    setSelectedDate(day);
  };
  const openAddSongModal = () => {
    setAddSongModalVisible((prev) => !prev);
  };

  const openCancelSongModal = () => {
    setCancelSongModalVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsLoading(true);
    const formattedSelectedDate = `${selectedDate.getFullYear()} ${
      selectedDate.getMonth() + 1
    }`;

    // 해당 주의 언제가 잼데이인지
    const jamDaysDocRef = doc(db, "jamday", formattedSelectedDate);
    const unsubscribeJamDays = onSnapshot(
      jamDaysDocRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const jamdaysList: string[] = docSnapshot.data().jamday;
          setJamDayDate(jamdaysList);
        } else {
          console.warn("no jamdaydate data");
        }
      },
      (error) => {
        console.error("error in subscription");
      }
    );

    // 해당 잼데이의 곡들
    const startOfDayDate = startOfDay(selectedDate).toDateString();
    const docRef = doc(db, "jamday", startOfDayDate);
    const unsubscribeSongs = onSnapshot(
      docRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const songsData: SongProps[] = docSnapshot.data().data || [];
          setRequestedSongs(songsData);
        }
      },
      (error) => {
        console.error("no songs data");
      }
    );

    setIsLoading(false);
    return () => {
      unsubscribeJamDays();
      unsubscribeSongs();
    };
  }, [selectedDate]);

  // 참가자 업데이트
  const updateHandler = async (songId: string, instrument: InstrumentType) => {
    const updatedSongs = requestedSongs.map((song) => {
      // 곡들 중 id로 일치하는 곡 데이터 찾기
      if (song.id === songId) {
        const updatedInstruments = song.instruments.map((inst) => {
          // 선택한 악기에 유저가 있는지 확인
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
          return inst;
        });
        // 일치하는 곡에 업데이트한 목록 return
        return { ...song, instruments: updatedInstruments };
      }
      return song;
    });
    setRequestedSongs(updatedSongs);
    try {
      const docRef = await setDoc(
        doc(db, "jamday", startOfDay(selectedDate).toDateString()),
        {
          data: updatedSongs,
        },
        { merge: true }
      );
    } catch (e) {
      console.error(e);
    }
  };

  // Form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data: SongProps = {
      // TODO: nickName 나중에 uid로 변경할것
      id:
        ((exampleMembers[3].nickName + fd.get("title")) as string) +
        (fd.get("details") as string).slice(0, 5),
      date: startOfDay(selectedDate).toDateString(),
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
    try {
      const docRef = await setDoc(
        doc(db, "jamday", startOfDay(selectedDate).toDateString()),
        {
          data: [...requestedSongs, data],
        },
        { merge: true }
      );

      const jamdayDocRef = await setDoc(
        doc(
          db,
          "jamday",
          `${selectedDate.getFullYear()} ${selectedDate.getMonth() + 1}`
        ),
        { jamday: [...jamDayDate, selectedDate.toDateString()] },
        { merge: true }
      );
    } catch (e) {
      console.error("에러메시지", e);
    }
  };

  // 취소
  const cancelHandler = async (songId: string) => {
    // setCancelSongModalVisible((prev) => !prev);
    const updatedData = requestedSongs.filter((song) => song.id !== songId);
    console.log("clickwd");
    const docRef = await setDoc(
      doc(db, "jamday", startOfDay(selectedDate).toDateString()),
      {
        data: updatedData,
      },
      { merge: true }
    );
    console.log(songId);
  };

  if (isLoading) {
    return <p>데이터 페치중...</p>;
  }

  return (
    <>
      <Global styles={globalStyles} />
      <ModalProvider>
        <WeeklyCalendar
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
        <p>간단히 보기 toggle slider</p>
        <Song
          requestedSongs={requestedSongs}
          updateParticipant={updateHandler}
          selectedDate={selectedDate}
          onCancel={cancelHandler}
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
        {cancelSongModalVisible && (
          <CancelSongModal
            isVisible={cancelSongModalVisible}
            closeHandler={() => {
              setCancelSongModalVisible((prev) => !prev);
            }}
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
