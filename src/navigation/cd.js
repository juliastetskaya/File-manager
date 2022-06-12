import { chdir } from 'process';

export const cd = (pathDir) => {
    try {
        chdir(getAbsolutePath(pathDir));
    } catch {
        throw new Error('FS operation failed!');
    }
};
