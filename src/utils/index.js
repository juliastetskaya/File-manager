import { cwd  } from 'process';
import { fileURLToPath } from 'url';
import { dirname, isAbsolute, join } from 'path';

export const getPathFromUrl = (url) => {
    const __filename = fileURLToPath(url);
    const __dirname = dirname(__filename);

    return { __filename, __dirname };
};

export const getAbsolutePath = (pathToDir) =>
    isAbsolute(pathToDir) ? pathToDir : join(cwd(), pathToDir);
