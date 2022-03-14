import React,{useEffect,useState} from "react"

const userList=()=>{
const [users,setUsers]=useState([])

useEffect(()=>{
    const fetchUsers =async()=>{
        const res =await fetch("https://jsonplaceholder.typicode.com/users")
        const json =await res.json()
        setUsers(json)
        console.log(users)
    }    
    fetchUsers() 
},[])
let renderUsers = users.map((user)=>{
 
    return (<div key={user.id}>
<p>
    {user.name}
</p>

    </div>)
})
return 
    <div>
        {renderUsers}
    </div>

}
export default userList
