import * as fs from 'fs'
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const way = path.join(__dirname, 'files');


const read = async () => {
    fs.access(path.join(way, 'fileToRead.txt'), (err) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            fs.readFile(path.join(way, 'fileToRead.txt'), 'utf-8', (err, data) => {
                if (!err) {
                    console.log(data);
                }
            })
        }
    })
};

 read();
