import { render, screen } from '@testing-library/react';
import SrchRslt from './App';

test('renders learn react link', () => {
  render(<SrchRslt
    src="burger.jpg" 
    // href="https://www.britannica.com/animal/tiger"
    // linktext="britannica.com" 
    caption="BUrger"
    />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
