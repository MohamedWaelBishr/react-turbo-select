import React from "react";
interface TagControlsProps {
    selectedOptions: any;
    tagStyle: React.CSSProperties | undefined;
    onOptionChange: any;
    isMenuOpen: boolean;
    width: any;
    mode?: "light" | "dark";
}
export declare const TagControls: React.FC<TagControlsProps>;
export {};
