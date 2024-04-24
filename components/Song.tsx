import styled from "@emotion/styled";
import colors from "../styles/theme";
import {
  InstrumentType,
  Member,
  SongProps,
  instrumentName,
  rhythmName,
} from "./common/types";
import { Button } from "./common";
import { exampleMembers } from "./contents/exampleMembers";

interface SongFCProps {
  requestedSongs: SongProps[];
  updateParticipant: (title: string, instrument: InstrumentType) => void;
  selectedDate: Date;
  onCancel: (songId: string) => void;
}

const Song: React.FC<SongFCProps> = ({
  requestedSongs,
  updateParticipant,
  selectedDate,
  onCancel,
}) => {
  const isJamDay = requestedSongs
    .map((song) => song.date)
    .includes(selectedDate.toDateString());
  return isJamDay ? (
    requestedSongs
      .filter((song) => song.date === selectedDate.toDateString())
      .map((song) => (
        <SongContainer key={song.title}>
          <SongWrapper>
            <SongTitleContainer>
              <Requester>{`신청자: ${song.requester?.nickName}`}</Requester>
              <SongTitle>{song.title}</SongTitle>
              <Requester>
                {song.key} / {rhythmName[song.rhythm]}
              </Requester>
              <Button
                text="신청취소"
                backgroundColor={colors.gray}
                onClick={() =>
                  onCancel(
                    exampleMembers[3].nickName +
                      song.title +
                      song.details.slice(0, 5)
                  )
                }
              />
            </SongTitleContainer>
            <TotalParticipantContainer>
              {song.instruments.map((instrument, index: number) => (
                <InstrumentParticipantContainer
                  key={index}
                  onClick={() => {
                    updateParticipant(song.id, instrument.name);
                  }}
                >
                  <Instrument>{instrumentName[instrument.name]}</Instrument>
                  {instrument.participants.map((participant: Member) => (
                    <MemberContainer key={participant.id}>
                      <MemberImage
                        alt={participant.nickName}
                        src={participant.profileImageUrl}
                      />
                      <Participant key={participant.id}>
                        {participant.nickName.length > 6
                          ? participant.nickName.slice(0, 6) + "..."
                          : participant.nickName}
                      </Participant>
                    </MemberContainer>
                  ))}
                </InstrumentParticipantContainer>
              ))}
            </TotalParticipantContainer>
          </SongWrapper>
          <Details>
            <p>{song.details}</p>
          </Details>
        </SongContainer>
      ))
  ) : (
    <NoJam>
      <h3>이 날은 잼데이 일정이 없습니다</h3>
    </NoJam>
  );
};

export default Song;

const SongContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1.5rem 2rem 0rem; 2rem;
  @media (max-width: 991px) {
    margin: 1rem;
    padding: 1rem;
  }
  background-color: ${colors.backgroundGray};
`;

const SongWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px black solid;
`;

const SongTitleContainer = styled.div`
  margin-right: 2rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 1rem;
  background-color: ${colors.borderGray};
  padding: 1rem;
`;

const SongTitle = styled.h3``;

const Requester = styled.p``;

const InstrumentParticipantContainer = styled.div`
  // background-color: ${colors.borderGray};
  padding: 0.5rem;
  border-radius: 20px;
  gap: 1rem;

  &:hover {
    background-color: ${colors.borderGray};
    cursor: pointer;
  }
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
  }
`;

const TotalParticipantContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(20px, auto));
  & > div:not(:last-child) {
    // border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    & > div {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Instrument = styled.div`
  text-align: center;
  font-family: semibold;
`;

const Details = styled.div`
  margin-bottom: 1rem;
`;

const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  gap: 0.3rem;
  margin-top: 1rem;
  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

const MemberImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
`;

const Participant = styled.p`
  text-align: center;
  font-family: regular;
`;

const NoJam = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  align-items: center;
`;
