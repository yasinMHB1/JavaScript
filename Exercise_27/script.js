function fetchDataWithPromise(){
    return new Promise( (resolve,reject) => {

    setTimeout( ()=>{
        const success = true;
        if (success){
            resolve("Data fetched successfully")
        }else{
            reject("Failed to fetch data")
        }
    },2000)
    })   
}

console.log(fetchDataWithPromise()
        .then(msg => console.log(msg))
        .catch(err => console.log(err))
        )