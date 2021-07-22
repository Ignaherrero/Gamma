import React, { useState, FormEvent } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { InputIsValid } from "../../utils/InputValidation";
import Logo from "../../assets/img/Logo.svg";
import * as variantType from "../../common/styles/constants";
import { StyledMainWrapper, StyledP, StyledForm } from "./styles";
import eye from "../../assets/img/eye.svg";
import { useTranslation } from "react-i18next";
import { signInWithEmailAndPassword } from "../../services/firebase/email-auth";
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = (): JSX.Element => {
    const { t } = useTranslation("Login");
    const { push } = useHistory();

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const [usernameObj, setUsernameObj] = useState({
        value: "",
        valid: false
    });

    const [passwordObj, setPasswordObj] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const validInput = InputIsValid(newValue, true);
        const newState = {
            ...usernameObj,
            value: newValue,
            valid: validInput
        };

        return setUsernameObj(newState);
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const validInput = InputIsValid(newValue);
        const newState = {
            ...passwordObj,
            value: newValue,
            valid: validInput
        };

        return setPasswordObj(newState);
    };

    const [inputShow, setInputShow] = useState(false);
    const togglePasswordVisibility = (): void => {
        setInputShow(!inputShow);
    };

    const submitHandler = (event?: FormEvent<HTMLFormElement>): void => {
        event?.preventDefault();
        if (usernameObj.valid && passwordObj.valid) {
            signInWithEmailAndPassword(usernameObj.value, passwordObj.value)
                .then((/*data*/) => {
                    push("home");
                })
                .catch((error) => setModalMessage(error.message));
        } else {
            setModalMessage("The username and password are not valid");
        }
        setShowModal(true);
    };

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>{t("Title")}</StyledP>
            </div>
            <StyledForm onSubmit={submitHandler}>
                <Input
                    autocomplete="user-name"
                    doFocus
                    id="user-name"
                    name="user-name"
                    onChange={AccountInputHandler}
                    placeholder={t("AccountInputPlaceholder")}
                    type="text"
                    value={usernameObj.value}
                />
                <Input
                    autocomplete="current-password"
                    icon={eye}
                    id="current-password"
                    name="current-password"
                    onChange={PasswordInputHandler}
                    onIconClick={togglePasswordVisibility}
                    placeholder={t("PasswordInputPlaceholder")}
                    type={inputShow ? "text" : "password"}
                    value={passwordObj.value}
                />
                <Button variant={variantType.PRIMARY}>{t("Login")}</Button>
            </StyledForm>
            <Modal message={modalMessage} setShow={setShowModal} show={showModal}></Modal>
        </StyledMainWrapper>
    );
};

export default LoginPage;
