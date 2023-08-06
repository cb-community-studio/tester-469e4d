import React from "react";
import { render, screen } from "@testing-library/react";

import ServicetestEditDialogComponent from "../ServicetestEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders servicetest edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ServicetestEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("servicetest-edit-dialog-component")).toBeInTheDocument();
});
