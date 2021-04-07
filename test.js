

function searchInSortedMatrix(matrix, target){
    let NumberOfrow = 0 ;
    const  s = matrix[0].length
    let NumberOfcol = s-1;
   
  // console.log(s-1);
    //console.log(NumberOfcol);
    //console.log(s);

  //  console.log(NumberOfcol < s );

    while (NumberOfrow > -1 && NumberOfcol  > -1 && NumberOfrow< matrix.length &&  NumberOfcol  < s ){
       /// console.log(NumberOfrow > -1)
        if (target > matrix[NumberOfrow][NumberOfcol]){
            NumberOfrow++;
           // searchInSortedMatrix(matrix, target);
           // console.log(NumberOfrow);


        }
        else if (target < matrix[NumberOfrow][NumberOfcol]){
            NumberOfcol--;
           // searchInSortedMatrix(matrix, target);


        }
        else if (target = matrix[NumberOfrow][NumberOfcol]){
            return [NumberOfrow, NumberOfcol];   
        }
       

    }

    return [-1, -1]
}

let mt = [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004],
        
        ] ;

//console.log(mt[0].length); //6
//console.log(mt.length);//5


let t = 32;
let t2= 44;
let t3 = 100;
let t4 = 66;

console.log(searchInSortedMatrix(mt,t)); // [1,4]
console.log(searchInSortedMatrix(mt, t2)); // [3,3]
console.log(searchInSortedMatrix(mt, t3)); // [4,1]
console.log(searchInSortedMatrix(mt, t4)); // [-1,-1]


