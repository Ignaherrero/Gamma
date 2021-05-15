import React, { useState } from "react";
import CodeVerification from "./CodeVerification";
import { StyledButtonContinue, StyledForm } from "./styles";
import iValidateNumber from "./types";

const ValidateNumber: React.FC<iValidateNumber> = ({
    phoneNumber,
    goBack,
    buttonId,
    handleSubmit
}: iValidateNumber): JSX.Element => {
    const [code, setCode] = useState<string>("");

    const submit = (): void => handleSubmit(code);

    return (
        <StyledForm handleSubmit={submit} isContentCentered>
            <h3>Mi codigo es:</h3>
            <button onClick={goBack} type="button">
                {phoneNumber}
            </button>
            <button>Volver a mandar</button>
            <CodeVerification handleChange={setCode} />
            <StyledButtonContinue id={buttonId} type="submit">
                Identificarme
            </StyledButtonContinue>
        </StyledForm>
    );
};

export default ValidateNumber;
