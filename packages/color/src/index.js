import { system } from '@styled-system/core'

// move to @styled-system/color package
const config = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
}
config.bg = config.backgroundColor

export const color = system(config)
export default color
