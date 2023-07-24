import { LegacyRef } from 'react'

export interface Option {
  label: string
  value: string
}

export interface OptionGroup {
  groupName: string
  groupValues: Option[]
}

export interface TurboSelectProps {
  isSearchable?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isMultiple?: boolean
  showTagsControls?: boolean
  isDisabled?: boolean
  closeOnSelect?: boolean
  menuOpen?: boolean
  noOptionsMessage?: string | null
  loadingMessage?: string | null
  autoFocus?: boolean
  onMenuOpen?: () => void
  onMenuClose?: () => void
  onReachMaxScroll?: () => void
  openMenuOnClick?: boolean
  escapeCloseMenu?: boolean
  isRtl?: boolean
  dropDownIcon?: React.ReactNode
  defaultMenuIsScrollable?: boolean
  options?: Option[]
  getContainerRef?: (ref: LegacyRef<any>) => void
  getInputRef?: (ref: LegacyRef<any>) => void
  getMenuRef?: (ref: LegacyRef<any>) => void
  containerStyles?: React.CSSProperties
  inputStyles?: React.CSSProperties
  menuStyles?: React.CSSProperties
  optionStyles?: React.CSSProperties
  defaultValue?: Option | null
  onChange?: (selectedOption: Option | null) => void
  placeholder?: string
  width?: number
  height?: number
  menuHeight?: number
  iconFlicker?: boolean
  borderRadius?: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  gapBetweenControls?: number
  tagStyle?: React.CSSProperties
  mode?: 'light' | 'dark'
  optionsGroups?: OptionGroup[]
}

declare const TurboSelect: React.FC<TurboSelectProps>
export default TurboSelect
