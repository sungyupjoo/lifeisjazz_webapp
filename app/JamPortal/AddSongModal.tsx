import styled from "@emotion/styled";
import React from "react";
import CheckboxInput from "../../components/common/CheckboxInput";
import { StyledModal } from "../../components/common";
import CustomInput from "../../components/common/Input";
import Select from "react-select";
import { keyOptions, rhythmOptions } from "../../components/common/types";
import colors from "../../styles/theme";

interface AddSongModalProps {
  isVisible: boolean;
  closeHandler: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddSongModal: React.FC<AddSongModalProps> = ({
  isVisible,
  closeHandler,
  handleSubmit,
}) => {
  return (
    <StyledModal
      closeModal={closeHandler}
      isModalVisible={isVisible}
      height="33rem"
      width="30rem"
    >
      <AddSongForm onSubmit={handleSubmit}>
        <FormSection>
          <Label htmlFor="title">곡 제목</Label>
          <CustomInput id="title" type="text" name="title" required={true} />
        </FormSection>
        <FormSection>
          <Label htmlFor="key">키</Label>
          <StyledSelect options={keyOptions} id="key" name="key" required />
        </FormSection>
        <FormSection>
          <Label htmlFor="rhythm">리듬</Label>
          <StyledSelect
            options={rhythmOptions}
            id="rhythm"
            name="rhythm"
            required
          />
        </FormSection>
        <FieldSet>
          <Legend>악기 구성</Legend>
          <InstrumentGrid>
            <CheckboxInput id="bass" value="베이스" defaultChecked />
            <CheckboxInput id="drums" value="드럼" defaultChecked />
            <CheckboxInput id="piano" value="피아노" defaultChecked />
            <CheckboxInput id="horn" value="관악기" />
            <CheckboxInput id="guitar" value="기타" />
            <CheckboxInput id="vocals" value="보컬" />
            <CheckboxInput id="etc" value="그외" />
          </InstrumentGrid>
        </FieldSet>
        <FormSection>
          <Label htmlFor="details">하고 싶은 말</Label>
          <CustomInput id="details" type="text" name="details" />
        </FormSection>
        <ButtonWrapper>
          <CustomButton type="submit">신청</CustomButton>
        </ButtonWrapper>
      </AddSongForm>
    </StyledModal>
  );
};

export default AddSongModal;

const AddSongForm = styled.form`
  font-family: semibold;
  font-size: 1.3rem;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
const FormSection = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
  @media (max-width: 576px) {
    margin-bottom: 1.2rem;
  }
`;

const FieldSet = styled.fieldset`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  width: 30%;
  min-width: 7rem;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Legend = styled.legend`
  margin-bottom: 1rem;
`;

const InstrumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.5rem;
`;

const StyledSelect = styled(Select)`
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-family: regular;
  font-size: 1rem;
  color: black;
  width: 60%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomButton = styled.button`
  font-family: semibold;
  font-size: 1.2rem;
  color: white;
  background-color: ${colors.sub};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  width: 50%;
  cursor: pointer;
  margin-top: 0.5rem;
  &:hover {
    background-color: ${colors.subShade};
  }
  @media (max-width: 576px) {
    font-size: 0.9rem;
    width: 40%;
  }
`;
