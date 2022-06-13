import { readFile } from 'fs/promises';
import { getAbsolutePath } from '../utils/index.js';

export const cat = async (pathToFile) => {
    try {
        const content = await readFile(getAbsolutePath(pathToFile), { encoding: 'utf-8' });
        console.log(content);
    } catch (error) {
        if (error.code === 'ENOENT') throw new Error('Operation failed: no file to read!');
        if (error.code === 'EISDIR') throw new Error('Operation failed: unable to read directory!');
        throw error;
    }
};
