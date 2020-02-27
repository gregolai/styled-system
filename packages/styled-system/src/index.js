import { createStyleFunction, createParser } from '@tmp-styled-system/core'
// v4 api shims
import layout from '@tmp-styled-system/layout'
import color from '@tmp-styled-system/color'
import typography from '@tmp-styled-system/typography'
import flexbox from '@tmp-styled-system/flexbox'
import grid from '@tmp-styled-system/grid'
import border from '@tmp-styled-system/border'
import background from '@tmp-styled-system/background'
import position from '@tmp-styled-system/position'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from '@tmp-styled-system/core'

export { margin, padding, space } from '@tmp-styled-system/space'
export { color } from '@tmp-styled-system/color'
export { layout } from '@tmp-styled-system/layout'
export { typography } from '@tmp-styled-system/typography'
export { flexbox } from '@tmp-styled-system/flexbox'
export { border } from '@tmp-styled-system/border'
export { background } from '@tmp-styled-system/background'
export { position } from '@tmp-styled-system/position'
export { grid } from '@tmp-styled-system/grid'
export { shadow } from '@tmp-styled-system/shadow'
export {
  default as boxShadow,
  default as textShadow,
} from '@tmp-styled-system/shadow'

export {
  variant,
  buttonStyle,
  textStyle,
  colorStyle,
} from '@tmp-styled-system/variant'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const { zIndex, top, right, bottom, left } = position

export { default as borders } from '@tmp-styled-system/border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
}

// v4 style API shim
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}
