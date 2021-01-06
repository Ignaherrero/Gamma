import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import Form from '../forms/Form';
import PhoneNumber from './PhoneNumber';

interface Props {
  handleSubmit?: Function;
  phoneNumber: string;
  buttonId?: string;
}

const StyledButtonContinue = styled.button`
  width: 85%;
  margin: 1rem auto;
`;

const RequestNumber: React.FC<Props> = ({ handleSubmit, phoneNumber, buttonId }): JSX.Element => {

  const [statePhoneNumber, setStatePhoneNumber] = useState<string>(phoneNumber);

  const submit = (event: React.FormEvent) => handleSubmit && handleSubmit(statePhoneNumber);

  return (
    <Form handleSubmit={submit} isContentCentered>
      <h3>Mi numero es:</h3>
      <PhoneNumber handleChange={setStatePhoneNumber} value={statePhoneNumber} />
      <StyledButtonContinue type="submit" id={buttonId}>Enviar codigo</StyledButtonContinue>
    </Form>
  );
};

export default RequestNumber;