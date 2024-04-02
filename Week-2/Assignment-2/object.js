function avg(data) {
    let sum = 0;
    for(item of data.products){
        sum += item.price;
    }
    return Math.round(sum / data.size, 4); 
    }

// Redo using reduce method     
function avg_reduce(data){
    let sum = (data.products).reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return sum / data.size
}


const input1 = {
    size: 3,
    products: [
        {
            name: 'Product 1',
            price: 100,
        },
        {
            name: 'Product 2',
            price: 700,
        },
        {
            name: 'Product 3',
            price: 250,
        },
    ],
}

console.log(`Input format: Object with properties size=${input1.size} and products=${[...input1.products]}`)
console.log(`Output for the first function (For loop): ${avg(input1)}`);
console.log(`Output for the second function (Reduce): ${avg_reduce(input1)}`);