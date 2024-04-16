"use client";

import React, { useState } from "react";
import { globalStyles } from "../../commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { Title } from "../../components/common";
import styled from "@emotion/styled";
import WeeklyCalendar from "../../components/Calendar/WeeklyCalendar";

const JamDayPortal = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const showDetailsHandle = (dayStr: string) => {
    setData(dayStr);
    setShowDetails(true);
  };
  return (
    <>
      <Global styles={globalStyles} />
      <JamDayContainer>
        <Title titleText="라이재 잼데이" subTitle="일정 조회 및 참가 신청" />
      </JamDayContainer>
      <WeeklyCalendar showDetailsHandle={showDetailsHandle} />
    </>
  );
};

export default JamDayPortal;

const JamDayContainer = styled.div`
  padding: 2rem;
`;
