// src/setup.js
import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';
import '@testing-library/jest-dom/vitest';

expect.extend(matchers);