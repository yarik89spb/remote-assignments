function delayedResult(n1, n2, delayTime, callback) {
    const result = n1 + n2;
    setTimeout(function(){
        callback(result)
    }, delayTime);
}

function delayedResultPromise(n1, n2, delayTime){
    return new Promise((resolve, reject) => { 
        setTimeout(()=>resolve(n1 + n2), delayTime)
    })
}

async function main() {
    try {
        const output = await delayedResultPromise(4, 5, 3000);
        console.log(output);
    } catch(error){
        console.error('Functin delayedResultPromise failed to fulfill the promise', error);
    }    
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 second

delayedResultPromise(50, 50, 4000).then(console.log);
// 9 (4+5) will be shown in the console after 3 second

main();