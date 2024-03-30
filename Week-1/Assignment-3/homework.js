// 1. countAandB:counthowmany‘a’and‘b’ lettersareinthegiveninputandreturnthe totalnumber
function countAandB(input){
    let sum = 0;
    for(let now of input){ 
        if(now.toLowerCase() === "a" || now.toLowerCase() === "b"){
            sum++
        }
    }
    return sum;
}


// Same result, but better scalability and control over each element's count

function countAandB2(input) {
    let newArr = [...input];
    return newArr.reduce((accumulator, currentValue) => {
        switch (currentValue.toLowerCase()) {
            case 'a':
                accumulator['a']++;
                accumulator['sum']++;
                break;
            case 'b':
                accumulator['b']++;
                accumulator['sum']++;
                break;
            // add case for another desired letter
        
        }
        return accumulator;
    }, {'a':0, 'b':0, 'sum':0}); // ... and the letter itself
}

//  2. toNumber:convertEnglishletterstonumbers, let ‘a’ tobe1, ‘b’ to be 2,and so on

function toNumber(input) {
    let newArr = [...input];
    // all English letters 
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    // lambda function: search for the letter's (changed to lower case)  index in the alphabet, which is equal the letter number minus one. 
    return newArr.map(now => {
        index = letters.indexOf(now.toLowerCase())
        return index != -1 ? index + 1 : NaN});
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log('School tests:')
console.log("Count A and B:")
console.log(countAandB(input1));
console.log(countAandB(input2));

console.log("To Number:")
console.log(toNumber(input1));
console.log(toNumber(input2));

const testArray = ['a', 'a', 'b', 'c', 'z', 'Ж', "囧", 'A', 'A'];
console.log(`Custom test using ${testArray}`)
console.log('Sum of a and b counts:', countAandB(testArray))
console.log(countAandB2(testArray))
console.log('Letters to digits:', toNumber(testArray))