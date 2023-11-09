import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const UserList = () => {
    const getlodData = useLoaderData();
    const [lodData, setlodData]= useState(getlodData);
    // console.log(lodData);
    const handleDelet = _id =>{
        // console.log(_id)
        fetch (`http://localhost:5000/serUser/${_id}`,{
            method:'delete'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount>0) {
                // alert('delete');
                const newData = lodData.filter(user => user._id !== _id );
                setlodData(newData);
            }
        })
    }
    return (
        <div>
            <h1>Total User : {lodData.length}</h1>
            {
              lodData.map(use => <p key={use._id}>  {use.name} : {use.email} <button onClick={()=>handleDelet(use._id)} className=" text-red-600">X</button></p>)  
            }
        </div>
    );
};

export default UserList;