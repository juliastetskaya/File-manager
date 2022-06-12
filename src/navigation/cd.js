import { isAbsolute, join } from 'path';
import { cwd, chdir } from 'process';

export const cd = (pathDir) => {
    try {
        if (isAbsolute(pathDir)) {
            chdir(pathDir);
        } else {
            chdir(join(cwd(), pathDir));
        }
    } catch {
        throw new Error('FS operation failed!');
    }
};
