// InputField.tsx
import React from 'react'

import { Option } from '../types/types'
import { getBorderRadius } from '../utils/getBorderRadius'
import { inputStyle } from '../utils/styles'

interface InputFieldProps {
  inputRef: React.RefObject<any>
  inputStyles?: React.CSSProperties
  width: number
  height: number
  borderRadius: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  inputValue: string
  isSearchable: boolean
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  setDefaultPlaceHolder: (placeholder: string) => void
  placeholder?: string
  defaultPlaceholder: string
  autoFocus: boolean
  isDisabled: boolean
  isMultiple: boolean
  selectedOptions: Option[]
  mode?: 'light' | 'dark'
}

export const InputControl: React.FC<InputFieldProps> = ({
  inputRef,
  inputStyles,
  width,
  height,
  borderRadius,
  inputValue,
  isSearchable,
  handleInputChange,
  setDefaultPlaceHolder,
  placeholder,
  defaultPlaceholder,
  autoFocus,
  isDisabled,
  isMultiple,
  selectedOptions,
  mode,
}) => {
  return (
    <input
      {...inputStyle}
      ref={inputRef}
      style={{
        backgroundColor: mode === 'dark' ? '#333' : '#fff',
        color: mode === 'dark' ? '#fff' : '#333',
        width: width + 10,
        height: height,
        borderRadius: getBorderRadius(borderRadius),
        ...inputStyles,
      }}
      value={inputValue}
      readOnly={!isSearchable}
      onChange={handleInputChange}
      onFocus={() => setDefaultPlaceHolder('')}
      onBlur={() => setDefaultPlaceHolder(placeholder || 'Select an option')}
      placeholder={defaultPlaceholder}
      autoFocus={autoFocus}
      disabled={isDisabled}
      title={isMultiple ? selectedOptions.map((option) => option.label).join(', ') : inputValue}
    />
  )
}
