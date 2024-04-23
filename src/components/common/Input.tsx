import styled from "@emotion/styled";
import React from "react";
import colors from "../../commons/styles/theme";

interface InputProps {
  id: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  required?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  id,
  type,
  name,
  required = false,
}) => {
  return (
    <InputContainer>
      <Input id={id} type={type} name={name} required={required} />
      <Bar />
    </InputContainer>
  );
};

export default CustomInput;

const InputContainer = styled.div`
  width: 50%;
`;

const Input = styled.input`
font-family: regular;
font-size: 1.2rem;
  border: none;
  display: block;
  width: 100%;
  border-radius: 0;
  transition: 0.3s ease;
  &:focus {
    outline: none;
    }
  }
`;

const Bar = styled.div`
  background-color: ${colors.gray};
  height: 2px;
`;
