import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import SettingsPanel from './SettingsPanel';
import { AudioProvider } from '../context/AudioProvider';

const renderWithProvider = (component) => {
  return render(
    <AudioProvider>
      {component}
    </AudioProvider>
  );
};

describe('SettingsPanel - Accessibility', () => {
  it('checks for accessibility', async () => {
    const { container } = renderWithProvider(<SettingsPanel />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});