const cadena =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
const message_02 =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
function miniCompiler(input) {
  const res = [];
  const operations = {
    '#': (num) => (num = num + 1),
    '@': (num) => (num = num - 1),
    '*': (num) => (num = num * num),
    '&': (num) => {
      res.push(num);
      return num;
    },
  };
  const inputArray = input.split('');
  let total = 0;
  inputArray.forEach((element) => {
    const operationFN = operations[element];
    total = operationFN(total);
  });
  return res.join('');
}
const result = miniCompiler(message_02);
console.log(result);
