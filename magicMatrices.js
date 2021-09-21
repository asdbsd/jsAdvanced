function magicMatrices(matrice) {
    let sums = {}
    let result = false;

    for (let i = 0; i < matrice.length; i++) {
        sums[`Row ${i+1}`] = matrice[i].reduce((acc, n) => {return acc + n}, 0);
        for (let y = 0; y < matrice.length; y++) {
            if (sums[`Column ${i+1}`]) {
                sums[`Column ${i+1}`] += matrice[y][i];
            } else {
                sums[`Column ${i+1}`] = matrice[y][i];
            }
        }
    }

    return (sums['Row 1'] === sums['Row 2'] && sums['Row 1'] === sums['Row 3']) 
        || (sums['Column 1'] === sums['Column 2'] && sums['Column 1'] === sums['Column 3']);

}

console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

));
console.log(magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

));