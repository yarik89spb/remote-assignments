// count: return an object which shows the count of each character

function count(input){
    return input.reduce((accumulator, item) => {
        if(accumulator[item]){ //returns falsy 'undefined' if the key is not there yet
            accumulator[item]++;
        }  else{
            accumulator[item] = 1;
        }
        return accumulator;
    }
        , {});
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));

// groupByKey: return an object which shows the summed-up value of each key

function groupByKey(input) {
    return input.reduce((accumulator, item) => {
        if(accumulator[item.key]){
            accumulator[item.key] += item.value;
        }  else{
            accumulator[item.key] = item.value;
        }
        return accumulator;
    }
        , {});
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

console.log(groupByKey(input2));  // should print {a:6, b:1, c:7}

