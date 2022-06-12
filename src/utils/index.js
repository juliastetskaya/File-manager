import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getPathFromUrl = (url) => {
    const __filename = fileURLToPath(url);
    const __dirname = dirname(__filename);

    return { __filename, __dirname };
};
