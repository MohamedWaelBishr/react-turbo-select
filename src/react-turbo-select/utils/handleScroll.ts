export const handleScroll = (e: any, onReachMaxScroll: any) => {
  const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
  const isAtEnd = scrollTop + clientHeight === scrollHeight;
  if (isAtEnd) {
    onMenuScrollReachEnd(onReachMaxScroll);
  }
};

const onMenuScrollReachEnd = (onReachMaxScroll: any) => {
  if (onReachMaxScroll) {
    onReachMaxScroll();
  }
};
