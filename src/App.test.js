import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("Book price calculator - Tests", () => {

  test("2 different books - 5% discount", async () => {
    render(<App />)

    const CleanCodeInput = screen.getByLabelText('Clean Code')
    fireEvent.change(CleanCodeInput, { target: { value: 1 } })
    const TheCleanCoderInput = screen.getByLabelText('The Clean Coder')
    fireEvent.change(TheCleanCoderInput, { target: { value: 1 } })

    const calculatePrice = screen.getByRole('button', { name: /Calculate price/i });
    fireEvent.click(calculatePrice)

    const totalPrice = screen.getByRole('heading', { level: 3 });
    expect(totalPrice.innerHTML).toBe('The total price is: 95');
  });

  test("3 different books - 10% discount", async () => {
    render(<App />)

    const CleanCodeInput = screen.getByLabelText('Clean Code')
    fireEvent.change(CleanCodeInput, { target: { value: 1 } })
    const TheCleanCoderInput = screen.getByLabelText('The Clean Coder')
    fireEvent.change(TheCleanCoderInput, { target: { value: 1 } })
    const CleanArchitectureInput = screen.getByLabelText('Clean Architecture')
    fireEvent.change(CleanArchitectureInput, { target: { value: 1 } })

    const calculatePrice = screen.getByRole('button', { name: /Calculate price/i });
    fireEvent.click(calculatePrice)

    const totalPrice = screen.getByRole('heading', { level: 3 });
    expect(totalPrice.innerHTML).toBe('The total price is: 135');
  });

  test("4 different books - 20% discount", async () => {
    render(<App />)

    const CleanCodeInput = screen.getByLabelText('Clean Code')
    fireEvent.change(CleanCodeInput, { target: { value: 1 } })
    const TheCleanCoderInput = screen.getByLabelText('The Clean Coder')
    fireEvent.change(TheCleanCoderInput, { target: { value: 1 } })
    const CleanArchitectureInput = screen.getByLabelText('Clean Architecture')
    fireEvent.change(CleanArchitectureInput, { target: { value: 1 } })
    const TestDrivenDevelopmentInput = screen.getByLabelText('Test Driven Development')
    fireEvent.change(TestDrivenDevelopmentInput, { target: { value: 1 } })

    const calculatePrice = screen.getByRole('button', { name: /Calculate price/i });
    fireEvent.click(calculatePrice)

    const totalPrice = screen.getByRole('heading', { level: 3 });
    expect(totalPrice.innerHTML).toBe('The total price is: 160');
  });

});
