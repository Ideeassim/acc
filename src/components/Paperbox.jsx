import {React, useState} from 'react';
import {Paper, Stack, Typography, createTheme, ThemeProvider, Button} from '@mui/material';
import Stackbox from './stackbox';
import stackText from './stackText';


function Paperbox() {
    const theme= createTheme({
        typography:{
          fontFamily:'Roboto'
        }
      })

  const[firstBtnClick, setButtonState]=useState(false);
  const[secondBtnClick, setSecondBtn]= useState(false);
  const[thirdBtnClick, setThirdBtn]= useState(false);

  function Expand(event){
    const id= event.target.id; 
   if (id == 'firstbutton') {
     return setButtonState(prevValue =>{
       return !prevValue
     })
   }
   else if (id == 'secondbutton') {
     return setSecondBtn(prevValue =>{
       return !prevValue
     })
   }
   if (id == 'thirdbutton') {
     return setThirdBtn(prevValue =>{
       return !prevValue
     })
   } console.log('clicked');
   
   }

    return <Paper className='paperbox' elevation={3} sx={{width: '50%', backgroundColor:'#0a1bb8', borderRadius:'10px'}}>
    <ThemeProvider theme={theme}>
    <center>
     
      <Typography variant='h5' sx={{fontWeight:600, textTransform:'capitalize', marginBottom:'10px', color:'white', marginTop:'20px'}} >
      Frequently asked questions</Typography>
      </center>

    <Stack spacing={2} padding={2} color={'black'} fontFamily='Roboto'>
      <Stackbox heading={stackText.heading1} text='firstbutton' click={firstBtnClick} Expand={Expand} content={stackText.content1}/>
      <Stackbox heading={stackText.heading2} text='secondbutton' click={secondBtnClick} Expand={Expand} content={stackText.content1} />
      <Stackbox heading={stackText.heading3} text='thirdbutton' click={thirdBtnClick} Expand={Expand} content={stackText.content1} />        
      
    </Stack>
    
    </ThemeProvider>
   </Paper>
}

export default Paperbox;