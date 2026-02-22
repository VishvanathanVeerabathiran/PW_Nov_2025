/* Scoping of the 
*/
//var name="Vishvanathan" //Global declaration
if (true) {
    var compName = "TCS"; console.log(compName); }//var can access inside the block}console.log(compName);// var can acces outside the block
    if (true) {
        let name = "Vishva"; console.log(name); }//let can access inside the block}console.log(name);// let cannot acces outside the block
        if (true) {
            const carName = "WagonR"; console.log(carName); }//Const can access inside the block}console.log(carName);// const cannot acces outside the block}
