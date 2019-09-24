let promise = new Promise((resolve,reject) =>{
    let a = 1 + 1
    if(a === 2){
        resolve('success')
    }else{
        reject('Failed')
    }
})

promise.then((message)=>{
    console.log(`Promise ${message}`)
}).catch((message)=>{
    console.log(`Promise ${message}`)
})