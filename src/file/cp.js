import { cp as copy } from 'fs/promises';

import { getAbsolutePath, isExists } from "../utils/index.js";

export const cp = async (oldPath, newPath) => {
    const absoluteOldPath = getAbsolutePath(oldPath);
    const absoluteNewPath = getAbsolutePath(newPath);

    const isOldPathExists = await isExists(absoluteOldPath);

    if (!isOldPathExists) throw new Error('Operation failed: no file or folder to copy!');

    const isNewPathExists = await isExists(absoluteNewPath);

    if (isNewPathExists) throw new Error(`Operation failed: ${newPath} already exists!`);

    try {
        await copy(absoluteOldPath, absoluteNewPath, { recursive: true, force: false, errorOnExist: true });
        console.log('Directory was successfully copied!')
    } catch (error) {
        throw error;
    }
};
