import { homedir } from 'os';
import { createInterface } from 'readline';
import { stdout, stdin, cwd, chdir } from 'process';

import { operations } from './operations.js';

chdir(homedir());

const [args] = process.argv.slice(2);
const [_, userName] = args.split('=');

const rl = createInterface({
  input: stdin,
  output: stdout,
});

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${cwd()}`);

rl.on('line', async (input) => {
    if (input.trim() === '.exit') {
        rl.close();
        return;
    }

    const operation = operations[input];
    await operation();
    console.log(`You are currently in ${cwd()}`);
});

rl.on('close', () => console.log(`Thank you for using File Manager, ${userName}!`));
