import { Box } from '@mui/material'
import ToggleBtn from '../../UI/toggleBtn'
import './themeSwitch.css'
import { useContext } from 'react';
import { MyContext } from '../../context/myContext';

const ThemeSwitch = () => {
  const { lightMode, setLightMode } = useContext(MyContext);
    return <Box className='themeSwitchParent'>
        <ToggleBtn value={lightMode} setValue={setLightMode}/>
    </Box>
}

export default ThemeSwitch