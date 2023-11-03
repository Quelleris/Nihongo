export const getRandomKanji = (data: string[]) => {
  return data[Math.floor(Math.random() * data.length)];
};
