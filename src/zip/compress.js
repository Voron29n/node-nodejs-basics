import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';
import {rm} from 'fs/promises';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const pathFileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
    const pathArchiveToCompress = join(__dirname, 'files', 'archive.gz');
    const gzip = createGzip();

    const readStream = createReadStream(pathFileToCompress);
    const writeStream = createWriteStream(pathArchiveToCompress);

    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', async () => {
            try {
                await rm(pathFileToCompress);
            } catch (err) {
                console.log(err);
            }
        });
};

await compress();
