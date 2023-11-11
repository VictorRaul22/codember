const message = 'hello word word';
function challenge(message) {
  const words = message.split(' ');
  const uniqueWords = new Set(words);
  // console.log(uniqueWords);
  const res = [];
  uniqueWords.forEach((word) => {
    const count = words.reduce((acc, current) => {
      if (current.toLowerCase() == word.toLowerCase()) return (acc += 1);
      return acc;
    }, 0);
    res.push(word + count);
  });
  return res.join('');
}
const res = challenge(message);
console.log(res); // hello1word2
