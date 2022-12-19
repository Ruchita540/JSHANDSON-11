// const parent = {
//     firstname : 'alok',
//     lastname : 'kushwaha',
//     addres : 'satna',
//     fullname(){
//         return (`${this.firstname} ${this.lastname}`)
//     }

// }

// const child = {
//     __proto__:parent
// }
// const son = {
//     __proto__:child
// }

// console.log(son.fullname());

arr = [1, 2, 3, 4]
arr1 = [3, 2, 5, 4]
arr2 = [4, 2, 2, 4]

const array = {
add: function (a){
    sum=0;
    for(i=0;i<a.length;i++){
        sum = sum + a[i]
    }
    console.log(sum);
}
}
Array.__proto__=array
Array.add(arr1)


var obj = {
    name : "Alok",
    course : "full-stack",
    college : "satna",
    standard : 12
}
result = Object.keys(obj)
console.log(result);



