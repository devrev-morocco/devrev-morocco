/* eslint-disable no-undef */

// This will mock `next/dynamic`, so make sure to import it before any of your
// components.

import preloadAll from 'jest-next-dynamic';
import '../../../__test__/mock/matchMedia.mock'; // Must be imported before the tested file
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      basePath: '',
      pathname: '/',
      route: '/',
      asPath: '/',
      query: {},
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn()
      },
      isFallback: false
    };
  }
}));

const StoredValue = { wl: [] };
const setLocalStorage = () => void 0;

jest.mock('../../../hooks/useWL', () => ({
  useWL: () => [StoredValue, setLocalStorage]
}));

beforeAll(async () => {
  await preloadAll();
});

afterEach(cleanup);

test('render Navigation:', async () => {
  await preloadAll();
  render(<Navigation />);
  screen.debug();
  // expect(screen.getByText('Store')).toBeInTheDocument();
});

// If you want to mock the hook with different values in different tests:
// import * as hooks from '../../../hooks/useWL'
// jest.spyOn(hooks, 'useWL').mockImplementation(() => ([{wl:[(custom list)],()=>{}}));
