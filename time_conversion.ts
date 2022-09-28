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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    
    let arr = s.split(':')
    console.log(arr)
    let val = arr[2].substr(-2)
    let hr = arr[0]
    let min = arr[1];
    let sec = arr[2].substr(0,2);
    
    if(val=="AM")
    {
        if(hr=="12"){
            hr ='00';

            return hr+':'+min+':'+sec
        }
        else{
            return hr+':'+min+':'+sec
        }
        
    }
    else{
        if(hr=="12"){
            return hr+':'+min+':'+sec
        }
        else{
            hr = (parseInt(hr)+12).toString();
            return hr+':'+min+':'+sec
        }
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
