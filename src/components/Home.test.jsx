import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Home - Accessibility', () => {
  it('needs to be accessible', async () => {
    const { container } = renderWithRouter(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});