/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/




const alphabet: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
alphabet.push('?');
const L: number = parseInt(readline());
const H: number = parseInt(readline());
const T: Array<string> = readline().split('');
const row: Array<string> = [];

const validateVar = (variable: string) => {
    const regex = /[A-Za-z]/g;
    const found = variable.match(regex);
    return found ? found[0].toUpperCase() : '?';
  }
  


function splitString(inputString: string, chunkSize: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < inputString.length; i += chunkSize) {
      result.push(inputString.slice(i, i + chunkSize));
    }
    return result;
}


for (let i = 0; i < H; i++) {
    row[i] = '';
    const ROW: string = readline();
    for(let j = 0; j < T.length; j++){
        const litera = validateVar(T[j]);
        const stringBukva = splitString(ROW, L)[alphabet.indexOf(litera)];
        row[i] = row[i].concat('', stringBukva);
    }
}


for (let i = 0; i < row.length; i++) {
    console.log(row[i])
}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

