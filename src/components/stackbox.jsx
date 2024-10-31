import React from "react";
import {Stack, Typography} from '@mui/material';


function Stackbox(props) {

  
    return <Stack sx={{backgroundColor: 'white'}} padding={2}>
          <Stack direction="row" sx={{justifyContent:'space-between'}}>
             <Typography variant='h6'>{props.heading}</Typography><div className="b" onClick={props.Expand} id={props.text}>{props.click? "\u2212":"\uFF0B"}</div>
             
          </Stack>         
          <Stack sx={{display: props.click? 'block':'none' }}>
           <p>{props.content}</p>
          </Stack>          
        </Stack>
}

export default Stackbox;