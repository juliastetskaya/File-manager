import { chdir } from 'process';

import { getAbsolutePath } from '../utils/index.js';

export const cd = (pathToDir) => {
    try {
        chdir(getAbsolutePath(pathToDir));
    } catch {
        throw new Error('FS operation failed!');
    }
};
