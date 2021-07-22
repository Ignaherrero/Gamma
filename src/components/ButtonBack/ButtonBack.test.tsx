import React from "react";
import ButtonBack from "./";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { Router } from "react-router-dom";

describe("<ButtonBack />", () => {
    test("render content", () => {
        const { getByText } = render(<ButtonBack />);
        getByText("Atras");
    });
    test("onClick", () => {
        const history = createMemoryHistory();
        history.push("/somelocation");
        expect(history.location.pathname).toEqual("/somelocation");

        const { getByRole } = render(
            <Router history={history}>
                <ButtonBack />
            </Router>
        );
        const button = getByRole("button");
        fireEvent.click(button);
        expect(history.location.pathname).toEqual("/");
    });
});
