async function get_request() {
    try{
        console.log("Start fetchinf data");
        

        const requat = await fetch("https://jsonplaceholder.typicode.com/users")
        
        if (!requat.ok){
            throw Error (`HTTP error satatus: ${requat.status}`)
        }

        const data = await requat.json()

        console.log(data);

    }catch (err){
        console.log(err);
        
    }

}

// get_request()


// async function post_data() {
//     try{

//         const response = await fetch("https://jsonplaceholder.typicode.com/users",{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 userId: 11,
//                 name: 'John Doe',
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890'
//             })
//         })

//         if (!response.ok){
//             throw Error (`HTTP error status: ${response.status}`)
//         }

//         const data = await response.json()
//         console.log(data);

//     }catch (err){
//         console.log(err)
//     }
// }

// post_data()