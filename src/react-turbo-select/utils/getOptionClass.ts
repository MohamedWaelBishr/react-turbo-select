import { Option } from '../types/types'
import { CLASS_NAMES } from './classNames'

export const getOptionClass = (
  option: Option,
  selectedOptions: any,
  inputValue: any,
  isMultiple: any,
  mode: any,
) => {
  if (isMultiple) {
    let selectedOptionsIds = selectedOptions.map((option: any) => option.value)
    if (selectedOptionsIds.includes(option.value)) {
      return mode == 'dark' ? CLASS_NAMES.OPTION_SELECTED_DARK : CLASS_NAMES.OPTION_SELECTED
    } else {
      return CLASS_NAMES.OPTION
    }
  } else {
    if (inputValue === option.label) {
      return mode == 'dark' ? CLASS_NAMES.OPTION_SELECTED_DARK : CLASS_NAMES.OPTION_SELECTED
    } else {
      return CLASS_NAMES.OPTION
    }
  }
}
