import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// testing the App component
test('feature branch changes', () => {
  render(<App />);
  const featureBranchElement = screen.getByText(/Some feature branch changes that will be deployed./i);
  expect(featureBranchElement).toBeInTheDocument();
});
