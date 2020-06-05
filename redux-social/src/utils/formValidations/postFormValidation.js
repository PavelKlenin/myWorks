export const maxValue = (max) => (value) => {
  return (value.length <= max) ? false : true;
  // return (value.lenght <= max) ? undefined : `Must be ${max} characters or less`;
};

export const disableSendBtn = (value) => {
  return (value) ? false : true;
};
