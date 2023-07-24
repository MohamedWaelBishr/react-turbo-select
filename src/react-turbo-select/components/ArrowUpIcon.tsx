import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { dropDownIconStyle } from '../utils/styles'

type ArrowUpIconProps = {
  iconFlicker: any
  handleMenuOpen: any
}
export const ArrowUpIcon = ({ iconFlicker, handleMenuOpen }: ArrowUpIconProps) => {
  return (
    <FontAwesomeIcon
      {...dropDownIconStyle}
      fade={iconFlicker}
      icon={faChevronUp}
      onClick={() => handleMenuOpen()}
    />
  )
}
