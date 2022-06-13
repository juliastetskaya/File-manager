import { join, dirname } from 'path';
import { rename } from 'fs/promises';
import { getAbsolutePath, isExists } from '../utils/index.js';

export const rn = async (pathToFile, newFileName) => {
    const absolutePathToFile = getAbsolutePath(pathToFile);
    const newFilePath = join(dirname(absolutePathToFile), newFileName);

    if (await isExists(newFilePath)) throw new Error(`Operation failed: file ${newFileName} already exists!`);

    try {
        await rename(absolutePathToFile, newFilePath);
        console.log('File was successfully renamed!');
    } catch (error) {
        if (error.code === 'ENOENT') throw new Error('Operation failed: no file to rename!');
        throw error;
    }
};
