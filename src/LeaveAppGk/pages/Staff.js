import { Box, Button, Card, CardActions, CardContent, FormControl, FormLabel, Modal, TextField, Typography, colors } from '@mui/material';
import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
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


function Staff() {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    reason: "",
    status:"Pending"
  });

  const [staffData, setStaffData] = useState([]);
  const names = JSON.parse(localStorage.getItem("login")||"[]")

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,fname:names.fname  , lname:names.lname , id:uuidv4() , [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStaffData([...staffData, formData])
    localStorage.setItem("leavedata", JSON.stringify(staffData))
    setFormData({
      from: "",
      to: "",
      reason: ""
    })
  }
  console.log(staffData)

  const storedleave = JSON.parse(localStorage.getItem("leavedata"))

  return (
    <>
      <Button onClick={() => setOpen(true)}>Apply Leave</Button>
      <Modal
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
      </Modal>


      {storedleave?.map((data) => {
        return <Box
          border={"black 2px solid"}
          sx={{ width: "300px", ml: "20px" }}>
          <Card>
            <CardContent>
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
              <h6 >Status </h6>
              <Button size="small" className='p-2 mb-1 bg-warning text-white margin-left-2'>{data.status} </Button>
            </CardActions>
          </Card>
        </Box>

      })}


    </>
  )
}

export default Staff
