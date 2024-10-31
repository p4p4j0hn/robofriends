import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('errorboundary', () => {
  it('expect to render ErrorBoundary component', () => {
    expect.assertions(1);
    expect(
      renderer
        .create(
          <ErrorBoundary fallback={<div>sorry</div>}>
            <p>Everything is fine</p>
          </ErrorBoundary>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});

describe('ErrorBoundary', () => {
  // A very buggy component
  const ThrowError = () => {
    throw new Error('Test');
  };

  // Temporarily suppress console errors so we don't clog the logs
  const realError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });
  afterEach(() => {
    console.error = realError;
  });

  it('renders children when everything is fine', async () => {
    expect.assertions(2);
    render(
      <ErrorBoundary fallback={<div>sorry</div>}>
        <p>Everything is fine</p>
      </ErrorBoundary>
    );
    expect(screen.getByText(/Everything is fine/i)).toBeInTheDocument();
    expect(screen.queryByText(/sorry/i)).not.toBeInTheDocument();
  });

  it('shows an apologetic error message when an unhandled exception is thrown', async () => {
    expect.assertions(2);
    render(
      <ErrorBoundary fallback={<div>sorry</div>}>
        <ThrowError />
        <p>Everything is fine</p>
      </ErrorBoundary>
    );
    expect(screen.getByText(/sorry/i)).toBeInTheDocument();
    expect(screen.queryByText(/Everything is fine/i)).not.toBeInTheDocument();
  });
});
