import React from "react";
import { render, screen } from "@testing-library/react";

import ServicetestPage from "../ServicetestPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders servicetest page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ServicetestPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("servicetest-datatable")).toBeInTheDocument();
    expect(screen.getByRole("servicetest-add-button")).toBeInTheDocument();
});
