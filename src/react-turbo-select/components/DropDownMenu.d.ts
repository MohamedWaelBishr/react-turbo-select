import React from "react";
import { Option } from "../utils/types";
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
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export {};
