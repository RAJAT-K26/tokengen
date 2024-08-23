
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

  

  const [blueTokens, setBlueTokens] = useState(0); 
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState(1);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState(1);
  const [generatedTokens, setGeneratedTokens] = useState([]); //stores generated tokens

  const handleGenerated = () => {
    const newToken = [];
    for (let i = 0; i < blueTokens; i++) {
      newToken.push({ color: 'blue', label: `${bluePrefix}${i + 1}` });
    }

    for (let i = 0; i < redTokens; i++) {
      newToken.push({ color: 'red', label: `${redPrefix}${i + 1}` });
    }

    setGeneratedTokens(newToken); // pushes the newToken generatedTokens array
  };

  const handleClear = () => {
    setBluePerRow(1);
    setBluePrefix('');
    setBlueTokens(0);
    setRedPerRow(1);
    setRedPrefix('');
    setRedTokens(0);
    setGeneratedTokens([]);
  };

  return (
    <>
     
      
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
        <h1>{blueTokens}</h1>
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
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-number"
          label="Number of red tokens"
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
      <Button variant="outlined" onClick={handleGenerated}>
        Generate
      </Button>
      <Button variant="outlined" onClick={handleClear}>
        Clear
      </Button>


{/* rendering boxes / tokens */}


      <div>
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {generatedTokens.filter((token) => token.color === 'blue')
            .map((token, index) => (
              <Grid item xs={12 / bluePerRow} key={index}>
                <Box
                  sx={{
                    backgroundColor: 'blue',
                    color: 'white',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '5px',
                  }}
                >
                  <h3>{token.label}</h3>
                </Box>
              </Grid>
            ))}

            
          {generatedTokens
            .filter((token) => token.color === 'red')
            .map((token, index) => (
              <Grid item xs={8 / redPerRow} key={index}>
                <Box
                  sx={{
                    backgroundColor: 'red',
                    color: 'white',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '5px',
                  }}
                >
                  <h3>{token.label}</h3>
                </Box>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}

export default App;
