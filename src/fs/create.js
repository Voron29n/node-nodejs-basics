import {writeFile} from 'fs/promises'
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const fileInnerText = 'I am fresh and young';
    const errorMassage = 'FS operation failed';
    const freshPath = join(__dirname, 'files', 'fresh.txt');

    try {
        await writeFile(freshPath, fileInnerText, {flag: 'wx'})
    } catch (e) {
        console.log(errorMassage)
    }
};
create();
