// DropdownMenu.tsx
import React from 'react'

import { Option, OptionGroup } from '../types/types'
import { getOptionClass } from '../utils/getOptionClass'
import { OptionGroupLabelStyle, OptionGroupLabelStyleDark, menuStyle } from '../utils/styles'

interface DropdownMenuProps {
  menuRef: React.RefObject<any>
  isMultiple: boolean
  isLoading: boolean
  options?: Option[]
  optionStyles: React.CSSProperties
  handleOptionChange: (option: Option | null) => void
  handleScroll: (e: any) => void
  isMenuOpen: boolean
  noOptionsMessage?: any
  loadingMessage?: any
  defaultMenuIsScrollable: boolean
  menuHeight: number
  gapBetweenControls: number
  menuStyles: React.CSSProperties
  width: any
  selectedOptions: any
  inputValue: any
  mode?: 'light' | 'dark'
  optionsGroups?: OptionGroup[] | undefined
  isGroups: boolean
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  menuRef,
  isMultiple,
  isLoading,
  options,
  optionStyles,
  handleOptionChange,
  handleScroll,
  isMenuOpen,
  noOptionsMessage,
  loadingMessage,
  defaultMenuIsScrollable,
  menuHeight,
  gapBetweenControls,
  menuStyles,
  width,
  selectedOptions,
  inputValue,
  mode,
  optionsGroups,
  isGroups,
}) => {
  return (
    <div
      ref={menuRef}
      {...menuStyle}
      id="react-turbo-select__menu"
      onScroll={handleScroll}
      style={
        isMenuOpen
          ? {
              width: width + 12,
              overflow: defaultMenuIsScrollable ? 'scroll' : 'hidden',
              height: menuHeight,
              marginTop: gapBetweenControls || 'unset',
              backgroundColor: mode === 'dark' ? '#333' : '#fff',
              color: mode === 'dark' ? '#fff' : '#333',
              ...menuStyles,
            }
          : {
              width: width + 10,
              height: menuHeight,
              marginTop: gapBetweenControls || 'unset',
              backgroundColor: mode === 'dark' ? '#333' : '#fff',
              color: mode === 'dark' ? '#fff' : '#333',
              ...menuStyles,
            }
      }
    >
      {isLoading && <h1>{loadingMessage}</h1>}
      {!isLoading && options?.length === 0 && <h1>{noOptionsMessage}</h1>}
      {!isLoading &&
        !isGroups &&
        options?.map((option, index) => (
          <div
            key={index}
            {...getOptionClass(option, selectedOptions, inputValue, isMultiple, mode)}
            style={{
              ...optionStyles,
            }}
            onClick={() => handleOptionChange(option)}
          >
            {option.label}
          </div>
        ))}

      {!isLoading &&
        isGroups &&
        optionsGroups?.map((optionGroup: OptionGroup, indexGroup) => {
          return (
            <div key={indexGroup}>
              {mode === 'light' ? (
                <div {...OptionGroupLabelStyle}>{optionGroup.groupName}</div>
              ) : (
                <div {...OptionGroupLabelStyleDark}>{optionGroup.groupName}</div>
              )}
              {optionGroup?.groupValues?.map((option: Option, indexOption) => {
                return (
                  <div
                    key={indexGroup + '|' + indexOption}
                    {...getOptionClass(option, selectedOptions, inputValue, isMultiple, mode)}
                    style={{
                      ...optionStyles,
                    }}
                    onClick={() => handleOptionChange(option)}
                  >
                    {option.label}
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}
