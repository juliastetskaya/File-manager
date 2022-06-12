import path from 'path';
import { cwd, chdir } from 'process';

export const up = () => {
    chdir(path.join(cwd(), '..'));
};
