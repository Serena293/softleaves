import { render } from "@testing-library/react"
import { describe, it, expect } from 'vitest';
import MemoryGame from "./MemoryGame";
import { axe } from 'vitest-axe';
import { AudioProvider } from "../context/AudioProvider";
import { BrowserRouter } from 'react-router-dom';

const renderWithProviders = (component) => {
  return render(
    <AudioProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </AudioProvider>
  );
};

describe('Memory game - accesibility', () => {

    it('needs to be accesible', async () => {
        const {container} = renderWithProviders(<MemoryGame/>)
const results = await axe(container);
    expect(results).toHaveNoViolations();
    })
})