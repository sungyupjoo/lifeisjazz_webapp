"use client";

import styled from "@emotion/styled";
import {
  Button,
  Container,
  FlexWrapper,
  InputBox,
  StyledModal,
  Title,
} from "./common";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import colors from "../commons/styles/theme";
import CustomCalendar, { Value, ValuePiece } from "./CustomCalendar";
import { exampleMembers } from "./contents/exampleMembers";
import {
  IconArrowRight,
  IconCalendar,
  IconMoney,
  IconPen,
  IconPeople,
  IconPlace,
  IconTime,
} from "./common/Icons";
import { formatDate } from "../utils/formatDate";
import { exampleSchedule } from "./contents/exampleSchedule";
import moment, { MomentInput } from "moment";

const Schedule = () => {
  // 달력의 날짜
  const today = new Date();
  const [date, setDate] = useState<Value | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>(formatDate(today));
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    setFormattedDate(formatDate(newDate));
  };
  // 일정 추가
  const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
  const addEventHandler = () => {
    setIsAddEventModalVisible(true);
  };
  const registerHandler = () => {};

  return (
    <Container innerPadding backgroundGray>
      <Title titleText="일정" subTitle="모임 일정 및 잼데이 신청" />{" "}
      <FlexWrapper>
        <CustomCalendar date={date} onDateChange={handleDateChange} />
        <Wrapper>
          <ItemBigContainer>
            <ItemBigWrapper>
              <ItemTitleContainer>
                <TitleAndButtonContainer>
                  <ItemTitle>{`일정 (${exampleSchedule.length})`}</ItemTitle>

                  <AddButton onClick={addEventHandler}>+</AddButton>
                </TitleAndButtonContainer>
                <ButtonContainer>
                  <Button backgroundColor={colors.sub} text="잼데이" link />
                </ButtonContainer>
              </ItemTitleContainer>

              <ItemContainer>
                <>
                  <TitleContainer>
                    <ItemSubTitle>
                      {/* <RedText style={{ marginRight: "1rem" }}>D-2</RedText> */}
                      {formattedDate}
                    </ItemSubTitle>
                    {exampleSchedule.find(
                      (schedule) =>
                        schedule.date ===
                        moment(date as MomentInput).format("YYYY-MM-DD")
                    ) && (
                      <Button
                        backgroundColor={colors.sub}
                        text="참석"
                        href=""
                        onClick={() => {}}
                      />
                    )}
                  </TitleContainer>
                  <ItemTitle>
                    {exampleSchedule.find(
                      (schedule) =>
                        schedule.date ===
                        moment(date as MomentInput).format("YYYY-MM-DD")
                    )?.title ?? (
                      <NoContent>해당 날짜엔 일정이 없습니다</NoContent>
                    )}
                  </ItemTitle>
                  <ItemContentContainer>
                    {exampleSchedule.find(
                      (schedule) =>
                        schedule.date ===
                        moment(date as MomentInput).format("YYYY-MM-DD")
                    )?.image && (
                      <Photo
                        src={
                          exampleSchedule.find(
                            (schedule) =>
                              schedule.date ===
                              moment(date as MomentInput).format("YYYY-MM-DD")
                          )?.image
                        }
                      />
                    )}
                    {exampleSchedule.find(
                      (schedule) =>
                        schedule.date ===
                        moment(date as MomentInput).format("YYYY-MM-DD")
                    ) && (
                      <ItemDetailsContainer>
                        <ItemContentWrapper>
                          <ItemContent>위치</ItemContent>
                          <p>
                            {
                              exampleSchedule.find(
                                (schedule) =>
                                  schedule.date ===
                                  moment(date as MomentInput).format(
                                    "YYYY-MM-DD"
                                  )
                              )?.location
                            }
                          </p>
                        </ItemContentWrapper>
                        <ItemContentWrapper>
                          <ItemContent>비용</ItemContent>
                          <p>
                            {
                              exampleSchedule.find(
                                (schedule) =>
                                  schedule.date ===
                                  moment(date as MomentInput).format(
                                    "YYYY-MM-DD"
                                  )
                              )?.expense
                            }
                          </p>
                        </ItemContentWrapper>
                        <ParticipantWrapper>
                          <ItemContentWrapper>
                            <ItemContent>참석</ItemContent>
                            <p>
                              <RedText>
                                {
                                  exampleSchedule.find(
                                    (schedule) =>
                                      schedule.date ===
                                      moment(date as MomentInput).format(
                                        "YYYY-MM-DD"
                                      )
                                  )?.participate.length
                                }
                              </RedText>{" "}
                              /
                              {
                                exampleSchedule.find(
                                  (schedule) =>
                                    schedule.date ===
                                    moment(date as MomentInput).format(
                                      "YYYY-MM-DD"
                                    )
                                )?.totalNumber
                              }
                            </p>
                          </ItemContentWrapper>
                          <ItemContentWrapper>
                            {exampleMembers
                              .filter((member) =>
                                exampleSchedule
                                  .find(
                                    (schedule) =>
                                      schedule.date ===
                                      moment(date as MomentInput).format(
                                        "YYYY-MM-DD"
                                      )
                                  )
                                  ?.participate.includes(member.id)
                              )
                              .map((member) => (
                                <MemberImage
                                  key={member.id}
                                  alt="Member"
                                  src={member.profileImageUrl}
                                />
                              ))}
                          </ItemContentWrapper>
                        </ParticipantWrapper>
                      </ItemDetailsContainer>
                    )}
                  </ItemContentContainer>
                  <ItemSpecific>
                    {
                      exampleSchedule.find(
                        (schedule) =>
                          schedule.date ===
                          moment(date as MomentInput).format("YYYY-MM-DD")
                      )?.specific
                    }
                  </ItemSpecific>
                </>
              </ItemContainer>
            </ItemBigWrapper>
          </ItemBigContainer>
        </Wrapper>
      </FlexWrapper>
      {isAddEventModalVisible && (
        <StyledModal
          isModalVisible={isAddEventModalVisible}
          closeModal={() => setIsAddEventModalVisible(false)}
          height="34rem"
          width="22rem"
        >
          <TitleContainer>
            <NewEventTitle>새 일정 등록</NewEventTitle>
            <Button
              text="등록"
              backgroundColor={colors.sub}
              onClick={registerHandler}
              href=""
            />
          </TitleContainer>
          <Margin20Container />
          {/* <PhotoContainer>사진 추가</PhotoContainer> */}

          <InputBox placeHolder="일정 제목" icon={IconPen} />
          <InputBox placeHolder="날짜" icon={IconCalendar} onClick={() => {}} />
          <TimeContainer>
            <InputBox placeHolder="시간" icon={IconTime} />
            <IconArrowRight size={16} />
            <InputBox placeHolder="시간" icon={IconTime} />
          </TimeContainer>
          <InputBox placeHolder="장소" icon={IconPlace} />
          <DetailContainer>
            <InputBox placeHolder="정원" icon={IconPeople} />
            <InputBox placeHolder="비용" icon={IconMoney} />
          </DetailContainer>
          <InputBox placeHolder="상세 내용" height={"8rem"} />
        </StyledModal>
      )}
    </Container>
  );
};
export default Schedule;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
`;

const ItemBigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

const ItemBigWrapper = styled.div`
  height: 344px;
