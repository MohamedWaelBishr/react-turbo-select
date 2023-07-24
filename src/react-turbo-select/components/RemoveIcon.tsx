import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { removeIconStyle } from '../utils/styles'

type removeIconProps = {
  setInputValue: any
  setSelectedOptions: any
  inputRef: any
}
export const RemoveIcon = ({ setInputValue, setSelectedOptions, inputRef }: removeIconProps) => {
  return (
    <FontAwesomeIcon
      {...removeIconStyle}
      icon={faXmark}
      onClick={() => {
        setInputValue('')
        setSelectedOptions([])
        // @ts-ignore
        inputRef?.current?.focus()
      }}
    />
  )
}
