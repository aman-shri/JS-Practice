

function map(arr, callback) {
    let mappedArr = [];
    for(let i = 0; i<arr.length; i++){
        mappedArr.push(callback(arr[i]));
    }
    return mappedArr;
}


function filter(arr, callback){
    let filteredArr = [];
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

//removed the initial value logic and redundant code
function reduce(arr, callback){
    let accumulator = arr[0];
    for(let i = 0; i<arr.length; i++){
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}


//updating the original array
function forEach(arr, callback) {
    for(let i = 0; i<arr.length; i++){
        arr[i] = callback(arr[i]);
    }
}



const numbers = [1,2,3,4,5];

const mapped = map(numbers, (num) => num*3);
console.log(mapped);

const filtered = filter(numbers, (num) => num%2 == 0);
console.log(filtered);

const reduced = reduce(numbers, (acc, current) => acc+current);
console.log(reduced);

forEach(numbers, (num) => num*2);
console.log(numbers);