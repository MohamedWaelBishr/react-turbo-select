import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CLASS_NAMES } from "../utils/classNames";

type removeIconProps = {
  setInputValue: any;
  setSelectedOptions: any;
  inputRef: any;
};
export const RemoveIcon = ({
  setInputValue,
  setSelectedOptions,
  inputRef,
}: removeIconProps) => {
  return (
    <FontAwesomeIcon
      className={CLASS_NAMES.REMOVE_ICON}
      icon={faXmark}
      onClick={() => {
        setInputValue("");
        setSelectedOptions([]);
        // @ts-ignore
        inputRef?.current?.focus();
      }}
    />
  );
};
