class BubbleSort { 
    constructor() {
        this.nbOperations = 0;
    }

    sort(strArr) {
    const dataArr = strArr.split(' ').map(x => Number.parseInt(x, 10));
    // console.log(dataArr);
    // console.log(data)
    // console.log(`Fucking arr ${typeof myArr}`);
    for (let i = 0; i < dataArr.length; i++) {
        // console.log("in first loop");
        for (let j = 0; j < dataArr.length - i; j++) {
            if (dataArr[j] < dataArr[j-1]) {
                let temp = dataArr[j];
                dataArr[j] = dataArr[j-1];
                dataArr[j-1] = temp;
                this.nbOperations++;
           }
        }
    }
    console.log(`\nTri à bulles: ${this.nbOperations} - ${dataArr}`);
    }   
}

module.exports = BubbleSort;