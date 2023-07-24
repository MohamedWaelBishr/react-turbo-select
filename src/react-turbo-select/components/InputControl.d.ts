import React from "react";
import { Option } from "../utils/types";
interface InputFieldProps {
    inputRef: React.RefObject<any>;
    inputStyles?: React.CSSProperties;
    width: number;
    height: number;
    borderRadius: "none" | "tiny" | "small" | "medium" | "large" | "huge";
    inputValue: string;
    isSearchable: boolean;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setDefaultPlaceHolder: (placeholder: string) => void;
    placeholder?: string;
    defaultPlaceholder: string;
    autoFocus: boolean;
    isDisabled: boolean;
    isMultiple: boolean;
    selectedOptions: Option[];
    mode?: "light" | "dark";
}
export declare const InputControl: React.FC<InputFieldProps>;
export {};
