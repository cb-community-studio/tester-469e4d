import React from "react";
import { render, screen } from "@testing-library/react";

import ServicePage from "../ServicePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders service page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ServicePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("service-datatable")).toBeInTheDocument();
    expect(screen.getByRole("service-add-button")).toBeInTheDocument();
});
