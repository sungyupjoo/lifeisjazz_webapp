import styled from "@emotion/styled";

export const FlexWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
