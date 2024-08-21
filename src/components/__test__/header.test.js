import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";


// Logo test...
test('Logo should load on rendering header component', () => {
    // Rendering header component inside jsDom...
    const head = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const logo = head.getByTestId('logo')

    expect(logo.src).toBe('https://cdn.worldvectorlogo.com/logos/swiggy-1.svg')
    // console.log("🚀 ~ Logo : ", logo)
});

// Cart test (item count should be zero)...

test("Cart item should be zero on rendring of header", () => {

    const data = render(<StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
    </StaticRouter>)

    const cart = data.getByTestId('cart');
    expect(cart.children.length).toBe(0);
    // console.log(cart);
})