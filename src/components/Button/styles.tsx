import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { IButton } from "./types";
import { theme, fontSizes } from "../../common/styles/variables";

export const StyledButton = styled.button<IButton>`
    align-items: center;
    font-size: ${fontSizes.font16};
    font-family: ${theme.fontPrimary};
    border-radius: 10px;
    display: flex;
    line-height: 24px;
    justify-content: center;
    text-decoration: none;
    padding: 0.7rem 3rem;
    margin: 0.2rem;
    width: 243px;
    height: 48px;
    cursor: pointer;
    ${({ variant }): FlattenSimpleInterpolation => variants[variant]}
    ${({ styles }): string | undefined => styles}
    ${({ disabled }): FlattenSimpleInterpolation | false | undefined =>
        disabled &&
        css`
            &.disabled {
                cursor: not-allowed;
                opacity: 0.6;
            }
        `}

    &:hover {
        opacity: 0.6;
    }
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
