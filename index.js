const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(line => {
    let newLine = '';
    newLine += line[0].toUpperCase();

    for (let i = 1; i < line.length; i++){
      if (line[i-1] === ' '){
        newLine += line[i].toUpperCase();
      }
      else{
        newLine += line[i];
      }
    }
    return newLine;
  })
}
