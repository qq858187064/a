function base(){
base.prototype={
init(){
    console.log('base.prototype.init')
}

}
}
console.log(typeof module === "object" && typeof module.exports === "object")
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports =base
}
