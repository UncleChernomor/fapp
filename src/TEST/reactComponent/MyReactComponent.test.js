import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyReactComponent from './MyReactComponent';

describe('TEST React Component: ', () => {
    test('elements are on the page', () => {
        render(<MyReactComponent />);
        const myText = screen.getByText(/hi all/i);
        const myInput = screen.getByPlaceholderText(/input text/i);
        const myButton = screen.getByRole('button');

        expect(myText).toBeInTheDocument();
        expect(myInput).toBeInTheDocument();
        expect(myButton).toBeInTheDocument();
    });
});
