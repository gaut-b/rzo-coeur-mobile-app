import React from 'react';

import { cleanup, screen, setup, waitFor } from '@/lib/test';

import { SignUpForm, type SignUpFormProps } from './sign-up-form';

afterEach(cleanup);

const onSubmitMock: jest.Mock<SignUpFormProps['onSubmit']> = jest.fn();

describe('SignUp Form ', () => {
  it('renders correctly', async () => {
    setup(<SignUpForm />);
    expect(await screen.findByTestId('form-title')).toBeOnTheScreen();
  });

  it('should display required error when values are empty', async () => {
    const { user } = setup(<SignUpForm />);

    const button = screen.getByTestId('sign-up-button');
    expect(screen.queryByTestId('email-input-error')).not.toBeOnTheScreen();
    await user.press(button);
    expect(await screen.findByTestId('email-input-error')).toBeOnTheScreen();
    expect(await screen.findByText(/Email is required/i)).toBeOnTheScreen();
  });

  it('should display matching error when email is invalid', async () => {
    const { user } = setup(<SignUpForm />);

    const button = screen.getByTestId('sign-up-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(emailInput, 'yyyyy');
    await user.type(passwordInput, 'test');
    await user.press(button);

    expect(await screen.findByTestId('email-input-error')).toBeOnTheScreen();
    expect(await screen.findByText(/Invalid email format/i)).toBeOnTheScreen();
  });

  it('Should call SignUpForm with correct values when values are valid', async () => {
    const { user } = setup(<SignUpForm onSubmit={onSubmitMock} />);

    const button = screen.getByTestId('sign-up-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const password2Input = screen.getByTestId('password2-input');
    const firstNameInput = screen.getByTestId('firstName-input');
    const lastNameInput = screen.getByTestId('lastName-input');

    await user.type(emailInput, 'youssef@gmail.com');
    await user.type(passwordInput, 'password');
    await user.type(password2Input, 'password');
    await user.type(firstNameInput, 'Youssef');
    await user.type(lastNameInput, 'Doe');
    await user.press(button);
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
    // expect.objectContaining({}) because we don't want to test the target event we are receiving from the onSubmit function
    expect(onSubmitMock).toHaveBeenCalledWith(
      {
        email: 'youssef@gmail.com',
        password1: 'password',
        password2: 'password',
        firstName: 'Youssef',
        lastName: 'Doe',
      },
      expect.objectContaining({})
    );
  });
});
