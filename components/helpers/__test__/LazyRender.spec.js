/* eslint-disable no-undef */
import { render, cleanup, screen } from '@testing-library/react';
import LazyRender from '../LazyRender';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const SusComponent = () => <div data-testid="lrd">Renders Suspense</div>;

const ChildComponent = () => (
  <div>
    {' '}
    <span data-testid="lrd">Renders children</span>{' '}
  </div>
);

describe('Renders LazyRender', () => {
  it('Renders children', () => {
    render(
      <LazyRender render={true} Suspense={<SusComponent />}>
        <ChildComponent />
      </LazyRender>
    );
    const element = screen.getByTestId('lrd');
    expect(element).not.toEqual('Renders Suspense');
    expect(screen.getByText('Renders children')).toBeInTheDocument();
  });

  it('Renders Suspense', () => {
    render(
      <LazyRender render={false} Suspense={<SusComponent />}>
        <ChildComponent />
      </LazyRender>
    );
    const element = screen.getByTestId('lrd');
    expect(element).not.toEqual('Renders children');
    expect(screen.getByText('Renders Suspense')).toBeInTheDocument();
  });
});
