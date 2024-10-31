import {Stack, Typography} from '@mui/material';
import Paperbox from './components/Paperbox';
import './App.css'



function App() { 

  return (
    <>
    <Stack sx={{
    justifyContent: "center",
    alignItems: "center",
  }} padding={2}>
      <Stack sx={{alignItems:'center'}}>
        <Typography variant='h4' gutterBottom sx={{fontWeight:800}}>FAQ/ACCORDION</Typography>
        </Stack>
       <Paperbox/>    
      </Stack>
    </>
  )
}

export default App
