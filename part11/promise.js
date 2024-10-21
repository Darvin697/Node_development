const { rejects } = require('assert')
const { resolve } = require('path')
const Promise=require('promise')


function add(num1,num2){
    return new Promise ((resolve,reject)=>{
        if (num1===0) {
            reject('Error')
            
        }
        resolve(num1+num2)
    })
}
function mul(num1,num2){
    return new Promise ((resolve,reject)=>{
        if (num1===0) {
            reject('Error')
            
        }
        resolve(num1*num2)
    })
}
function div(num1,num2){
    return new Promise ((resolve,reject)=>{
        if (num1===0) {
            reject('Error')
            
        }
        resolve(num1/num2)
    })
}

add(10,20).then((sum)=>{
    console.log(sum);
    return mul(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})