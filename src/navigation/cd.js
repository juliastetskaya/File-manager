import { chdir } from 'process';

import { getAbsolutePath } from '../utils/index.js';

export const cd = (pathToDir) => {
    try {
        chdir(getAbsolutePath(pathToDir));
    } catch (error) {
        if (error.code === 'ENOENT') throw new Error('Operation failed: no such directory!');
        throw error;
    }
};
