const fs = require('fs').promises;
async function spyEncrypt(path) {
  const content = await fs.readFile(path, { encoding: 'utf-8' });
  const lines = content.split('\n').filter((line) => line !== '');
  const invalidPass = [];
  lines.forEach((item) => {
    const [policy, pass] = item.split(':').map((i) => i.trim());
    const [range, char] = policy.split(' ');
    const [min, max] = range.split('-').map((i) => parseInt(i));

    const n = pass?.split('')?.reduce((acc, current) => {
      if (current === char) return acc + 1;
      return acc;
    }, 0);
    const isValid = min <= n && max >= n;
    if (!isValid) {
      invalidPass.push(pass);
    }
  });
  return invalidPass[12];
}
