import { Option } from '../types/types'
import { optionStyle, selectedOptionStyle, selectedOptionDarkStyle } from './styles'

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
      return mode == 'dark' ? selectedOptionDarkStyle : selectedOptionStyle
    } else {
      return optionStyle
    }
  } else {
    if (inputValue === option.label) {
      return mode == 'dark' ? selectedOptionDarkStyle : selectedOptionStyle
    } else {
      return optionStyle
    }
  }
}
