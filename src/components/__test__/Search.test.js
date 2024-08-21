// Intigration testing...

import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { render } from "@testing-library/react";
import { RESTAURANT_MOCK_DATA } from "../../mocks/mockDataRestaurant";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_MOCK_DATA);
        }
    });
});

test("Homepage search testing ", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>

                <Body />

            </Provider>
        </StaticRouter>
    );

    console.log(body);
});