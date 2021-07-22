import styled, { css } from "styled-components";
// import { IModal } from "./types";
import { colors, theme } from "../../common/styles/variables";

export const StyledModal = styled.div`
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const StyledModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    border-radius: 5px;
    width: auto;
    min-height: 100px;
    height: auto;
`;

export const StyledModalTitle = styled.div`
    width: 95%;
`;

export const StyledModalHeader = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    border-bottom: 0.2px solid ${colors.lightGray};
    border-color: black;
`;

export const StyledCloseButton = styled.div`
    color: #aaaaaa;
    float: right;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;

export const StyledModalMain = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`;

export const StyledButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
`;

export const variants = {
    primary: css`
        background-color: ${theme.colorPrimary};
        border: ${theme.colorPrimary} solid 2px;
        color: ${theme.colorWhite};
    `,
    secondary: css`
        background-color: ${theme.colorWhite};
        border: ${theme.colorSecondary} solid 2px;
        color: ${theme.colorSecondary};
    `
};
