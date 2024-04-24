import styled from "@emotion/styled";
import React from "react";
import colors from "../../styles/theme";

interface CheckBoxInputProps {
  id: string;
  value: string;
  defaultChecked?: boolean;
}

const CheckboxInput: React.FC<CheckBoxInputProps> = ({
  id,
  value,
  defaultChecked = false,
}) => {
  return (
    <InstrumentContainer>
      <CheckBoxInput
        type="checkbox"
        id={id}
        name="instruments"
        value={id}
        defaultChecked={defaultChecked}
      />
      <InstrumentLabel>{value}</InstrumentLabel>
    </InstrumentContainer>
  );
};

export default CheckboxInput;

const InstrumentContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 0.3rem;
  padding: 0.3rem 0rem 0rem;
  // border-radius: 10px;
  // border: 1px solid black;
  // background-color: red;
`;

const CheckBoxInput = styled.input`
  &:checked {
    accent-color: blue;
  }
`;

const InstrumentLabel = styled.label`
  font-family: regular;
  font-size: 1.1rem;
`;
