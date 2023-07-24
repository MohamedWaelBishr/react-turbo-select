// TagControls.tsx
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { multipleMenuStyle, removeTagIconStyle, tagsStyle } from '../utils/styles'

interface TagControlsProps {
  selectedOptions: any
  tagStyle: React.CSSProperties | undefined
  onOptionChange: any
  isMenuOpen: boolean
  width: any
  mode?: 'light' | 'dark'
}

export const TagControls: React.FC<TagControlsProps> = ({
  selectedOptions,
  tagStyle,
  onOptionChange,
  isMenuOpen,
  width,
  mode,
}) => {
  return (
    <div
      {...multipleMenuStyle}
      style={
        isMenuOpen
          ? {
              width: width,
            }
          : {
              width: width,
            }
      }
    >
      {selectedOptions.map((option: any, index: any) => (
        <div
          style={{
            backgroundColor: mode === 'dark' ? '#333' : '#fff',
            color: mode === 'dark' ? '#fff' : '#333',
            ...tagStyle,
          }}
          key={index}
          {...tagsStyle}
        >
          {option.label}
          <FontAwesomeIcon
            {...removeTagIconStyle}
            icon={faXmark}
            onClick={() => {
              onOptionChange(option)
            }}
          />
        </div>
      ))}
    </div>
  )
}
