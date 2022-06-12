import { readdir } from 'fs/promises'; 
import { cwd } from 'process';

export const ls = async () => {
    try {
        const files = await readdir(cwd(), { withFileTypes: true });
        if (files.length) {
            console.log(files.map(({ name }) => name));
        } else {
            console.log('Directory is empty');
        }
    } catch (error) {
        console.error(error);
    }
};