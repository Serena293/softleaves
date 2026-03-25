import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { AudioProvider } from '../context/AudioProvider';

const renderWithRouter = (component) => {
  return render(
    <AudioProvider>
    <BrowserRouter>
      {component}
    </BrowserRouter>
    </AudioProvider>
  );
};

describe('Home - Accessibility', () => {
  it('needs to be accessible', async () => {
    const { container } = renderWithRouter(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});