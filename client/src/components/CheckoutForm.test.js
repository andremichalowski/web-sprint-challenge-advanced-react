import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("Form header renders", () => {
  const container = render(<CheckoutForm />)
  const header = container.getByText("Checkout Form");
  expect(header).toBeInTheDocument();
});

test("Form shows success message on submit with form details", () => {
  const container = render(<CheckoutForm />)

  const firstName = container.getByLabelText(/first name*/i)
  const lastName = container.getByLabelText(/last name*/i)
  const address = container.getByLabelText(/Address*/i)
  const city = container.getByLabelText(/city*/i)
  const state = container.getByLabelText(/state*/i)
  const zip = container.getByLabelText(/zip*/i)

  fireEvent.change(firstName, { target: { value:'John' } })
  fireEvent.change(lastName, { target: { value:'Deer' } })
  fireEvent.change(address, { target: { value:'35 Lawncare St.' } })
  fireEvent.change(city, { target: { value:'Hedgingville' } })
  fireEvent.change(state, { target: { value:'Washington' } })
  fireEvent.change(zip, { target: { value:'54678' } })

  const submitButton = container.getByText('Checkout');
  fireEvent.click(submitButton);

  const successMessage = container.getByTestId(/successMessage/i);
  expect(successMessage).toBeInTheDocument();
});

// Breaking example (uncomment bellow to reveal breaking "expect" line):

// test('Breaking test example, testing for "name"', () => {
//   const { getByLabelText } = render(<CheckoutForm />);
//   const firstNameLabel = getByLabelText(/first name*/i);
//   // expect(firstNameLabel).toHaveAttribute('name'); //functioning
//   expect(firstNameLabel).toHaveAttribute('id'); //breaking
// })
