import { useState } from "react"
const Login = ()=>{
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = async (e)=>{
        e.preventDefault()

        const userData = {
            email,
            password
        }
        const response = await fetch('https://backendauth-duaj.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const data = await response.json()


        localStorage.setItem('token', data.token)
    }

    return (
        <form onSubmit={handleLogin} className="flex flex-col">
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="outline-1 border-2" name="email"/>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="outline-1 border-2" name="password"/>
            <button>Submit</button>
        </form>
    )
}

export default Login