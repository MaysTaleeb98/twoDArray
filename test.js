

function searchInSortedMatrix(matrix, target){
    let Prow = 0
    let Pcol = (matrix.lenght) - 1
    while (Prow > -1 & Pcol > -1 & Prow < (matrix.lenght) & Pcol < (matrix.lenght) ){

        if (target > matrix[Prow][Pcol]){
            Prow ++;

        }
        else if (target < matrix[Prow][Pcol]){
            Pcol --;

        }
        else 
            return [Prow, Pcol]

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
let t = 44;

console.log(mt[0].size());

//console.log(searchInSortedMatrix(mt,t));
