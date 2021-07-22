import React from "react";
import Button from "../Button";
import {
    StyledModal,
    StyledModalContent,
    StyledButtonsWrapper,
    StyledModalHeader,
    StyledModalTitle,
    StyledCloseButton,
    StyledModalMain
} from "./styles";
import { IModal } from "./types";
import * as variantType from "../../common/styles/constants";
import { useTranslation } from "react-i18next";

const Modal: React.FC<IModal> = ({
    show = false,
    setShow,
    title,
    message,
    handleAccept
}: IModal) => {
    const handleAcceptAction = (): void => {
        handleAccept && handleAccept();
        setShow && setShow(false);
    };
    const handleClose = (): void => {
        setShow && setShow(false);
    };
    const { t } = useTranslation();

    return (
        <>
            {show && (
                <StyledModal>
                    <StyledModalContent>
                        <StyledModalHeader>
                            <StyledModalTitle>{title}</StyledModalTitle>
                            <StyledCloseButton onClick={handleClose}>X</StyledCloseButton>
                        </StyledModalHeader>
                        <StyledModalMain>{message}</StyledModalMain>
                        <StyledButtonsWrapper>
                            {handleAccept && (
                                <Button
                                    handleClick={handleClose}
                                    styles={"width: 100px;"}
                                    variant={variantType.SECONDARY}>
                                    {t("Modal:Close")}
                                </Button>
                            )}
                            <Button
                                handleClick={handleAcceptAction}
                                styles={"width: 100px;"}
                                variant={variantType.PRIMARY}>
                                {t("Modal:Ok")}
                            </Button>
                        </StyledButtonsWrapper>
                    </StyledModalContent>
                </StyledModal>
            )}
        </>
    );
};

export default Modal;
