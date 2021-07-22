import React, { useEffect, useState } from "react";
import firebase from "firebase";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PhoneValidator from "../../utils/PhoneValidator";
import { sendSMSCode, verifyCode, getRecaptcha } from "../../services/firebase/phone-auth";

import { StyledContainer, StyledMain } from "./styles";
import RequestNumber from "./RequestNumber";
import ValidateNumber from "./ValidateNumber";

const MovilAuth = (): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [validating, setValidating] = useState<boolean>(false);
    const [recaptcha, setRecaptcha] = useState<firebase.auth.RecaptchaVerifier | null>();
    const [veriResult, setVeriResult] = useState<firebase.auth.ConfirmationResult | null>();
    const ID = "MovilAuth";

    useEffect(() => {
        setRecaptcha(getRecaptcha(ID));
    }, []);

    const closeValidation = (): void => setValidating(false);

    const openValidation = (formPhoneNumber: string): void => {
        if (PhoneValidator(formPhoneNumber) && recaptcha) {
            setPhoneNumber(formPhoneNumber);
            sendSMSCode(formPhoneNumber, recaptcha).then((result) => {
                setVeriResult(result);
                setValidating(true);
            });
        }
    };

    const validateNumberFirebase = async (code: string): Promise<boolean | undefined> => {
        if (veriResult) {
            const result = await verifyCode(code, veriResult);
            if (result) setModalMessage("Logueadisimo!");
            setShowModal(true);
            return result;
        }

        return false;
    };

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    return (
        <StyledContainer>
            <Header>{/* <ButtonBack /> */}</Header>
            <StyledMain>
                {validating ? (
                    <ValidateNumber
                        goBack={closeValidation}
                        handleSubmit={validateNumberFirebase}
                        phoneNumber={phoneNumber ?? ""}
                    />
                ) : (
                    <RequestNumber
                        buttonId={ID}
                        handleSubmit={openValidation}
                        phoneNumber={phoneNumber ?? ""}
                    />
                )}
            </StyledMain>
            <Modal message={modalMessage} setShow={setShowModal} show={showModal}></Modal>
        </StyledContainer>
    );
};

export default MovilAuth;
