import type { colors, fonts, fontSizes, spacing, borderRadius, transitions } from './tokens';

export type ColorToken       = keyof typeof colors;
export type FontToken        = keyof typeof fonts;
export type FontSizeToken    = keyof typeof fontSizes;
export type SpacingToken     = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
export type TransitionToken  = keyof typeof transitions;

export interface VelaroTheme {
  colors:       typeof colors;
  fonts:        typeof fonts;
  fontSizes:    typeof fontSizes;
  spacing:      typeof spacing;
  borderRadius: typeof borderRadius;
  transitions:  typeof transitions;
}
