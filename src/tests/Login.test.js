import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a página de Login', () => {
    beforeEach(cleanup)
    test('Testando se a página de Login é renderizada', () => {
        renderWithRouterAndRedux(<App />);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const button = screen.getByRole('button');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    test('Testando se depois de colocar as informação renderiza para página de carteira', () => {
        renderWithRouterAndRedux(<App />);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const button = screen.getByRole('button');

        expect(button).toBeDisabled();

        userEvent.type(emailInput, 'alguem@alguem.com');
        userEvent.type(passwordInput, '123456');
        
        expect(button).not.toBeDisabled();
        expect(emailInput.value).toMatch(/@/);
        expect(emailInput.value).toMatch(/.com/);
        expect(passwordInput.value.length).toBeGreaterThanOrEqual(6);

        userEvent.click(button);     
    })
})