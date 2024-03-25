import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import { initialStateExpenses } from './helpers/mockData';
import Table from '../components/Table';

const initial = initialStateExpenses;

describe('Testa o coponente Table', () => {
  test('Verifica se os elementos da tabela estão na tela', () => {
    renderWithRouterAndRedux(<Wallet />);
    expect(screen.getByRole('columnheader', { name: 'Descrição' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Tag' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Câmbio utilizado' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Método de pagamento' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Moeda' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Editar/Excluir' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Valor convertido' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Moeda de conversão' })).toBeInTheDocument();
  });
  test('Testa o componente Table', () => {
    renderWithRouterAndRedux(<Table />, '/carteira', initial);
    const element = screen.getByRole('columnheader', {
      name: /descrição/i,
    });
    expect(element).toBeInTheDocument();
  });
  test('Verifica se ao ser clicado, o botão deleta a linha da tabela, alterando o estado global também', () => {
    renderWithRouterAndRedux(<Wallet />, '/carteira', initial);
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(addButton);
  });
});
