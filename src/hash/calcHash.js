import * as fs from 'fs';
import * as crypto from 'crypto';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const wayToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const cryptoHash = crypto.createHash('sha256')
    fs.readFile(wayToFile, 'utf-8', (err, data) => {
        if (err) {
            console.log('Something was wrong')
        } else {
            console.log(cryptoHash.update(data).digest('hex'));
        }
    })
};

calculateHash();
