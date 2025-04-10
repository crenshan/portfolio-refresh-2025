export const getFileExtension = filename => {
  if (typeof filename !== 'string') {
    return ''; // Handle cases where the input is not a string
  }
  const parts = filename.split('.');
  if (parts.length <= 1) {
    return ''; // Handle cases with no extension
  }
  return parts.pop();
};
