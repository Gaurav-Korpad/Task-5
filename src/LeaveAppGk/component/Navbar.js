import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/login")
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Leave Application
                        </Typography>
                        <Button  color="inherit" onClick={handleClick}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <Button onClick={handleClick}>
                Login
            </Button> */}
        </div>
    )
}

export default Navbar
