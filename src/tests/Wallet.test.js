import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

const VALUE_INPUT_TEST_ID = 'value-input';

describe('Testa o componente Wallet', () => {
  test('Um campo para adicionar o valor da despesa', async () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira');
    const valueInput = await screen.findByTestId(VALUE_INPUT_TEST_ID);
    expect(valueInput).toBeInTheDocument();
  });
  test('Verifica se o valor da despesa é renderizado', () => {
    renderWithRouterAndRedux(<Wallet />);
    const view = screen.getByTestId('total-field');
    expect(view).toBeInTheDocument();
  });
  test('Verifica se há um elemento h1 TrybeWallet é renderizado ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const h1element = screen.getByRole('heading', {
      name: /trybewallet/i, level: 1 });
    expect(h1element).toBeInTheDocument();
  });
  test('O componente deve se chamar Wallet e estar localizado na pasta "src/pages"', () => {
    const { container } = renderWithRouterAndRedux(<Wallet />, '/carteira', {});
    expect(container).toBeDefined();
  });
});
