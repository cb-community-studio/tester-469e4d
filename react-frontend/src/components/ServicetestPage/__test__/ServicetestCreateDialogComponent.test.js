import React from "react";
import { render, screen } from "@testing-library/react";

import ServicetestCreateDialogComponent from "../ServicetestCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders servicetest create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ServicetestCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("servicetest-create-dialog-component")).toBeInTheDocument();
});
