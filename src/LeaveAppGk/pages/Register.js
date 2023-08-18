
import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Radio, Select, TextField  } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function Register() {

  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = useState('');
  const [isHod, setIsHod] = useState(1);
  const [registerdata, setRegisterdata] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    username: "",
    password: ""
  });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("user") || "[]"));

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (e) => {
    setRegisterdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isHod === 1) {
      registerdata.role = "hod"
      setData([...data, registerdata])
    } else {
      registerdata.role = "staff"
      registerdata.token = uuidv4()
      setData([...data, registerdata])
    }
  }

  const userdata = localStorage.setItem("user", JSON.stringify(data))
  console.log(userdata);

  const handleClick = () => {
    navigate("login")
  }
  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          borderRadius="25px"
          border={"0.25px solid #ccc"}
          padding={"40px"}
          maxWidth={"540px"}
          flexDirection={"row"}
          margin={"50px auto"}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
            '& .MuiTextField-root': { width: '215px' }
          }}
        >

          <div className='mb-2'>
            <FormLabel id="demo-row-radio-buttons-group-label">HOD</FormLabel>
            <Radio
              checked={selectedValue === 'hod'}
              onChange={handleRadioChange}
              onClick={() => setIsHod(1)}
              value="hod"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />

            <FormLabel id="demo-row-radio-buttons-group-label">STAFF</FormLabel>
            <Radio
              checked={selectedValue === 'staff'}
              onChange={handleRadioChange}

              onClick={() => setIsHod(2)}

              value="staff"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />
          </div>

          <FormControl sx={{ mb: 3 }} >
            <FormLabel>Enter Name:</FormLabel>
            <TextField variant='outlined'
              name='fname'
              value={registerdata.fname}
              onChange={handleChange}
              type='text' />
          </FormControl>

          <FormControl sx={{ ml: 3, mb: 3 }}>
            <FormLabel>Last Name:</FormLabel>
            <TextField variant='outlined' name='lname' value={registerdata.lname} onChange={handleChange} type='text' />
          </FormControl>

          <FormControl sx={{ mb: 3 }}>
            <FormLabel>Email Address:</FormLabel>
            <TextField variant='outlined' name='email' value={registerdata.email} onChange={handleChange} type='email' />
          </FormControl>

          <FormControl sx={{ ml: 3, mb: 3 }}>
            <FormLabel>Contact:</FormLabel>
            <TextField variant='outlined' name='contact' value={registerdata.contact} onChange={handleChange} type='number' />
          </FormControl>

          <FormControl sx={{ width: "215px", mb: 3 }}>
            <InputLabel id="demo-simple-select-label">Department Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Department Name"
            // onChange={handleChange}
            >
              <MenuItem >Computer</MenuItem>
              <MenuItem >Civil</MenuItem>
              <MenuItem >Mechanical</MenuItem>
            </Select>
          </FormControl>

          <div>
            <FormControl sx={{ mb: 3 }} >
              <FormLabel>UserName:</FormLabel>
              <TextField variant='outlined' name='username' value={registerdata.username} onChange={handleChange} type='text' />
            </FormControl>
            <FormControl sx={{ ml: 3, mb: 3 }} >
              <FormLabel>Password:</FormLabel>
              <TextField variant='outlined' name='password' value={registerdata.password} onChange={handleChange} type='password' />
            </FormControl>
          </div>
          <Button fullWidth sx={{ my: 2, display: 'block' }} type='submit' variant='contained'>Register</Button>
          <div fullWidth className='text-center'><span >Already Registered? <Link onClick={handleClick} className='no-underline mr-2'> Login</Link></span></div>
        </Box>
      </form>
    </>
  )
}

export default Register
