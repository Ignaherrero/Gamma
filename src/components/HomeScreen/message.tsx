import React, { ReactElement } from "react";

// Components
import Title from "../Title";
import Paragraph from "../Paragraph";

const Mess = (): ReactElement => {
    return (
        <>
            <Title title="hola" />
            <Paragraph text="parrafo" />
        </>
    );
};

export default Mess;
