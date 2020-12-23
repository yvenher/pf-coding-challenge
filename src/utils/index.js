
export function fetchText(fileName) {
  const fileUrl = `https://frontend-coding-challenge.s3.amazonaws.com/${fileName}.txt`;
  const headers = new Headers({'Content-Type': 'text/plain'});
  return fetch(fileUrl, { headers }).then((response) => response.text()).catch(() => '');
}

export function getMostCommonWords(text = '', wordsAmount = 5) {
  const wordsAmountMap = text.split(/\W/)
    .filter((word) => word.length > 2)
    .map((word) => word.toLowerCase())
    .reduce((map, word) => {
      if (!map[word]) map[word] = 0;
      map[word]++;
      return map;
    }, {});
  
  const mostCommonWords = Object.entries(wordsAmountMap)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => ({ value: entry[0], amount: entry[1] }))
    .slice(0, wordsAmount);

  return mostCommonWords;
}

export function capitalize(s) {
  return `${s[0].toUpperCase()}${s.slice(1)}`; 
}