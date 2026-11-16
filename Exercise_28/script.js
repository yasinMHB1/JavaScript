function fetchDataWithPromise(){
    return new Promise( (resolve,reject) => {

    setTimeout( ()=>{
        const success = false;
        if (success){
            resolve("Data fetched successfully")
        }else{
            reject("Failed to fetch data")
        }
    },2000)
    })   
}


async function displayResponse() {

    try {

        const response = await fetchDataWithPromise()
        console.log(response);

    }catch (err){
        console.log(err);
        
    }
    
}

displayResponse()