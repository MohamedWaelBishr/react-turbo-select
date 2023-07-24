import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CLASS_NAMES } from "../utils/classNames";

type ArrowDownIconProps = {
  iconFlicker: any;
  handleMenuOpen: any;
};
export const ArrowDownIcon = ({
  iconFlicker,
  handleMenuOpen,
}: ArrowDownIconProps) => {
  return (
    <FontAwesomeIcon
      fade={iconFlicker}
      className={CLASS_NAMES.DROP_DOWN_ICON}
      icon={faChevronDown}
      onClick={() => handleMenuOpen()}
    />
  );
};
