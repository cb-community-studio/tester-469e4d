import React from "react";
import { render, screen } from "@testing-library/react";

import Test2Page from "../Test2Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders test2 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Test2Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("test2-datatable")).toBeInTheDocument();
    expect(screen.getByRole("test2-add-button")).toBeInTheDocument();
});
