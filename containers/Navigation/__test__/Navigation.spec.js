/* eslint-disable no-undef */
import preloadAll from 'jest-next-dynamic';
import '../../../__mocks__/matchMedia.mock';
import '../../../__mocks__/useRouter.mock';
import '../../../__mocks__/innerWidth.mock';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Navigation from '..';

const StoredValue = { wl: [] };
const setLocalStorage = () => void 0;

jest.mock('../../../hooks/useWL', () => ({
  useWL: () => [StoredValue, setLocalStorage]
}));

const mediaQueryMatches = true;

jest.mock('../../../hooks/useMediaQuery', () => ({
  useMediaQuery: () => mediaQueryMatches
}));

beforeAll(async () => {
  await preloadAll();
});

afterEach(cleanup);

describe('render Navigation:', () => {
  it('Renders', async () => {
    render(<Navigation />);
    // screen.debug()
    await expect(screen.getByText('about')).toBeInTheDocument();
    await expect(screen.getByText('menu')).toBeInTheDocument();
  });
  // screen.debug();

  it('renders correctly', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// If you want to mock the hook with different values in different tests:
// import * as hooks from '../../../hooks/useWL'
// jest.spyOn(hooks, 'useWL').mockImplementation(() => ([{wl:[(custom list)],()=>{}}));
