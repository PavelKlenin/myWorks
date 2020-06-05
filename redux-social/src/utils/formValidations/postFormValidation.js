export const maxValue = (max) => (value) => {
  return (value.lenght <= max) ? false : `Must be ${max} characters or less`;
};

export const disableSendBtn = (value) => {
  return value ? false : true;
};
