import { ElementType, ComponentPropsWithoutRef } from 'react';
import * as CSS from 'csstype';

export type As<Props = any> = ElementType<Props>;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type HTMLUiProps<T extends As> = Omit<
  PropsOf<T>,
  T extends 'svg' ? 'ref' | 'children' : 'ref'
> & { as?: As };

export interface SpaceTypes {
  /** Margin on `top`, `left`, `bottom` and `right` */
  margin?: CSS.Property.Margin;
  /** Shorthand for `margin` property */
  m?: CSS.Property.Margin;
  /** Shorthand for `margin-button` property */
  mb?: CSS.Property.MarginBottom;
  /** Shorthand for `margin-top` property */
  mt?: CSS.Property.MarginTop;
  /** Shorthand for `margin-left` property */
  ml?: CSS.Property.MarginLeft;
  /** Shorthand for `margin-right` property */
  mr?: CSS.Property.MarginRight;
  /** Padding on `top`, `left`, `bottom` and `right` */
  padding?: CSS.Property.Padding;
  /** Shorthand for `padding` property */
  p?: CSS.Property.Padding;
  /** Shorthand for `padding-button` property */
  pb?: CSS.Property.PaddingBottom;
  /** Shorthand for `padding-top` property */
  pt?: CSS.Property.PaddingTop;
  /** Shorthand for `padding-left` property */
  pl?: CSS.Property.PaddingLeft;
  /** Shorthand for `padding-right` property */
  pr?: CSS.Property.PaddingRight;
}

export interface TypographyTypes {
  /** The CSS `font-size` property */
  size?: CSS.Property.FontSize;
  /** The CSS `font-family` property */
  family?: CSS.Property.FontFamily;
  /** The CSS `font-weight` property */
  weight?: CSS.Property.FontWeight;
  /**The CSS `letter-spacing` property */
  spacing?: CSS.Property.LetterSpacing;
  /** The CSS `line-height` property */
  line?: CSS.Property.LineHeight;
  /** The CSS `text-align` property */
  align?: CSS.Property.TextAlign;
  /** The CSS `text-decoration` property */
  decoration?: CSS.Property.TextDecoration;
  /** The CSS `text-transform` property */
  casing?: CSS.Property.TextTransform;
  /** The CSS `white-space` property */
  whiteSpace?: CSS.Property.WhiteSpace;
  /* The CSS `word-break` property */
  wordBreak?: CSS.Property.WordBreak;
}

export interface FlexTypes {
  /** The CSS `align-items` property */
  align?: CSS.Property.AlignItems;
  /**The CSS `justify-content` property */
  justify?: CSS.Property.JustifyContent;
  /** The CSS `flex-wrap` property */
  wrap?: CSS.Property.FlexWrap;
  /** The CSS `flex-direction` property */
  direction?: CSS.Property.FlexDirection;
  /** The CSS `flex-basis` property */
  basis?: CSS.Property.FlexBasis;
  /** The CSS `flex-grow` property */
  grow?: CSS.Property.FlexGrow;
  /** The CSS `flex-shrink` property */
  shrink?: CSS.Property.FlexShrink;
  /** The CSS `flex-flow` property */
  flow?: CSS.Property.FlexFlow;
}

export interface ListTypes {
  /** The CSS `list-style-type` property */
  listStyle?: CSS.Property.ListStyleType;
  /** Shorthand for `list-style-type` property */
  ls?: CSS.Property.ListStyleType;
  /** The CSS `list-style-position` property */
  listPosition?: CSS.Property.ListStylePosition;
  /** Shorthand for `list-style-position` property */
  lp?: CSS.Property.ListStylePosition;
  /** The CSS `list-style-image` property */
  listImage?: CSS.Property.ListStyleImage;
  /** Shorthand for `list-style-image` property */
  li?: CSS.Property.ListStyleImage;
}
