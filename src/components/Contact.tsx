import styled from "@emotion/styled";
import KakaoMap from "./KakaoMap";
import { Button, Container, Title, FlexWrapper } from "./common";
import colors from "../commons/styles/theme";
import { useState } from "react";

const Contact = () => {
  const [ruleModalVisible, setRuleModalVisible] = useState(false);
  const [kakaoModalVisible, setKakaoModalVisible] = useState(false);
  const showRuleModal = () => {
    setRuleModalVisible(true);
  };
  const showKakaoModal = () => {
    setKakaoModalVisible(true);
  };

  return (
    <Container innerPadding>
      <Title titleText="연락 및 문의" subTitle="행사 요청 및 기타 문의" />
      <FlexWrapper>
        <KakaoMap />
        <InnerContainer>
          <ContactItem>
            <WrapperSpaceBetween>
              <MiniTitle>연습실</MiniTitle>
              <Button
                backgroundColor={colors.sub}
                text="이용수칙"
                onClick={showRuleModal}
                href=""
              />
            </WrapperSpaceBetween>
            <Content>서울 서초구 서초대로25길 62, 지하 1층</Content>
            <Content>
              (<Subway>7</Subway> 내방역 7번 출구에서 320m 레몬네일 왼쪽 문에서
              비밀번호 입력)
            </Content>
          </ContactItem>
          <ContactItem>
            <WrapperSpaceBetween>
              <MiniTitle>연락처</MiniTitle>
            </WrapperSpaceBetween>
            <Content>
              <SpanGray>대표</SpanGray>조성제 010-2278-4351
            </Content>
          </ContactItem>
          <ContactItem>
            <WrapperSpaceBetween>
              <MiniTitle>계좌</MiniTitle>
              <Button
                backgroundColor={colors.sub}
                text="카카오페이"
                onClick={showKakaoModal}
                href=""
              />
            </WrapperSpaceBetween>
            <Content>우리은행 258-21572-902001 조성제</Content>
          </ContactItem>
        </InnerContainer>
      </FlexWrapper>
    </Container>
  );
};

export default Contact;

const WrapperSpaceBetween = styled(FlexWrapper)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const ContactItem = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;
`;

const MiniTitle = styled.h3``;

const Content = styled.p``;

const SpanGray = styled.span`
  background-color: ${colors.gray};
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  margin-right: 4px;
`;

const InnerContainer = styled.div`
  margin-top: 2.4rem;
  width: 100%;
`;

const Subway = styled.span`
  background-color: #747f00;
  width: 1.3rem;
  height: 1.3rem;
  padding: 0.3rem;
  display: inline-flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: semibold;
`;
