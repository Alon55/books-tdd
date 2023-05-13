import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const addBooksAndCalcPrice = (bookArr) => {

  bookArr.forEach(book => {
    const input = screen.getByLabelText(book.title)
    fireEvent.change(input, { target: { value: book.quantity } })
  });

  const calculatePrice = screen.getByRole('button', { name: /Calculate price/i });
  fireEvent.click(calculatePrice)
}

describe("Book price calculator - Tests", () => {

  test("2 different books - 5% discount", async () => {
    render(<App />)

    addBooksAndCalcPrice([{ title: 'Clean Code', quantity: 1 }, { title: 'The Clean Coder', quantity: 1 }])

    const totalPrice = screen.getByRole('heading', { level: 3 });
    expect(totalPrice.innerHTML).toBe('The total price is: 95');
  });

  test("3 different books - 10% discount", async () => {
    render(<App />)

    addBooksAndCalcPrice([{ title: 'Clean Code', quantity: 1 }, { title: 'The Clean Coder', quantity: 1 }, { title: 'Clean Architecture', quantity: 1 }])

    const totalPrice = screen.getByRole('heading', { level: 3 });
    expect(totalPrice.innerHTML).toBe('The total price is: 135');
  });

  test("4 different books - 20% discount", async () => {
    render(<App />)

    addBooksAndCalcPrice([{ title: 'Clean Code', quantity: 1 }, { title: 'The Clean Coder', quantity: 1 }, { title: 'Clean Architecture', quantity: 1 }, { title: 'Test Driven Development', quantity: 1 }])

    const totalPrice = screen.getByRole('heading', { level: 3 });
    expect(totalPrice.innerHTML).toBe('The total price is: 160');
  });

});
