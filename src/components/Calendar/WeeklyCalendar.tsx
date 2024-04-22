"use client";

import { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
  startOfDay,
} from "date-fns";
import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";
import { ko } from "date-fns/locale";
import { dateFormat } from "../common/types";

interface WeeklyCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  jamDayDate: string[] | null;
}

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  selectedDate,
  onDateChange,
  jamDayDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const changeWeekHandle = (btnType: "prev" | "next") => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const renderHeader = () => {
    const dateFormatKorean = "yy년 MM월";
    return (
      <Header>
        <HeaderWrapper>
          <ColStart>
            <Button
              onClick={() => changeWeekHandle("prev")}
            >{`< 이전 주`}</Button>
          </ColStart>
          <HeaderText>
            {format(currentMonth, dateFormatKorean)} 라이재 잼데이
          </HeaderText>

          <ColEnd>
            <Button
              onClick={() => changeWeekHandle("next")}
            >{`다음 주 >`}</Button>
          </ColEnd>
        </HeaderWrapper>
      </Header>
    );
  };

  const renderDays = () => {
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <ColCenter key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: ko })}
        </ColCenter>
      );
    }
    return <Row>{days}</Row>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 0 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <CalendarBodyCell key={day.toString()}>
            <DateText
              className={
                isSameDay(day, new Date())
                  ? "today"
                  : isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }
              onClick={() => {
                onDateChange(cloneDay);
              }}
            >
              {isSameDay(day, new Date()) && <TodayText>오늘</TodayText>}

              {formattedDate}
              {jamDayDate?.includes(day.toDateString()) && <JamDayPoint />}
            </DateText>
          </CalendarBodyCell>
        );
        day = addDays(day, 1);
      }

      rows.push(<Row key={day.toString()}>{days}</Row>);
      days = [];
    }
    return <DayBody>{rows}</DayBody>;
  };
  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default WeeklyCalendar;

const Header = styled.div`
  display: block;
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const HeaderText = styled.h3``;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 4rem 0 4rem;
`;

const Button = styled.div`
  cursor: pointer;
  transition: 0.15s ease-out;
  color: ${colors.black};
  &:hover {
    color: ${colors.sub};
  }
  font-family: regular;
`;

const DayBody = styled.div`
  text-align: center;
  align-items: center;
  flex-direction: row;
  margin-top: 0.5rem;
`;

const Row = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  font-family: regular;
`;

const Col = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  &:first-of-type {
    color: ${colors.sub};
  }
`;

const ColStart = styled(Col)`
  justify-content: flex-start;
  text-align: left;
`;

const ColCenter = styled(Col)`
  justify-content: center;
  text-align: center;
`;

const ColEnd = styled(Col)`
  justify-content: flex-end;
  text-align: right;
`;

const CalendarBodyCell = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-top: 1px black solid;
  padding-top: 0.3rem;
`;

const DateText = styled.h3`
  padding: 0.7rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.25s ease-out;
  overflow: visible;
  &.selected {
    background-color: ${colors.mainTint};
    color: white;
  }
  &.today {
    background-color: ${colors.subTint};
    color: white;
  }
  &:hover {
    background-color: ${colors.mainTint};
    transition: 0.25s ease-out;
    color: white;
  }
`;

const TodayText = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -80%);
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: white;
`;

const JamDayPoint = styled.div`
  position: absolute;
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
`;
