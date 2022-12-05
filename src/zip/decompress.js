import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';
import {rm} from 'fs/promises';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const pathFileWithCompress = join(__dirname, 'files', 'fileToCompress.txt');
    const pathArchiveWithCompress = join(__dirname, 'files', 'archive.gz');
    const gunzip = createGunzip();

    const readStream = createReadStream(pathArchiveWithCompress);
    const writeStream = createWriteStream(pathFileWithCompress);

    readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on('finish', async () => {
            try {
                await rm(pathArchiveWithCompress);
            } catch (err) {
                console.log(err);
            }
        });
};

await decompress();
