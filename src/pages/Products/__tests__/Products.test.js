import {render} from "@testing-library/react"
import { renderWithRouterContext } from '../../../../__tests__/wrappedContext';
import Products from '../Products'

describe("Products", () => {
    test("Should render properly", () => {
        const {getByText} = render(renderWithRouterContext(<Products/>))
        getByText(/Products/i)
        getByText(/Product 1/i)
        getByText(/Product 2/i)
    })
});
