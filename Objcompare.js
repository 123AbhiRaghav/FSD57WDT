function CompareObject(obj1,obj2){
    let isSame = true;
    if(Object.keys(obj1).length === Object.keys(obj2).length){
        for(let key in obj1) {
            console.log(key);
            if(obj1[key] !== obj2[key]) {
                isSame = false;
                console.log(key + "diff value")
            }
        }
    } else {
        isSame = false;
        console.log("object length are diff")
    }
    return isSame;
}
console.log(CompareObject({name:"Person1",age:5},{age:5,name:"Person1"})? "Same" : "diff");