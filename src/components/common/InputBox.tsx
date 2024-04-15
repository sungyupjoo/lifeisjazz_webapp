"use client";

import styled from "@emotion/styled";
import colors from "../../commons/styles/theme";
import { useEffect, useState } from "react";
import { IconProps } from "./Icons";

interface InputBoxProps {
  icon?: React.FC<IconProps>;
  placeHolder: string;
  onClick?: () => void;
  height?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  icon: Icon,
  placeHolder,
  onClick,
  height = "2rem",
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <InputBoxContainer height={height}>
      {Icon && <Icon size={24} onClick={onClick} />}
      <StyledInput
        placeholder={placeHolder}
        type="string"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div<{ height: string }>`
  display: flex;
  align-items: center;
  height: ${(props) => props.height};
  border: solid 1px ${colors.gray};
  border-radius: 4px;
  padding: 0 0.5rem;
  &:focus-within {
    border-color: ${colors.main};
    border-width: 1.5px;
  }
  margin-bottom: 0.8rem;
`;

const StyledInput = styled.input`
  margin-left: 0.5rem;
  border: none;
  outline: none;
  flex-grow: 1;
  width: 100%;
  &::placeholder {
    color: ${colors.gray};
  }
`;
