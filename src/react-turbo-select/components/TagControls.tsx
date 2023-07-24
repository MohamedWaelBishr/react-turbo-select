// TagControls.tsx
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { CLASS_NAMES } from "../utils/classNames";

interface TagControlsProps {
  selectedOptions: any;
  tagStyle: React.CSSProperties | undefined;
  onOptionChange: any;
  isMenuOpen: boolean;
  width: any;
  mode?: "light" | "dark";
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
      className={CLASS_NAMES.MULTIPLE_MENU}
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
            backgroundColor: mode === "dark" ? "#333" : "#fff",
            color: mode === "dark" ? "#fff" : "#333",
            ...tagStyle,
          }}
          key={index}
          className={CLASS_NAMES.TAG}
        >
          {option.label}
          <FontAwesomeIcon
            className={CLASS_NAMES.REMOVE_TAG_ICON}
            icon={faXmark}
            onClick={() => {
              onOptionChange(option);
            }}
          />
        </div>
      ))}
    </div>
  );
};
