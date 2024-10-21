const { resolve } = require('path')
const Promise=require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Darvin')
        },3000)
    })
}

function getMobial(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('15321412551')
        },2000)
    })
}


// Promise.all([getName(),getMobial()]).then((result)=>{
//     console.log(result)
// })

async function getUser(){
    let name = await getName()
    console.log(name)

}

getUser()

async function getNumber() {
    let mobile =  await getMobial()
    console.log(mobile)
    
}


getNumber()