'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s: string): string {
    // Write your code here
    let count = 0;
    let chk = new Set();
    for(let i of s){
        if(i == ' ')
            continue;
            
        if(!chk.has(i.toLowerCase())){
            chk.add(i.toLowerCase())
            count++;
        }
    }
    console.log('count',count)
    if(count==26)
        return 'pangram'
    else
        return 'not pangram'
        

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
