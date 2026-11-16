async function requat_Data() {
    console.log("begin to fetch data")
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await response.json()
        console.log(data)
    }catch (err){
        console.log(err)
    }
}

requat_Data()
console.log('hello')
