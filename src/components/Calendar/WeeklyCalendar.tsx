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
} from "date-fns";
import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";
import { ko } from "date-fns/locale";
import { dateFormat } from "../common/types";

interface WeeklyCalendarProps {
  showDetailsHandle: (dayString: string) => void;
  selectedDate: Date;
  onDateChange: (date: Date, dayStr: string) => void;
  jamDayDate: Date[] | null;
}

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  showDetailsHandle,
  selectedDate,
  onDateChange,
  jamDayDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const changeWeekHandle = (btnType: "prev" | "next") => {
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
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
        <HeaderTitle>
          <HeaderText>
            {format(currentMonth, dateFormatKorean)} 라이재 잼데이
          </HeaderText>
        </HeaderTitle>
        <HeaderSub>
          <ColStart>
            <Button
              onClick={() => changeWeekHandle("prev")}
            >{`< 이전 주`}</Button>
          </ColStart>
          <h4>{`( ${currentWeek}주차 )`}</h4>
          <ColEnd>
            <Button
              onClick={() => changeWeekHandle("next")}
            >{`다음 주 >`}</Button>
          </ColEnd>
        </HeaderSub>
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
                const dayStr = format(cloneDay, "ccc dd MMM yy");
                onDateChange(cloneDay, dayStr);
              }}
            >
              {formattedDate}
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
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  justify-content: center;
  text-align: center;
`;

const HeaderText = styled.h3``;

const HeaderSub = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem 0 2rem;
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
