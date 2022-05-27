// // console.log('hello')
// // =======================
// // let x = new Object({  // create new obj with 'new Object'
// //     name:'Humoyun', 
// //     age:19, 
// //     book : new Object({ // another Obj in Object x
// //         name:'Harry Poter',
// //         price: '200$'
// //     })
// // })
// // similar
// let y = {
//     name:'Humoyun', 
//     age:19, 
//     book : new Object({ // another Obj in Object x
//         name:'Harry Poter',
//         price: '200$'
//     })
// }
// console.log(y.book.price)
// // =======================

// let person = [
//     {name:'Humoyun', age:18},
//     {name:'Kamran', age:22}
// ]
// // ===============
// console.log(person[0]['age'])
// // similar ====== 
// console.log(person[0].age) 
// // ================


// let z = person.map(person => person.name)
// console.log(z) // Humoyun and Kamran

// let x = Object.create({},{
//     name:{
//         value:"Humoyun",
//         enumerable: true,
//     },
//     age:{
//         value:19,
//         writable:true
//     }
// }) 

// delete x.name //false because of 'configurable is false'

// console.log('x ',x.name) //show in console, but can not change the value because of 'writable is false'
// for(let d in x){
//     console.log(d)
// } // age does not show in console because of 'enumerable is false'


// let a = {}
// a.x = 3
// let b = Object.create(a)  // inherits the key and value of a
// console.log(b) // {x:3}
// b.y = 4
// let c = b // inherits the keys and values of a and b
// console.log(c)  // {y:4} and {x:4}
// let d = c.x * c.y
// console.log(d)  // 12
// console.log('y' in c) // true
// console.log(c.x) // 4 but a.x is 3 
// let git = c?.x
// console.log(git)
// console.log('git' in c) // false

// delete b.y // true
// delete b.x // false because x i inherits from a
// console.log(b.x) // 3
// console.log(b.y) // undefined

// let x = {x : 6}
// let y = {y : 4, z : 9, toString:function(){return(`${this.y}, ${this.z}`)}}
// console.log(y.toString()) // 4, 9
// for(let key of Object.keys(y)){
//     x[key] = y[key]
// }
// console.log(x) // {x:6, y:4, z:9}

// let z = Object.assign({}, y) // copy the array
// z.y = 8 // change the value of y
// console.log(z) // {y:8, z:9}
// console.log(y) // {y:4, z:9}

let x ={x:3, y:4, z:5}
let y = {...x}
console.log(x==y) // false
y.y = 7
console.log(x) // {x:3, y:4, z:5}
console.log(y) // {x:3, y:7, z:5}


let z = {
    a : 10,
    b : 20,
    sum(){return this.a + this.b},
    multiply(){return this.sum() * this.sum()},
    toString(){return (`${this.sum()} ${this.multiply()}`)}
}
console.log(z.toString()) // 30, 900
console.log(typeof z.toString()) // string
console.log(z.sum()) // 30
console.log(z.multiply()) // 900
z.a = [2,3]
console.log(z.a) // array [2,3]
console.log(z?.a[1]) // 3






