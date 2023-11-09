import { useEffect, useState } from "react";


const Home = () => {
    const [usear, setusear] =useState([]);
    useEffect(()=>{
        fetch ('http://localhost:5000/user')
            .then(res=> res.json())
            .then(data=>setusear(data) )
    },[])
    const hendalSubmit =e =>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const user ={name, email};
        console.log(user)
        fetch ('http://localhost:5000/user', {
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=> {
            const newUser = [...usear, data];
            setusear(newUser);
            from.reset();
        })
    }
    // console.log(usear)
    return (
        <div className="w-5/6 mx-auto mt-5">
            <div className="grid grid-cols-4 gap-5 text-center">
                <div className="col-span-3">
                        <form onSubmit={hendalSubmit}>
                            <div className="space-y-4">
                            <input className="p-3 border w-3/4 rounded-lg" type="text" name="name" placeholder="Enter-Name" required />
                            <br />
                            <input className="p-3 border w-3/4  rounded-lg" type="email" name="email" placeholder="Enter-Email" required />
                            </div>
                            <input  className="btn btn-sm mt-4" type="submit" value="Submit" />
                        </form>
                </div>
                <div className="col-span-1">
                <h1 className="md:text-2xl font-semibold">Tomal User : {usear.length}</h1>
                <hr />
                {
                  usear.map(user=> <div key={user.id}>
                    <div className="flex">
                        <h1>{user.id}:</h1>
                        <h1 className="font-semibold">{user.name}, </h1>
                        <h1>{user.email}</h1>
                    </div>
                  </div>)  
                }
                </div>
            </div>
            
        </div>
    );
};

export default Home;