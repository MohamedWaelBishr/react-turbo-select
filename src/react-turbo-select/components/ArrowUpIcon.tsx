import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CLASS_NAMES } from "../utils/classNames";

type ArrowUpIconProps = {
  iconFlicker: any;
  handleMenuOpen: any;
};
export const ArrowUpIcon = ({
  iconFlicker,
  handleMenuOpen,
}: ArrowUpIconProps) => {
  return (
    <FontAwesomeIcon
      fade={iconFlicker}
      className={CLASS_NAMES.DROP_DOWN_ICON}
      icon={faChevronUp}
      onClick={() => handleMenuOpen()}
    />
  );
};
