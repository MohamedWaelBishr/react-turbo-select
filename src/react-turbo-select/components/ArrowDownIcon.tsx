import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { dropDownIconStyle } from '../utils/styles'

type ArrowDownIconProps = {
  iconFlicker: any
  handleMenuOpen: any
}
export const ArrowDownIcon = ({ iconFlicker, handleMenuOpen }: ArrowDownIconProps) => {
  return (
    <FontAwesomeIcon
      fade={iconFlicker}
      {...dropDownIconStyle}
      icon={faChevronDown}
      onClick={() => handleMenuOpen()}
    />
  )
}
