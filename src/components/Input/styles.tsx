import styled from "styled-components";
import { IInput } from "./types";
import { theme, fontSizes, colors } from "../../common/styles/variables";

export const StyledInputContainer = styled.div<{ iconPositionLeft: boolean }>`
    background-color: ${colors.lightGray};
    margin: 20px 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${colors.lightGray} solid 2px;
    border-radius: 7px;
    padding-left: 10px;
    position: relative;
    flex-direction: ${(props): string => (props.iconPositionLeft ? "row" : "row-reverse")};
`;

export const StyledIconBox = styled.div`
    background-color: ${colors.lightGray};
    position: static;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 50px;
    cursor: pointer;
    flex-direction: row-reverse;
`;

export const StyledRightIconBox = styled.div`
    background-color: ${colors.lightGray};
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 50px;
    cursor: pointer;
`;

export const StyledImg = styled.img`
    display: block;
    transform: translate(-1px, -5px);
`;

export const StyledInput = styled.input<IInput>`
    background-color: ${colors.lightGray};
    color: ${colors.gray};
    font-size: ${fontSizes.font12};
    font-family: ${theme.fontPrimary};
    border: none;
    padding-left: 10px;
    width: 100%;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        box-shadow: none;
        -webkit-box-shadow: 0 0 0px 1000px ${colors.lightGray} inset;
    }
    :focus {
        outline: none;
    }
`;
