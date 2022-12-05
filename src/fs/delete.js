import * as fs from 'fs'
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const way = path.join(__dirname, 'files');

const remove = async () => {
    fs.access(path.join(way, 'fileToRemove.txt'), (err) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            fs.unlink(path.join(way, 'fileToRemove.txt'), () => {})
        }
    })
};

remove();
