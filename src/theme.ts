import { colors, fonts, fontSizes, spacing, borderRadius, transitions } from './tokens';
import type { VelaroTheme } from './types';

export const theme: VelaroTheme = {
  colors,
  fonts,
  fontSizes,
  spacing,
  borderRadius,
  transitions,
} as const;
