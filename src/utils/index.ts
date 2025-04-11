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

export const shuffleArray = (array: unknown[]) => {
  const newArray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
};
