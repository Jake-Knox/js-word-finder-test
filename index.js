// v0.1 - 26-5-2023 Jake Knox

let grid = 
[
    ["A1","A2","A3","A4","A5"],
    ["B1","B2","B3","B4","B5"],
    ["C1","C2","C3","C4","C5"],
    ["D1","D2","D3","D4","D5"],
    ["E1","E2","E3","E4","E5"],
];

// used to make the strings from chars
let str = "";
let k = 0;

// used for backtracking before check
let m = 0;

// will be used to stop double checks
let foundWE3 = false;
let foundWE5 = false;


let foundNWEE = false;
let foundNS = false;
let foundNESW = false;

for(let i = 0; i< 5; i++){
    // console.log(1);

    for(let j = 0; j< 5; j++){
        console.log(2);
        console.log(grid[i][j]);

        foundWE3 = false;
        foundWE5 = false;

        foundNWEE = false;
        foundNS = false;
        foundNESW = false;

        // West to East
        str = "";
        k = 0;
        while(j + k < 5){
            // console.log(3);
            str += grid[i][j+k];
            if(str.length > 2){
                console.log(`W- -> E- | ${str}`);
            }
            k++;
        }
        // start from 1 back
        m = j-1
        if(m > -1)
        {
            str = "";
            k = 0;
            while(m + k < 5){
                // console.log(3);
                str += grid[i][m+k];                
                
                console.log(`BW -> BE | ${str}`);                
                                
                k++;
            }
        }
        m = j-2
        if(m > -1)
        {
            str = "";
            k = 0;
            while(m + k < 5){
                // console.log(3);
                str += grid[i][m+k];
                if(str.length == 10)
                {
                    console.log(`BW -> 5E | ${str}`);
                }
                k++;
            }
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
        m = j+1
        if(m < 5)
        {
            str = "";
            k = 0;
            while(m - k > -1){
                // console.log(3);
                str += grid[i][m-k];
                if(str.length == 6 && foundWE3 == false)
                {
                    foundWE3 = true;
                    console.log(`BE -> BW | ${str}`);
                }
                else if(str.length > 6)
                {
                    console.log(`BE -> BW | ${str}`);
                }                   
                k++;
            }
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

