import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/register")
    }
    const [loginData, setLoginData] = useState({
        email : "",
        password : "",
    
    });

    const handleChange = (e)=>{
        setLoginData((a)=>({...a,[e.target.name]:e.target.value }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const storeduser = JSON.parse(localStorage.getItem("user"))
        const loginuser = storeduser.find((a)=>a.email===loginData.email && a.password===loginData.password)
        if (loginuser) {
            alert("login successfull")
            console.log("Login Sucessfull")
            localStorage.setItem("login",JSON.stringify(loginuser))
            navigate(`/dashboard/${loginuser.role}`)
            
        } else {
            alert("invalid credentials")
            console.log("invalid credentials")

        }
    }


  return (
    <>
          <form onSubmit={handleSubmit}>
                <Box
                    borderRadius="25px"
                    border={"0.25px solid #ccc"}
                    padding={"60px"}
                    display={"flex"}
                    maxWidth={"450px"}
                    flexDirection={"column"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <Typography textAlign="center" color="primary" variant='h4'>Login Form</Typography>
                    <TextField name='email' value={loginData.email} onChange={handleChange} variant='outlined' margin='normal' placeholder='Enter Email' type='email' />
                    <TextField name='password' value={loginData.password} onChange={handleChange} variant='outlined' margin='normal' placeholder='Enter Password' type='password' />
                    <Button sx={{ mt: 2 }} type='submit' variant='contained'>Login</Button>
                    <div fullWidth className='text-center'><span >Not Registered yet? <Link onClick={handleClick} className='no-underline mr-2'> Signup</Link></span></div>
                </Box>
            </form>
    </>
  )
}

export default Login









































// import { Box, Button, Link, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Login() {
    
//     const navigate = useNavigate()
//     const handleClick = ()=>{
//         navigate("/Register")
//     }
//     const [loginData, setLoginData] = useState({
//         email : "",
//         password : "",
    
//     });

//     const handleChange = (e)=>{
//         setLoginData((a)=>({...a,[e.target.name]:e.target.value }))
//     }
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         const storeduser = JSON.parse(localStorage.getItem("user"))
//         const loginuser = storeduser.find((a)=>a.email===loginData.email && a.password===loginData.password)
//         if (loginuser) {
//             alert("login successfull")
//             console.log("Login Sucessfull")
//             localStorage.setItem("login",JSON.stringify(loginuser))
//             navigate(`/dashboard/${loginuser.role}`)
            
//         } else {
//             alert("invalid credentials")
//             console.log("invalid credentials")

//         }
//     }


//   return (
//     <>
//           <form onSubmit={handleSubmit}>
//                 <Box
//                     borderRadius="25px"
//                     border={"0.25px solid #ccc"}
//                     padding={"60px"}
//                     display={"flex"}
//                     maxWidth={"450px"}
//                     flexDirection={"column"}
//                     margin={"100px auto"}
//                     boxShadow={"5px 5px 10px #ccc"}
//                     sx={{
//                         ":hover": {
//                             boxShadow: "10px 10px 20px #ccc"
//                         }
//                     }}
//                 >
//                     <Typography textAlign="center" color="primary" variant='h4'>Login Form</Typography>
//                     <TextField name='email' value={loginData.email} onChange={handleChange} variant='outlined' margin='normal' placeholder='Enter Email' type='email' />
//                     <TextField name='password' value={loginData.password} onChange={handleChange} variant='outlined' margin='normal' placeholder='Enter Password' type='password' />
//                     <Button sx={{ mt: 2 }} type='submit' variant='contained'>Login</Button>
//                     <div fullWidth className='text-center'><span >Not Registered yet? <Link onClick={handleClick} className='no-underline mr-2'> Signup</Link></span></div>
//                 </Box>
//             </form>
//     </>
//   )
// }

// export default Login
