let row = 4;
let col = 5;
const getTable = (row, col) => {
    let nums = 1;
    let matric = [];
    for (let i = 0; i < col; i++) {

        if (i % 2 === 0) {
            for (let j = 0; j < row; j++) {
                if (matric[j] === undefined) {
                    matric.push([])
                }
                matric[j].push(nums);
                nums++
            }

        } else {
            for (let j = row - 1; j >= 0; j--) {
                matric[j].push(nums);
                nums++
            }
        }
    }
    return matric
}

console.log(getTable(row, col));
