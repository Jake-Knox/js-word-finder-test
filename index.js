// v1.0 - 26-5-2023 Jake Knox

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
let l = 0;
let m = 0;


for(let i = 0; i< 5; i++){
    // console.log(1);

    for(let j = 0; j< 5; j++){
        console.log(2);
        console.log(grid[i][j]);

        // West to East
        str = "";
        k = 0;
        while(j + k < 5){            
            str += grid[i][j+k];
            if(str.length > 2){
                // console.log(3);
                console.log(`W- -> E- | ${str}`);
            }
            k++;
        }
        // start from 1 back
        m = j-1
        if(m > -1){
            str = "";
            k = 0;
            while(m + k < 5){
                str += grid[i][m+k];
                if(str.length > 4){
                    console.log(`BW -> BE | ${str}`);     
                }                           
                k++;
            }
        }
        // start from 2 back - check the row
        m = j-2
        if(m > -1){
            str = "";
            k = 0;
            while(m + k < 5){
                str += grid[i][m+k];
                if(str.length == 10){
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
        if(m < 5){
            str = "";
            k = 0;
            while(m - k > -1){
                // console.log(3);
                str += grid[i][m-k];                
                if(str.length == 8){
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
        // start from 1 back
        l = i-1
        m = j-1
        if(l  > -1 && m > -1){
            str = "";
            k = 0;
            while(l + k < 5 && m + k < 5){
                str += grid[l+k][m+k];
                if(str.length > 4){
                    console.log(`BNW-> SE | ${str}`);  
                }                              
                k++;
            }
        }
        // start from 2 back - check the row
        l = i-2
        m = j-2
        if(l  > -1 && m > -1){
            str = "";
            k = 0;
            while(l + k < 5 && m + k < 5){
                str += grid[l+k][m+k];
                if(str.length == 10){
                    console.log(`BNW->SE5 | ${str}`);
                }
                k++;
            }
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
        // start from 1 back
        l = i+1
        m = j+1
        if(l < 5 && m < 5){
            str = "";
            k = 0;
            while(l - k > -1 && m - k > -1){
                str += grid[l-k][m-k];
                if(str.length == 8){
                    console.log(`BSE-> NW | ${str}`);     
                }                           
                k++;
            }
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
        // start from 1 back
        l = i-1
        if(l  > -1){
            str = "";
            k = 0;
            while(l + k < 5){
                str += grid[l+k][j];
                if(str.length > 4){
                    console.log(`BN -> S  | ${str}`);  
                }                              
                k++;
            }
        }
        // start from 2 back - check the row
        l = i-2
        if(l  > -1){
            str = "";
            k = 0;
            while(l + k < 5){
                str += grid[l+k][j];
                if(str.length == 10){
                    console.log(`BN -> S5 | ${str}`);
                }
                k++;
            }
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
        // start from 1 back
        l = i+1
        if(l < 5){
            str = "";
            k = 0;
            while(l - k > -1){
                str += grid[l-k][j];
                if(str.length == 8){
                    console.log(`BS -> N- | ${str}`); 
                }                               
                k++;
            }
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
        // start from 1 back
        l = i-1
        m = j+1
        if(l > -1 && m < 5){
            str = "";
            k = 0;
            while(l + k < 5 && m - k > -1){
                str += grid[l+k][m-k];
                if(str.length > 4){
                    console.log(`BNE-> SW | ${str}`);  
                }                              
                k++;
            }
        }
        // start from 2 back - check the row
        l = i-2
        m = j+2
        if(l > -1 && m < 5){
            str = "";
            k = 0;
            while(l + k < 5 && m - k > -1){
                str += grid[l+k][m-k];
                if(str.length == 10){
                    console.log(`BNE->SW5 | ${str}`);
                }
                k++;
            }
        }
                    
        // South-West to North-East
        str = "";
        k = 0;
        while(i - k > -1 && j + k < 5){
            str += grid[i-k][j+k];
            if(str.length > 2){
                console.log(`NE -> SW | ${str}`);
            }
            k++;
        }
        // start from 1 back
        l = i+1
        m = j-1
        if(l < 5 && m > -1){
            str = "";
            k = 0;
            while(l - k > -1 && m + k < 5){
                str += grid[l-k][m+k];
                if(str.length == 8){
                    console.log(`BSW-> NE | ${str}`);  
                }                              
                k++;
            }
        }
    }
}

