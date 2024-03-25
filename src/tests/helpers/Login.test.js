import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

const EMAIL_INPUT = 'joao.peixoto678@gmail.com';
const VALID_PASSWORD = '123456';

describe('Testa a tela de Login', () => {
  test('Verifica se há dois campos de input na tela', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText(/senha/i);
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
  test('Cria um botão com o texto \'Entrar\'', () => {
    renderWithRouterAndRedux(<App />, '/');

    const button = screen.getByText(/Entrar/i);
    expect(button).toBeInTheDocument();
  });
  test('Verifica se após clicar em Entrar, a página é redirecionada para a rota /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonClick = screen.getByRole('button', { name: /entrar/i });
    userEvent.type('click', buttonClick);
    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se o botão de Entrar é desativado se os inputs não são preenchidos corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByText(/Entrar/i);
    expect(button).toBeDisabled();
  });
  test('Teste também se a URL exibida no navegador muda', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const wallet = screen.getByRole('button', { name: /entrar/i });
    userEvent.type('click', wallet);
    expect(history.location.pathname).toBe('/');
  });

  test('Salve o email no estado da aplicação, com a chave email, assim que o usuário logar.', () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByText(/Entrar/i);

    userEvent.type(email, EMAIL_INPUT);
    userEvent.type(password, VALID_PASSWORD);
    userEvent.click(button);
    expect(store.getState().user.email).toBe('joao.peixoto678@gmail.com');
  });
});
