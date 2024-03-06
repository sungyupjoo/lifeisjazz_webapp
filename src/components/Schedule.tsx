import styled from "@emotion/styled";
import { Container, Title } from "./common";
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
  };

  return (
    <Container innerPadding>
      <Title titleText="일정" subTitle="모임 일정 및 연습실 예약" />
      <CalendarWrapper>
        <StyledCalendar
          value={date}
          onChange={handleDateChange}
          locale={"ko"}
          formatDay={(locale, date) => moment(date).format("D")}
          formatYear={(locale, date) => moment(date).format("YYYY")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY년 M월")}
          next2Label={null}
          prev2Label={null}
          minDetail="year"
        />
      </CalendarWrapper>
    </Container>
  );
};
export default Schedule;

const CalendarWrapper = styled.div`
  margin-top: 3rem; 
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 500px;
    border-color: ${colors.main};
    border-width: 1.5px;
    border-radius: 8px;
    padding: 3% 5%;
    background-color: white;
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: ${colors.black};
    }
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

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: 'red'};
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${colors.main}};
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
    background-color: ${colors.sub};
    border-radius: 0.3rem;
  }
`;

const StyledCalendar = styled(Calendar)``;
