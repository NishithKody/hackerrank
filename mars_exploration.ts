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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s: string): number {
    let n = s.length/3;
    console.log('reps',n);
    
    let count =0;
    
    let start =0;
    let mid = 1;
    let end = 2;
    
    let rep = 0;
    
    while(rep<n){
        
        if(s[start]!='S')
            count++;
        
        if(s[mid]!='O')
            count++;
            
        if(s[end]!='S')
            count++;
        start = start + 3;
        mid = mid + 3;
        end = end + 3;
        
        rep = rep+1;
    }
    
    return count;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: number = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
