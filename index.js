
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
        console.log(2);
        console.log(grid[i][j]);

        // West to East
        str = "";
        let k = 0;
        while(grid[i][j+k]){
            // console.log(3);
            str += grid[i][j+k];
            if(str.length > 2){
                console.log(`W- -> E- | ${str}`);
            }
            k++;
        }

        // North-West to South-East
        str = "";
        k = 0;
        while(i + k < 5 && j + k < 5){
            str += grid[i+k][j+k];
            if(str.length > 2){
                console.log(`NW -> SE | ${str}`);
            }
            k++;
        }

        // North to South
        str = "";
        k = 0;
        while(i + k < 5){
            str += grid[i+k][j];
            if(str.length > 2){
                console.log(`N- -> S- | ${str}`);
            }
            k++;
        }
                
        // North-East to South-West
        str = "";
        k = 0;
        while(i + k < 5 && j - k > -1){
            str += grid[i+k][j-k];
            if(str.length > 2){
                console.log(`NE -> SW | ${str}`);
            }
            k++;
        }

        // East to West
        str = "";
        k = 0;
        while(j - k > -1){
            str += grid[i][j-k];
            if(str.length > 2){
                console.log(`E- -> W- | ${str}`);
            }
            k++;
        }

        // South-East to North-West
        str = "";
        k = 0;
        while(i - k > -1 && j - k > -1){
            str += grid[i-k][j-k];
            if(str.length > 2){
                console.log(`SE -> NW | ${str}`);
            }
            k++;
        }

        // South to North
        str = "";
        k = 0;
        while(i - k > -1){
            str += grid[i-k][j];
            if(str.length > 2){
                console.log(`S- -> N- | ${str}`);
            }
            k++;
        }



    }
}

