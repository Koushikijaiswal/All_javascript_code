function appStart() {
    console.log("App started")
}
 
setTimeout(appStart, 10000)
 
function printNumbers() {
    for (let i = 0; i <= 10; ++i)
        console.log(i)
}
 
setInterval(printNumbers, 5000)