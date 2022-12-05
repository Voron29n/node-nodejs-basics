import {mkdir, readdir, copyFile} from 'fs/promises'
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const errorMassage = 'FS operation failed';
    const source = join(__dirname, 'files');
    const destination = join(__dirname, 'files-copy');

    try {
        await mkdir(destination);
        const files = await readdir(source);
        await Promise.all(files.map((i) => copyFile(`${source}/${i}`, `${destination}/${i}`)));
    } catch (e) {
        throw new Error(errorMassage);
    }
};


copy();
