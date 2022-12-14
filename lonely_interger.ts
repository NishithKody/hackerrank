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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]): number {
    // Write your code here
    let map = new Map();
    
    for(let i of a){
        if(map.has(i)){
            map.set(i,map.get(i)+1)
        }
        else{
            map.set(i,1)
        }
    }
    for(let i of map){
        if(i[1]==1){
            return i[0];
        }
    }
    

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result: number = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}



//We can use set also. Since it is given that other integers will occur exactly twice
// public static int lonelyinteger(List < Integer > a) {
//      HashSet < Integer > hs = new HashSet < Integer > ();
//      for (int i: a) {
//          if (hs.contains(i)) {
//              hs.remove(i);
//          } else {
//              hs.add(i);
//          };
//      }
//      //Return the only element remaining in the set.
//      return hs.iterator().next();
//  }
