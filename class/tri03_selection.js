class SelectionSort { 
    constructor() {
        this.nbOperations = 0;
    }

    sort(strArr) {
    const dataArr = strArr.split(' ').map(x => Number.parseInt(x, 10));
    for (let i = 0; i < dataArr.length - 1; i++) {
        let minimum = i;
        for (let j = i + 1; j < dataArr.length; j++) { 
            if (dataArr[j] < dataArr[minimum]) {
                minimum = j;
            }
            let temp = dataArr[i];
            dataArr[i] = dataArr[minimum];
            dataArr[minimum] = temp;
            this.nbOperations++;
        }
    }
    console.log(`Tri par selection: ${this.nbOperations} - ${dataArr}`);
    }   
}
// 48 -2 6 12 0 -4
module.exports = SelectionSort;