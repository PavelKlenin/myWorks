export const postValidate = {
  disableSendBtn: (max) =>(value) => {
    return (value && value.length <= max) ? false : true;
  },
  maxValue: (max) => (value) => {
    return (value.length <= max) ? false : true;
  },
}