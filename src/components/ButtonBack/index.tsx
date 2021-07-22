import React from "react";
import { useHistory } from "react-router-dom";
import IconBack from "../Icons/IconBack";

const ButtonBack = (): JSX.Element => {
    const history = useHistory();

    const handleClick = (): void => {
        history.goBack();
    };

    return (
        <button onClick={handleClick}>
            <IconBack />
        </button>
    );
};

export default ButtonBack;
