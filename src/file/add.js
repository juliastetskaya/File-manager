import { writeFile } from 'fs/promises';

import { getAbsolutePath } from "../utils/index.js";


export const add = async (pathToFile) => {
    try {
        await writeFile(getAbsolutePath(pathToFile), '', { flag: 'wx' });
        console.log('File was successfully created!');
    } catch (error) {
        if (error.code === 'EEXIST') throw new Error('Operation failed: such file already exists!')
        throw error;
    }
};
