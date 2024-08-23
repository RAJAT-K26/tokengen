
import './App.css';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BlueRow() {
  return (
    <React.Fragment>
    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        id="outlined-number"
        label="Number of blue tokens"
        type="number"
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
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ paddingRight: '8px', marginTop: '20px' }}
      />
    </Grid>
  </React.Fragment>
  );
}
function App() {
  return (
    <>
      <BlueRow/>
      <RedRow/>
      <Button variant="outlined">Generate</Button>
      <Button variant="outlined">Clear</Button>
    </>
  );
}

export default App;
