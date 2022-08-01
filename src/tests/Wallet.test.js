import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react/dist/pure';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';
import WalletForm from '../components/WalletForm';

describe('Testando a Página Wallet', () => {
    beforeEach(cleanup)
    test('Testando se os inputs, botões e o que é necessário está sendo renderizado', () => {
        renderWithRouterAndRedux(<Wallet />);
    
        const totalField = screen.getByTestId("total-field");
        const headerCurrencyField = screen.getByTestId("header-currency-field");
        const valueInput = screen.getByTestId("value-input");
        const descriptionInput = screen.getByTestId("description-input");
        const currencyInput = screen.getByTestId("currency-input");
        const methodInput = screen.getByTestId("method-input");
        const tagInput = screen.getByTestId("tag-input");
        const button = screen.getByRole('button');
        
        
        expect(totalField).toBeInTheDocument();
        expect(headerCurrencyField).toBeInTheDocument();
        expect(valueInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();
        expect(currencyInput).toBeInTheDocument();
        expect(methodInput).toBeInTheDocument();
        expect(tagInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    test('Testando se o valor total das despesas é renderizado', () => {
        const stateMock = { user: {email: 'alguem@alguem.com'}}
        renderWithRouterAndRedux(<Wallet />, {initialState: stateMock});
        
        const valueInput = screen.getByTestId("value-input");
        const headerCurrencyField = screen.getByTestId("header-currency-field");
        const email = screen.getByTestId('email-field');
        const totalField = screen.getByTestId("total-field");
        expect(email).toBeInTheDocument();
        expect(email.innerHTML).toBe('alguem@alguem.com');
        expect(headerCurrencyField.innerHTML).toBe('BRL')
        // userEvent.type(valueInput, 1);
        // expect(valueInput.value).toBe(1);
        // userEvent.type(currencyInput, 'USD');


        
        expect(totalField.innerHTML).toBe('0')
        // userEvent.click(screen.queryByText('Adicionar despesa'));

        // expect(totalField.innerHTML).toBe('4.75')
        // const mockCurrency = Object.values(mockData[0].ask);
    })

    // test('Testando o WalletForm', () => {
    //     // const stateMock = { 
    //     //     wallet: {
    //     //         currencyList: ['USD','CAD', 'GBP', 'ARS', 'BTC',
    //     //          'LTC', 'EUR', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS',
    //     //           'ETH', 'XRP', 'DOGE' ]
    //     //     }
    //     // }
    //     renderWithRouterAndRedux(<WalletForm />);
    //     const button = screen.getByRole('button');
    //     userEvent.click(button);

        // const currencyInput = screen.getAllByRole('option')[0];
        // expect(currencyInput.innerHTML).toBe('USD')
    // })
})