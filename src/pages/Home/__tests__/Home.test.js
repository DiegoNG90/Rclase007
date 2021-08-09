import { render } from '@testing-library/react';
import { renderWithRouterContext } from '../../../../__tests__/wrappedContext';
import Home from '../Home';

describe('Home', () => {
  test('Should render properly', () => {
    const { getByText } = render(renderWithRouterContext(<Home />));
    getByText(/Home/i);
  });
});