`;

const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TitleAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

const ItemContainer = styled.div`
  flex: 1;
  width: 400px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  &:hover {
    background-color: ${colors.borderGray};
  }
  height: 100%;
`;

const AddButton = styled.div`
  background-color: ${colors.sub};
  color: white;
  font-size: 2rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 2.4rem;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.subShade};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoContent = styled.div`
  position: absolute;
  top: 50%;
`;

const RedText = styled.span`
  font-family: bold;
  color: ${colors.sub};
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
`;

const ItemContentContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`;

const ItemSubTitle = styled.h3`
  font-size: 1.2rem;
`;

const ItemContent = styled.p`
  color: ${colors.gray};
`;

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ItemContentWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const ItemSpecific = styled.p`
  padding-top: 1rem;
`;

const ParticipantWrapper = styled.div``;

const Photo = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 8px;
  margin-right: 0.8rem;
`;

const NewEventTitle = styled.h2`
  font-size: 2rem;
`;

const MemberImage = styled.img`
  margin-top: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: -24px;
  border: 3px solid white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  &:last-child {
    margin-right: 0;
  }
`;

const Margin20Container = styled.div`
  height: 2rem;
`;

const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 8px;
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const PhotoContainer = styled.div`
  width: 128px;
  height: 128px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  margin-right: 0.8rem;
`;
