export const handleKeyDown = (
  event: KeyboardEvent,
  escapeCloseMenu: any,
  setInputValue: any,
  setSelectedOptions: any,
  setLocalOptions: any,
  options: any,
  handleMenuClose: any,
  isMenuOpen: any
) => {
  if (event.key === "Escape" && escapeCloseMenu && isMenuOpen) {
    setInputValue("");
    setSelectedOptions([]);
    setLocalOptions(options);
    handleMenuClose();
  }
};
