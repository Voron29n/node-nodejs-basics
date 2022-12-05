import {createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToWrite = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(fileToWrite, 'utf-8');
    process.stdin.pipe(writeStream);
    console.log('Write anything:')
};

await write();
