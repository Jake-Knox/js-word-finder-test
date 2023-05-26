
let grid = 
[
    ["A1","A2","A3","A4","A5"],
    ["B1","B2","B3","B4","B5"],
    ["C1","C2","C3","C4","C5"],
    ["D1","D2","D3","D4","D5"],
    ["E1","E2","E3","E4","E5"],
];

let str = "";
let k = 0;

for(let i = 0; i< 5; i++){
    // console.log(1);

    for(let j = 0; j< 5; j++){
        // console.log(2);

        console.log(2);

        str = "";
        let k = 0;
        while(grid[i][j+k]){
            // console.log(3);

            str += grid[i][j+k];
            console.log(`W- -> E- | ${str}`);

            k++;
        }

        str = "";
        k = 0;
        while(i + k < 5){
            str += grid[i+k][j];
            console.log(`N- -> S- | ${str}`);

            k++;
        }
        
        
        str = "";
        k = 0;
        while(i + k < 5 && j + k < 5){
            str += grid[i+k][j+k];
            console.log(`NW -> EE | ${str}`);

            k++;
        }







    }
}

