import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o App', () => {
    test('Verifica o botão de Login', () => {
        renderWithRouterAndRedux(<App />, '/carteira' );

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const button = screen.getByRole('button', { name: /entrar/i});

        userEvent.type(emailInput, 'alguem@alguem.com');
        userEvent.type(passwordInput, '123456');

        expect(button).toBeInTheDocument();
        expect(location.pathname).toBe('/');
        userEvent.click(button);

        // const { location } = history;
        console.log(userEvent);
        // console.log(button);


        console.log(location.pathname);

    })
})