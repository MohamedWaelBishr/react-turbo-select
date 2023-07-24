import React, { LegacyRef, useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DropdownMenu,
  InputControl,
  RemoveIcon,
  TagControls,
} from "./components";
import "./styles.css";
import { CLASS_NAMES } from "./utils/classNames";
import { getBorderRadius } from "./utils/getBorderRadius";
import { handleKeyDown } from "./utils/handleKeyDown";
import { handleScroll } from "./utils/handleScroll";
import { Option, TurboSelectProps } from "./utils/types";

import "./styles.css";

const TurboSelect: React.FC<TurboSelectProps> = ({
  isSearchable = true,
  isLoading = false,
  isClearable = true,
  isMultiple = false,
  showTagsControls = true,
  isDisabled = false,
  closeOnSelect = true,
  menuOpen = false,
  noOptionsMessage,
  loadingMessage,
  autoFocus = false,
  onMenuOpen,
  onMenuClose,
  onReachMaxScroll,
  openMenuOnClick = true,
  escapeCloseMenu = true,
  isRtl = false,
  dropDownIcon,
  defaultMenuIsScrollable = true,
  options,
  getContainerRef,
  getInputRef,
  getMenuRef,
  containerStyles = {},
  inputStyles,
  menuStyles = {},
  optionStyles = {},
  defaultValue = null,
  onChange,
  placeholder,
  width = 300,
  height = 40,
  menuHeight = 250,
  iconFlicker = false,
  borderRadius = "tiny",
  gapBetweenControls = 10,
  tagStyle,
  mode = "light",
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    defaultValue ? [defaultValue] : []
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [localOptions, setLocalOptions] = useState<Option[]>(options);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(menuOpen);
  const [defaultPlaceholder, setDefaultPlaceHolder] = useState<string>(
    placeholder ?? "Select an option"
  );
  const containerRef: LegacyRef<any> = useRef<any>(null);
  const inputRef: LegacyRef<any> = useRef<any>(null);
  const menuRef: LegacyRef<any> = useRef<any>(null);

  useEffect(() => {
    // Check the width prop when the component mounts
    if (width && width < 300) {
      throw new Error(
        'Invalid prop "width" supplied to TurboSelect. Minimum width should be 300.'
      );
    }
  }, [width]);

  const handleMenuOpen = () => {
    setMenuOpen(true);
    inputRef?.current?.focus();
    if (onMenuOpen) {
      onMenuOpen();
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    if (onMenuClose) {
      onMenuClose();
    }
  };

  useEffect(() => {
    if (getMenuRef) {
      getMenuRef(menuRef);
    }
    if (getContainerRef) {
      getContainerRef(containerRef);
    }
    if (getInputRef) {
      getInputRef(inputRef);
    }
  }, [containerRef.current, inputRef.current, menuRef.current]);

  const handleOptionChange = (option: Option | null) => {
    setLocalOptions(options);
    if (option) {
      if (isMultiple) {
        let selectedOptionsIds = selectedOptions.map((selectedOption) => {
          return selectedOption.value;
        });

        const updatedOptions = selectedOptionsIds.includes(option.value)
          ? selectedOptions.filter(
              (selectedOption) => selectedOption.value !== option.value
            )
          : [...selectedOptions, option];
        setSelectedOptions(updatedOptions);
        setInputValue("");
        setDefaultPlaceHolder(
          updatedOptions.length
            ? "Multiple Values Selected ...."
            : "Select an option"
        );
      } else {
        setSelectedOptions([option]);
        setInputValue(option.label);
      }
    } else {
      setSelectedOptions([]);
      setInputValue("");
    }
    if (onChange) {
      onChange(option);
    }
    if (closeOnSelect) {
      handleMenuClose();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isSearchable) {
      setLocalOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
    setInputValue(event.target.value);
  };

  //   Handler for clicking outside the dropdown menu to close it (optional)
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      if (isMultiple) {
        setInputValue("");
        setLocalOptions(options);
      }
      handleMenuClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", (e) => {
      handleKeyDown(
        e,
        escapeCloseMenu,
        setInputValue,
        setSelectedOptions,
        setLocalOptions,
        options,
        handleMenuClose,
        isMenuOpen
      );
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        handleKeyDown(
          e,
          escapeCloseMenu,
          setInputValue,
          setSelectedOptions,
          setLocalOptions,
          options,
          handleMenuClose,
          isMenuOpen
        );
      });
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      onClick={() => (openMenuOnClick ? setMenuOpen(!isMenuOpen) : null)}
    >
      <div
        ref={containerRef}
        className={CLASS_NAMES.CONTROLS_CONTAINER}
        style={
          isMenuOpen
            ? {
                borderRadius:
                  getBorderRadius(borderRadius) +
                  "px" +
                  getBorderRadius(borderRadius) +
                  "px 0 0 ",
                width: width + 10,
                height: height,
                backgroundColor: mode === "dark" ? "#333" : "#fff",
                color: mode === "dark" ? "#fff" : "#333",
                ...containerStyles,
              }
            : {
                borderRadius: getBorderRadius(borderRadius),
                width: width + 10,
                height: height,
                backgroundColor: mode === "dark" ? "#333" : "#fff",
                color: mode === "dark" ? "#fff" : "#333",
                ...containerStyles,
              }
        }
      >
        <InputControl
          inputRef={inputRef}
          inputStyles={inputStyles}
          width={width}
          height={height}
          borderRadius={borderRadius}
          inputValue={inputValue}
          isSearchable={isSearchable}
          handleInputChange={handleInputChange}
          setDefaultPlaceHolder={setDefaultPlaceHolder}
          placeholder={placeholder}
          defaultPlaceholder={defaultPlaceholder}
          autoFocus={autoFocus}
          isDisabled={isDisabled}
          isMultiple={isMultiple}
          selectedOptions={selectedOptions}
          mode={mode}
        />

        {dropDownIcon && <>{dropDownIcon}</>}
        {isClearable && inputValue && !isMultiple && (
          <RemoveIcon
            inputRef={inputRef}
            setInputValue={setInputValue}
            setSelectedOptions={setSelectedOptions}
          />
        )}
        {!dropDownIcon && !isMenuOpen && (
          <ArrowDownIcon
            handleMenuOpen={handleMenuOpen}
            iconFlicker={iconFlicker}
          />
        )}
        {!dropDownIcon && isMenuOpen && (
          <ArrowUpIcon
            handleMenuOpen={handleMenuOpen}
            iconFlicker={iconFlicker}
          />
        )}
      </div>
      {isMultiple && showTagsControls && selectedOptions.length !== 0 && (
        <TagControls
          selectedOptions={selectedOptions}
          tagStyle={tagStyle}
          onOptionChange={handleOptionChange}
          isMenuOpen={isMenuOpen}
          width={width}
          mode={mode}
        />
      )}
      {isMenuOpen && (
        <DropdownMenu
          menuRef={menuRef}
          isMultiple={isMultiple}
          isLoading={isLoading}
          options={localOptions}
          optionStyles={optionStyles}
          handleOptionChange={handleOptionChange}
          handleScroll={(e) => handleScroll(e, onReachMaxScroll)}
          isMenuOpen={isMenuOpen}
          noOptionsMessage={noOptionsMessage}
          loadingMessage={loadingMessage}
          defaultMenuIsScrollable={defaultMenuIsScrollable}
          menuHeight={menuHeight}
          gapBetweenControls={gapBetweenControls}
          menuStyles={menuStyles}
          inputValue={inputValue}
          selectedOptions={selectedOptions}
          width={width}
          mode={mode}
        />
      )}
    </div>
  );
};

export default TurboSelect;
