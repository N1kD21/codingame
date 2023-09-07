import {readFileSync} from 'fs';

const data: string[] = readFileSync("./telephoneNumbers/text.txt", 'utf8').split('\n');
export { data }