import styled from "@emotion/styled";
import { Container, FlexWrapper, Title } from "./common";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import colors from "../commons/styles/theme";
import moment from "moment";

// calendar 쓰기 위해 type 설정
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    console.log(newDate);
  };
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(
    new Date()
  );

  return (
    <Container innerPadding backgroundGray>
      <Title titleText="일정" subTitle="모임 일정 및 잼데이 신청" />
      <FlexWrapper>
        <CalendarWrapper>
          <StyledCalendar
            value={date}
            onChange={handleDateChange}
            locale={"ko"}
            formatDay={(locale, date) => moment(date).format("D")}
            formatYear={(locale, date) => moment(date).format("YYYY")}
            formatMonthYear={(locale, date) =>
              moment(date).format("YYYY년 M월")
            }
            next2Label={null}
            prev2Label={null}
            minDetail="year"
            calendarType="gregory"
            // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
            activeStartDate={
              activeStartDate === null ? undefined : activeStartDate
            }
            onActiveStartDateChange={({ activeStartDate }) =>
              setActiveStartDate(activeStartDate)
            }
            // 일정 표시용
            // tileContent={({ date, view }) => {
            //   let html = [];
            //   return <>{html}</>;
            // }}
          />
        </CalendarWrapper>
        <Wrapper>
          <ItemContainer>
            <ItemTitle>다음 일정</ItemTitle>
            <Date>
              3/10(일) 오후 3:00<RedText>D-2</RedText>
            </Date>
          </ItemContainer>
          <ItemContainer></ItemContainer>
        </Wrapper>
      </FlexWrapper>
    </Container>
  );
};
export default Schedule;

const Wrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ItemContainer = styled.div`
  flex: 1;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white;
  padding: 8px 11px;
`;

const RedText = styled.span`
  color: ${colors.sub};
  font-size: 1rem;
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
`;

const CalendarWrapper = styled.div`
  margin-top: 2.4rem; 
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    border-radius: 8px;
    border: none;
    padding: 1% 2%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1rem;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${colors.main};
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0.2 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }


  /* 일요일에 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${colors.sub}};
  }

 /* 날짜 */
 .react-calendar__tile {
  text-align: center;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  }
  
  /*hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
   background: ${colors.main};
   border-radius: 14px;
  }

  /* 오늘 날짜 컬러 */
  .react-calendar__tile--now {
    background: ${colors.gray};
    border-radius: 0.3rem;
    abbr {
      color: white;
    }
  }
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: ${colors.gray};
    padding: 0;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: ${colors.sub};
    abbr {
      color: white;
    }
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 5px 0px 18px;
    position: relative;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${colors.gray};
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${colors.main};
    border-radius: 0.3rem;
    color: white;
  }
`;

const StyledCalendar = styled(Calendar)``;

export const StyledDate = styled.div`
  position: absolute;
  right: 7%;
  top: 6%;
  background-color: ${colors.main};
  color: white;
  width: 18%;
  min-width: fit-content;
  height: 1.5rem;
  text-align: center;
  margin: 0 auto;
  line-height: 1.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 800;
`;

/* 일정 있는 날짜에 점 표시 스타일 */
const StyledDot = styled.div`
  background-color: ${colors.sub};
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translateX(-50%);
`;
