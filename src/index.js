import { createInterface } from 'readline';

const [args] = process.argv.slice(2);
const [_, userName] = args.split('=');

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${process.cwd()}`);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    if (input === '.exit') {
        rl.close();
        return;
    }
    console.log(`You are currently in ${process.cwd()}`);
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
});
