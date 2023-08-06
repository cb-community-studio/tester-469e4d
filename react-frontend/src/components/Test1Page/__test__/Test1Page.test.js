import React from "react";
import { render, screen } from "@testing-library/react";

import Test1Page from "../Test1Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders test1 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Test1Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("test1-datatable")).toBeInTheDocument();
    expect(screen.getByRole("test1-add-button")).toBeInTheDocument();
});
