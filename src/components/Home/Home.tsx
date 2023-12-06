import { Box } from "@mui/material"
import './home.css'
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"



const Home = () => {
    return (
        <Box className='homeParent'>
            <Box>
                <ThemeSwitch />
            </Box>
            <Box>
                <h1>News App</h1>
            </Box>
        </Box>
    )
}


export default Home