import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

// Button component types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary';
  className?: string;
}

// Link component types
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

// Mouse position type
export interface MousePosition {
  x: number;
  y: number;
}

// Floating icon type
export interface FloatingIcon {
  icon: string;
  delay: number;
}

// Feature highlight type
export interface FeatureHighlight {
  icon: string;
  text: string;
}

// Statistic type
export interface Statistic {
  number: string;
  label: string;
}

// Animated gradient props
export interface AnimatedGradientProps {
  className?: string;
}

// Floating icons props
export interface FloatingIconsProps {
  icons?: FloatingIcon[];
  className?: string;
}

// Hero section props
export interface HeroSectionProps {
  title?: {
    line1?: string;
    line2?: string;
    subtitle?: string;
  };
  description?: string;
  badge?: {
    text: string;
    showIndicator?: boolean;
  };
  features?: FeatureHighlight[];
  statistics?: Statistic[];
  buttons?: {
    primary?: {
      text: string;
      href: string;
      icon?: string;
    };
    secondary?: {
      text: string;
      href: string;
      icon?: string;
    };
  };
  showScrollIndicator?: boolean;
  className?: string;
}

// CSS animation keyframes type
export interface AnimationKeyframes {
  [key: string]: {
    [property: string]: string | number;
  };
}

// Style configuration type
export interface StyleConfig {
  colors: {
    gradient: {
      from: string;
      via?: string;
      to: string;
    };
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    background: {
      primary: string;
      overlay: string;
    };
  };
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: string;
  };
}

// Particle configuration type
export interface ParticleConfig {
  count: number;
  size: {
    min: number;
    max: number;
  };
  opacity: {
    min: number;
    max: number;
  };
  animation: {
    duration: {
      min: number;
      max: number;
    };
    delay: {
      min: number;
      max: number;
    };
  };
}

// Orb configuration type
export interface OrbConfig {
  size: string;
  position: {
    top: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  colors: {
    from: string;
    to: string;
  };
  animation: {
    type: 'pulse' | 'float' | 'rotate';
    delay?: string;
  };
}

// Component state types
export interface HeroSectionState {
  isVisible: boolean;
  mousePosition: MousePosition;
  isHovered: boolean;
}

// Animation variants type
export type AnimationVariant = 
  | 'fadeIn'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'rotate'
  | 'bounce';

// Responsive breakpoint types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveConfig<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

// Theme configuration type
export interface ThemeConfig {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Event handler types
export interface HeroSectionEventHandlers {
  onMouseMove?: (event: MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onScroll?: (event: Event) => void;
  onResize?: (event: Event) => void;
}

// Custom hook return types
export interface UseMousePositionReturn {
  mousePosition: MousePosition;
  isMouseActive: boolean;
}

export interface UseAnimationReturn {
  isVisible: boolean;
  triggerAnimation: () => void;
  resetAnimation: () => void;
}

export interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: Breakpoint;
}