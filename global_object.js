console.log(global);
console.log(__dirname);
setTimeout(() => { // after specified time reach it will stop execution
    console.log("Hey Mr. Gebreyes timeout");
}, 3000);
setInterval(() => { // updating every imformation in every 1 seconds or 1000 ms no timeout 
    console.log("In every one second");
}, 1000);