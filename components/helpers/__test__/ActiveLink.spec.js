/* eslint-disable no-undef */
import { render, cleanup, screen } from '@testing-library/react';
import ActiveLink from '../ActiveLink';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/playlist/1?v=7XjAtQbN-BQ',
      pathname: '',
      query: '',
      asPath: '/playlist/1?v=7XjAtQbN-BQ'
    };
  }
}));

describe('render ActiveLink:', () => {
  it('Has Href', () => {
    const { container } = render(
      <ActiveLink href={'/playlist/1?v=7XjAtQbN-BQ'} activeClassName="selected">
        <a className="foo">
          <span>playlist</span>
        </a>
      </ActiveLink>
    );

    const A_node = container.querySelector('A');
    expect(A_node).toHaveAttribute('href', '/playlist/1?v=7XjAtQbN-BQ');
  });

  it('Has `selected` className', () => {
    const { container } = render(
      <ActiveLink href={'/playlist/1?v=7XjAtQbN-BQ'} activeClassName="selected">
        <a className="foo">
          <span>playlist</span>
        </a>
      </ActiveLink>
    );

    const A_node = container.querySelector('A');
    expect(A_node.classList.contains('foo')).toBe(true);
    expect(A_node).toHaveClass('selected');
  });

  it('Has not `selected` className', () => {
    render(
      <ActiveLink href={'/playlist/1?v=7XjAtQbN-BQ'} activeClassName="selected">
        <a className={'foo'}>
          <span>playlist</span>
        </a>
      </ActiveLink>
    );
    expect(
      screen.getByText('playlist').closest('a').classList.contains('foo')
    ).toBe(true);
    expect(
      screen.getByText('playlist').closest('a').classList.contains('selected')
    ).toBe(true);
  });
});
