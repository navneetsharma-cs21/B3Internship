var spiralOrder = function(matrix) {
    let result = []
    let m = matrix.length
    let n = matrix[0].length
    let srow = 0
    let erow = m-1
    let scol = 0
    let ecol = n-1 

    while(srow <= erow && scol <= ecol){
        // top
        for(let i=scol ; i<=ecol ; i++){
            result.push(matrix[srow][i])
        }

        // right
        for(let i=srow+1 ; i<=erow ; i++){
            result.push(matrix[i][ecol])
        }

        // bottom
        for(let i=ecol-1; i>=scol; i--){
            if(srow == erow){
                break
            }
            result.push(matrix[erow][i])
        }

        // left
        for(let i=erow-1 ; i>=srow+1 ; i--){
            if(scol == ecol){
                break
            }
            result.push(matrix[i][scol])
        }

        srow++; scol++; erow--; ecol--;
    }
    return result;
};



console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));


console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));


console.log(spiralOrder([[1]]));


console.log(spiralOrder([[1,2],[3,4]]));