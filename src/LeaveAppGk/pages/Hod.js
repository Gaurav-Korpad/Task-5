import { Box, CardActions, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, Card, FormControl, FormLabel, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "540 px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Hod() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  // const [formData, setFormData] = useState({

  //   from: "",
  //   to: "",
  //   reason: ""
  // });


  // const [hodData, setHodData] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setHodData([...hodData, formData])
  //   localStorage.getItem("leavedata", JSON.parse(hodData))
  //   setFormData({
  //     from: "",
  //     to: "",
  //     reason: ""
  //   })
  // }
  // console.log(hodData)

  const leaveapplied = JSON.parse(localStorage.getItem("leavedata"))

  const handleApprove = (id) => {
    const updateData = leaveapplied.find((e) => e.id === id)
    if (updateData) {
      const storedData = leaveapplied.map((leave) => {
        if (leave.id === id) {
          return {
            ...leave, status: "Approved"
          }
        }
        return leave 
      })
      localStorage.setItem("leavedata", JSON.stringify(storedData))
      navigate("/dashboard/hod")  
    }
  }

  const handleReject = (id) => {
    const updateData = leaveapplied.find((e) => e.id === id)
    if (updateData) {
      const storedData = leaveapplied.map((leave) => {
        if (leave.id === id) {
          return {
            ...leave, status: "Rejected"
          }
        }
        return leave 
      })
      localStorage.setItem("leavedata", JSON.stringify(storedData))
      navigate("/dashboard/hod")  
    }
  }


  // const handleChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev, [e.target.name]: e.target.value
  //   }))
  // }

  return (
    <>
      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Leave Dates
            </Typography>
            <FormControl sx={{ mb: 3 }} >
              <FormLabel>From</FormLabel>
              <TextField onChange={handleChange} name='from' value={formData.from} variant='outlined'
                type='date' />
            </FormControl>
            <FormControl sx={{ mb: 3, ml: 3 }} >
              <FormLabel>To</FormLabel>
              <TextField onChange={handleChange} name='to' value={formData.to} variant='outlined'
                type='date' />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Leave Reason</FormLabel>
              <TextField onChange={handleChange} name='reason' value={formData.reason} variant='outlined'
                type='text' multiline minRows={3} />
            </FormControl>

            <Button onClick={() => setOpen(false)} >
              Cancel
            </Button>
            <Button type='submit' variant='contained'  >
              Submit
            </Button>
          </form>
        </Box>
      </Modal> */}


      {leaveapplied?.map((data) => {
        return <Box mt={"15px"} border={"black 2px solid"}
          sx={{ width: "300px", ml: "20px" }}>
          <Card>
            <CardContent>
              <Typography>
                <h4>Fname - {data.fname}</h4>
                <h5>Lname - {data.lname}</h5>
              </Typography>
              <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                <h4> Leaves Applied From - </h4> <h5> {data.from} To {data.to}  </h5>
              </Typography>

              <Typography sx={{ mb: 2, mt: 2, fontSize: 20 }} color="text.secondary">
                <h5> Number of days - </h5>
              </Typography>
              <Typography sx={{ fontSize: 20 }} variant="body2" color="text.secondary">
                <h5>Reason - </h5>    <p> {data.reason} </p>

              </Typography>
            </CardContent>
            <CardActions>

              <Button onClick={() => handleApprove(data.id)} size="small" className='p-2 mb-1 bg-success text-white margin-left-2'>Approve</Button>

              <Button onClick={() => handleReject(data.id)} size="small" className='p-2 mb-1 bg-danger text-white margin-left-2'>Reject</Button>

            </CardActions>
          </Card>
        </Box>

      })}


    </>
  )
}

export default Hod
