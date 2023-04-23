import { render, getByTestId } from '@testing-library/react';

import { Button } from 'shared/ui/button';

describe('Button component', () => {
  it('render a button', () => {
    render(<Button text='test button' />);
    expect(getByTestId(document.documentElement, 'button')).toBeInTheDocument();
  });

  it('renders button unchanged', () => {
    const { container } = render(<Button text='test' />);
    expect(container).toMatchSnapshot();
  });
});
