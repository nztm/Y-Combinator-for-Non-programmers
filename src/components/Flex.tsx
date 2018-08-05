import { Flex as RebassFlex } from 'rebass/emotion'
import sys from 'system-components/emotion'

const Flex = sys(
  {
    is: RebassFlex
  },
  'position',
  'minWidth',
  'borders',
  'borderColor',
  'borderRadius',
  'fontWeight',
  'height',
  'lineHeight'
)

export default Flex
