//input
var intbytes = 2000000000000000000000000 
//scale
const scale = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
//start of function
var lastvalue = intbytes 
var lastscale = 0
for (x in scale) {
    conversion = lastvalue / 1024
    if ( conversion >= 1) {
        lastscale = parseInt(x) + 1
        lastvalue = conversion 
    }
}
//end of function
//output scale
console.log(scale[lastscale]) 
console.log(parseFloat(lastvalue).toFixed(2)) 
