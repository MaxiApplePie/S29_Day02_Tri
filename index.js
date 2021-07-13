const fs = require('fs');
const fileName = process.argv[2];
const BubbleSort = require('./class/tri01_bulles.js');
const InsertionSort = require ('./class/tri02_insertion.js');
const SelectionSort = require ('./class/tri03_selection.js');
//const QuickSort = require('./class/quick-sort');

if (!fs.existsSync(fileName)) {
    console.log ('Fichier non existant.');
    return;
}

const data = fs.readFileSync(fileName, 'utf8');
const bubbleSort = new BubbleSort();
const insertionSort = new InsertionSort();
const selectionSort = new SelectionSort();
//const quickSort = new QuickSort();

if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    bubbleSort.sort(data);
    insertionSort.sort(data);
    selectionSort.sort(data);
});


// `node index.js list.txt`
// `node index.js list2.txt`