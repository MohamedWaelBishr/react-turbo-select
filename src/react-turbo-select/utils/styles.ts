import React from 'react'
import { css } from 'glamor'

const fontFace = `@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-1UA.ttf) format('truetype');
}`

// Insert font face globally
css.insert(fontFace)

const controlsContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  width: '327px',
  height: '38px',
  fontFamily: "'Rubik', sans-serif",
  border: '1px solid #ced4da',
  boxSizing: 'border-box',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '#b0b0b0',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
  },
})

const dropDownIconStyle = css({
  paddingLeft: '5px',
  paddingRight: '8px',
  display: 'flex',
  width: '20px',
  height: '20px',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.5',
  color: '#c4c4c4',
  background: 'transparent',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontFamily: "'Rubik', sans-serif",

  '&:hover': {
    color: '#555',
  },
})

const removeIconStyle = css({
  paddingLeft: '8px',
  paddingRight: '8px',
  display: 'flex',
  width: '12px',
  height: '18px',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.5',
  color: '#b99090',
  background: '#ffffff',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  fontFamily: "'Rubik', sans-serif",

  '&:hover': {
    color: '#ff6767',
  },
})

const inputStyle = css({
  display: 'flex',
  width: '300px',
  height: '38px',
  padding: '0.375rem 1rem',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.5',
  color: '#212529',
  background: '#ffffff',
  border: '0',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontFamily: "'Rubik', sans-serif",
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
  },
})

const menuStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  height: '250px',
  overflowY: 'scroll',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.5',
  color: '#212529',
  background: '#ffffff',
  border: '1px solid #ced4da',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontFamily: "'Rubik', sans-serif",
  borderRadius: '0 0 5px 5px',

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#cecece',
    borderRadius: '10px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '#050505',
    borderRadius: '20px',
  },

  '&:hover': {
    borderColor: '#b0b0b0',
  },
})

const multipleMenuStyle = css({
  backgroundColor: 'transparent',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '3px',
})

const tagsStyle = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '2px',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ced4da',
  color: '#333',
  padding: '5px 5px',
  paddingRight: '0',
  marginTop: '10px',
  borderRadius: '5px',
  width: 'fit-content',
  fontFamily: "'Rubik', sans-serif",
  fontSize: '16px',
  fontWeight: '100',
  '&:hover': {
    borderColor: '#b0b0b0',
    backgroundColor: '#f5f5f5',
  },
})

const removeTagIconStyle = css({
  paddingLeft: '8px',
  paddingRight: '8px',
  display: 'flex',
  width: '15px',
  height: '15px',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.5',
  color: '#ff8484',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  fontFamily: "'Rubik', sans-serif",

  '&:hover': {
    color: '#ff3333',
  },
})

const optionStyle = css({
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.2',
  fontFamily: "'Rubik', sans-serif",

  '&:hover': {
    backgroundColor: '#f5f5f5',
    color: '#000',
  },
})

const selectedOptionStyle = css({
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.2',
  background: 'rgb(226, 226, 229)',
  fontFamily: "'Rubik', sans-serif",

  '&:hover': {
    backgroundColor: 'rgb(216, 216, 219)',
  },
})

const selectedOptionDarkStyle = css({
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: '100',
  lineHeight: '1.2',
  background: '#1a1a1a',
  fontFamily: "'Rubik', sans-serif",

  '&:hover': {
    backgroundColor: '#303030',
    color: '#ffffff',
  },
})

const OptionGroupLabelStyle = css({
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: '800',
  lineHeight: '1',
  fontFamily: "'Rubik', sans-serif",
  color: '#ffffff',
  border: '1px solid #696969',
  textTransform: 'uppercase',
  backgroundColor: '#6d6d6d',
  textAlign: 'center',
})

const OptionGroupLabelStyleDark = css({
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: '800',
  lineHeight: '1',
  fontFamily: "'Rubik', sans-serif",
  color: '#000000',
  border: '1px solid #696969',
  textTransform: 'uppercase',
  backgroundColor: '#ddd',
  textAlign: 'center',
})

export {
  controlsContainerStyle,
  dropDownIconStyle,
  removeIconStyle,
  inputStyle,
  menuStyle,
  multipleMenuStyle,
  tagsStyle,
  removeTagIconStyle,
  optionStyle,
  selectedOptionStyle,
  selectedOptionDarkStyle,
  OptionGroupLabelStyle,
  OptionGroupLabelStyleDark,
}
