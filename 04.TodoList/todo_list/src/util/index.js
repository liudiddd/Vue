

Array.prototype.getIdx = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i)) {
            return i 
        }
    } 
    return -1 
}






export default ()=>{console.log()}
