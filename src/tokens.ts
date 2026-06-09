export const colors = {
  bg:         '#0B0B0D',
  surf1:      '#111214',
  surf2:      '#16181C',
  gold:       '#D8BD71',
  gold2:      '#BEA256',
  amber:      '#F2AD75',
  white:      '#FFFFFF',
  muted:      '#A3A3A3',
  success:    '#4CAF50',
  border:     'rgba(255, 255, 255, 0.08)',
  glow:       'rgba(216, 189, 113, 0.15)',
  glowAmber:  'rgba(242, 173, 117, 0.2)',
} as const;

export const fonts = {
  serif: "'Cormorant Garamond', Georgia, serif",
  sans:  "'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const fontSizes = {
  xs:   '11px',
  sm:   '13px',
  base: '16px',
  md:   '18px',
  lg:   '22px',
  xl:   '40px',
  '2xl': '44px',
  hero: '72px',
} as const;

export const spacing = {
  1:       '4px',
  2:       '8px',
  3:       '12px',
  4:       '16px',
  5:       '20px',
  6:       '24px',
  8:       '32px',
  10:      '40px',
  12:      '48px',
  14:      '56px',
  16:      '64px',
  section: '120px',
} as const;

export const borderRadius = {
  sm:   '4px',
  md:   '10px',
  lg:   '16px',
  xl:   '20px',
  '2xl': '24px',
  '3xl': '28px',
  pill: '100px',
} as const;

export const transitions = {
  default: 'all 0.3s ease',
  slow:    'all 0.4s ease',
} as const;

/** CSS var references — use in inline styles or CSS-in-JS */
export const cssVars = {
  colorBg:        'var(--velaro-color-bg)',
  colorSurf1:     'var(--velaro-color-surf-1)',
  colorSurf2:     'var(--velaro-color-surf-2)',
  colorGold:      'var(--velaro-color-gold)',
  colorGold2:     'var(--velaro-color-gold-2)',
  colorAmber:     'var(--velaro-color-amber)',
  colorWhite:     'var(--velaro-color-white)',
  colorMuted:     'var(--velaro-color-muted)',
  colorSuccess:   'var(--velaro-color-success)',
  colorBorder:    'var(--velaro-color-border)',
  colorGlow:      'var(--velaro-color-glow)',
  colorGlowAmber: 'var(--velaro-color-glow-amber)',
  fontSerif:      'var(--velaro-font-serif)',
  fontSans:       'var(--velaro-font-sans)',
  radiusSm:       'var(--velaro-radius-sm)',
  radiusMd:       'var(--velaro-radius-md)',
  radiusLg:       'var(--velaro-radius-lg)',
  radiusXl:       'var(--velaro-radius-xl)',
  radiusPill:     'var(--velaro-radius-pill)',
  transition:     'var(--velaro-transition)',
  transitionSlow: 'var(--velaro-transition-slow)',
} as const;
