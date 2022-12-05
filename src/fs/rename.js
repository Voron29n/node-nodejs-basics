import * as fs from 'fs'
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const way = path.join(__dirname, 'files');

const rename = async () => {
    fs.access(path.join(way, 'properFilename.md'), (err) => {
        if (!err) {
            throw new Error('FS operation failed')
        } else {
            fs.access(path.join(way, 'wrongFilename.txt'), (err) => {
                if (err) {
                    throw new Error('FS operation failed')
                }
                fs.rename(path.join(way, 'wrongFilename.txt'), path.join(way, 'properFilename.md'), () => {
                    console.log("\nFile Renamed!\n");
                })
            })
        }
    })
};

rename();
