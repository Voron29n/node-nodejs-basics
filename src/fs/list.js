import * as fs from 'fs'
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const way = path.join(__dirname, 'files');

const list = async () => {
    fs.access(way, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readdir(way, (err, files) => {
                let array = [];
                files.forEach(file => array.push(file));
                console.log(array)
            })
        }
    })
};

 list();
