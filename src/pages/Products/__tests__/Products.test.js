import {render} from "@testing-library/react"
import {BrowserRouter as Router} from "react-router-dom"
import Products from '../Products'

describe("Products", () => {
    test("Should render properly", () => {
        const {getByText} = render(
        <Router>
            <Products/>
        </Router>
        )
        getByText(/Products/i)
        getByText(/Product 1/i)
        getByText(/Product 2/i)
    })
});
