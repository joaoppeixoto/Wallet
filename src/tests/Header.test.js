import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';

describe('Testa o componente Header', () => {
  test('Verifica se há um elemento de email no Header', () => {
    renderWithRouterAndRedux(<Header />);
    const emailElement = screen.getByText('Email:');
    expect(emailElement).toContainHTML('Email:');
  });
  test('Verifica se há um elemento na tela que represente a moeda BRL', () => {
    renderWithRouterAndRedux(<Header />);
    const coinElement = screen.getByText(/brl/i);
    expect(coinElement).toBeInTheDocument();
  });
});
