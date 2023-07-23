// DropdownMenu.tsx
import React from "react";
import { Option } from "../utils/types";
import { CLASS_NAMES } from "../utils/classNames";
import { getOptionClass } from "../utils/getOptionClass";

interface DropdownMenuProps {
  menuRef: React.RefObject<any>;
  isMultiple: boolean;
  isLoading: boolean;
  options: Option[];
  optionStyles: React.CSSProperties;
  handleOptionChange: (option: Option | null) => void;
  handleScroll: (e: any) => void;
  isMenuOpen: boolean;
  noOptionsMessage?: any;
  loadingMessage?: any;
  defaultMenuIsScrollable: boolean;
  menuHeight: number;
  gapBetweenControls: number;
  menuStyles: React.CSSProperties;
  width: any;
  selectedOptions: any;
  inputValue: any;
  mode?: "light" | "dark";
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
}) => {
  return (
    <div
      ref={menuRef}
      className={CLASS_NAMES.MENU}
      onScroll={handleScroll}
      style={
        isMenuOpen
          ? {
              width: width + 12,
              overflow: defaultMenuIsScrollable ? "scroll" : "hidden",
              height: menuHeight,
              marginTop: gapBetweenControls || "unset",
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              color: mode === "dark" ? "#fff" : "#333",
              ...menuStyles,
            }
          : {
              width: width + 10,
              height: menuHeight,
              marginTop: gapBetweenControls || "unset",
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              color: mode === "dark" ? "#fff" : "#333",
              ...menuStyles,
            }
      }
    >
      {isLoading && <h1>{loadingMessage}</h1>}
      {!isLoading && options.length === 0 && <h1>{noOptionsMessage}</h1>}
      {!isLoading &&
        options.map((option, index) => (
          <div
            key={index}
            className={getOptionClass(
              option,
              selectedOptions,
              inputValue,
              isMultiple,
              mode
            )}
            style={{
              ...optionStyles,
            }}
            onClick={() => handleOptionChange(option)}
          >
            {option.label}
          </div>
        ))}
    </div>
  );
};
