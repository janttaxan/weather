import { render, screen } from '@testing-library/react';
import { Page } from 'widgets/page/page';

describe('Page', () => {
  test('render children', () => {
    const { container } = render(
      <Page context={{ user: null }}>
        <div data-testid='child'>
          <h1>Heading</h1>
        </div>
      </Page>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
