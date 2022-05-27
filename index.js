// console.log('hello')

// let x = new Object({  // create new obj with 'new Object'
//     name:'Humoyun', 
//     age:19, 
//     book : new Object({ // another Obj in Object x
//         name:'Harry Poter',
//         price: '200$'
//     })
// })
// similar
let y = {
    name:'Humoyun', 
    age:19, 
    book : new Object({ // another Obj in Object x
        name:'Harry Poter',
        price: '200$'
    })
}
console.log(y.book.price)


let person = [
    {name:'Humoyun', age:18},
    {name:'Kamran', age:22}
]

let z = person.map(person => person.name)
console.log(z) // Humoyun and Kamran

let x = Object.create({},{
    name:{
        value:"Humoyun",
        enumerable: true,
    },
    age:{
        value:19,
        writable:true
    }
}) 

x.name = "Humo" //false because of 'configurable is false'

console.log('x ',x.name) //show in console, but can not change the value because of 'writable is false'
console.log('x ',x.age) // does not show in console because of 'enumerable is false'