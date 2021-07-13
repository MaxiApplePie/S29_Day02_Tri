class InsertionSort { 
    constructor() {
        this.nbOperations = 0;
    }

    sort(strArr) {
    const dataArr = strArr.split(' ').map(x => Number.parseInt(x, 10));
    for (let i = 1; i < dataArr.length; i++) {
        let current = dataArr[i];
        let j = i - 1;
        while (j >= 0 && dataArr[j] > current) {
            dataArr[j + 1] = dataArr[j];
            j--;
            this.nbOperations++;
        }
        dataArr[j + 1] = current;
    }
    console.log(`Tri par insertion: ${this.nbOperations} - ${dataArr}`);
    }   
}

module.exports = InsertionSort;