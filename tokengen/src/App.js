
import './App.css';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState } from 'react';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function App() {

  function BlueRow() {
    return (
      <React.Fragment>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Number of blue tokens"
          type="number"
          onChange={(e) => setBlueTokens(Number(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ paddingRight: '8px', marginTop: '20px' }}
        />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Blue token prefix"
          type="text"
          onChange={(e) => setBluePrefix(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ paddingRight: '8px', marginTop: '20px' }}
        />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Blue token per row"
          type="number"
          onChange={(e) => setBluePerRow(Number(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ paddingRight: '8px', marginTop: '20px' }}
        />
      </Grid>
    </React.Fragment>
    );
  }

  function RedRow() {
    return (
      <React.Fragment>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Number of Red tokens"
          type="number"
          onChange={(e) => setRedTokens(Number(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ paddingRight: '8px', marginTop: '20px' }}
        />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Red token prefix"
          type="text"
          onChange={(e) => setRedPrefix(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ paddingRight: '8px', marginTop: '20px' }}
        />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Red token per row"
          type="number"
          onChange={(e) => setRedPerRow(Number(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ paddingRight: '8px', marginTop: '20px' }}
        />
      </Grid>
    </React.Fragment>
    );
  }

  const [blueTokens, setBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState(1);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState(1);
  const [generatedTokens, setGeneratedTokens] = useState([]);

  return (
    <>
     
      
      <Container fixed>
      <BlueRow/>
      <RedRow/>
      <Box sx={{alignItems:"center", marginLeft:'34vw' , marginTop:"3vw"}}>
      <Button  variant="outlined">Generate</Button>
      <Button variant="outlined">Clear</Button>
      </Box>
      
      </Container>
    </>
  );
}

export default App;
