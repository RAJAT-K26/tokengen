
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
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import { shadows } from '@mui/system';





function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      }
    }
  });



  const [blueTokens, setBlueTokens] = useState();
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState(1);
  const [redTokens, setRedTokens] = useState();
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
    setBlueTokens();
    setRedPerRow(1);
    setRedPrefix('');
    setRedTokens();
    setGeneratedTokens([]);
  };


  const handleSliderChange = (event, newValue) => {
    setBlueTokens(newValue);
  };

  const handleInputChange = (event) => {
    const value = event.target.value === '' ? '' : Number(event.target.value);
    setBlueTokens(value);
  };
  return (
    <>
      <div style={{ backgroundColor: '#e8eaf6', height: '100vw' }}>
        <Container maxWidth='md' sx={{ borderRadius: '3vh', marginTop: '2px' }} >



          <Container maxWidth="sm" sx={{ backgroundColor: '#dcdff2', borderRadius: '3vh', paddingBottom: '3vh', boxShadow: 6}}>
            <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h2" gutterBottom sx={{ color: "#35373f" }}>
                Token Generator
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    id="outlined-number"
                    label="Number of blue tokens"
                    type="number"
                    value={blueTokens}
                    onChange={(e) => setBlueTokens(Number(e.target.value))}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ paddingRight: '8px', marginTop: '20px' }}
                  />


                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    id="outlined-number"
                    label="Blue token prefix"
                    type="text"
                    value={bluePrefix}
                    onChange={(e) => setBluePrefix(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ paddingRight: '8px', marginTop: '20px' }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Container>
                    blue per row<Slider
                      color=''
                      size='small'
                      valueLabelDisplay="auto"
                      shiftStep={30}
                      step={1}
                      onChange={(e) => setBluePerRow(Number(e.target.value))}
                      marks
                      min={1}
                      max={10}
                    />
                  </Container>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    id="outlined-number"
                    label="Number of red tokens"
                    type="number"
                    value={redTokens}
                    onChange={(e) => setRedTokens(Number(e.target.value))}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ paddingRight: '8px', marginTop: '20px' }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    id="outlined-number"
                    label="Red token prefix"
                    type="text"
                    value={redPrefix}
                    onChange={(e) => setRedPrefix(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ paddingRight: '8px', marginTop: '20px' }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Container>
                    Red per row<Slider
                    color=''
                      aria-label="Temperature"
                      defaultValue={0}
                      size='small'
                      valueLabelDisplay="auto"
                      shiftStep={30}
                      step={1}
                      onChange={(e) => setRedPerRow(Number(e.target.value))}
                      marks
                      min={1}
                      max={10}
                    />
                  </Container>
                </Grid>
              </Grid>

            </Grid>
          </Container>





          <Container sx={{
            marginTop: "1vw", display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ButtonGroup variant="text" aria-label="Basic button group" >
              <Button variant='contained' sx={{backgroundColor:'#b3bbe4', color:'#363844',boxShadow: 7}} onClick={handleGenerated}>
                Generate
              </Button>
              <Button variant='contained' sx={{color:'white', backgroundColor:'#b3bbe4',boxShadow: 7}} onClick={handleClear}>
                Clear
              </Button>

            </ButtonGroup>
          </Container>



          {/* rendering boxes / tokens */}


          <div style={{ marginTop: "1vw" }}>
            <Grid
              container
              spacing={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center', // Center text within the boxes
              }}
            >
              {generatedTokens
                .filter((token) => token.color === 'blue')
                .map((token, index) => (
                  <Grid item xs={12 / bluePerRow} key={index}>
                    <Box
                      sx={{
                        boxShadow: 8,
                        backgroundColor: '#5f6dff',
                        color: 'white',
                        width: '70px',
                        height: '70px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // margin: '0 auto', // Center the box within the grid item
                        borderRadius: '5px',
                      }}
                    >
                      <h4>{token.label}</h4>
                    </Box>
                  </Grid>
                ))}

              {generatedTokens.some((token) => token.color === 'red') && (
                <Grid item xs={12}>
                  <hr style={{ borderColor: 'transparent' }} />
                </Grid>
              )}

              {generatedTokens
                .filter((token) => token.color === 'red')
                .map((token, index) => (
                  <Grid item xs={12 / redPerRow} key={index}>
                    <Box
                      sx={{
                        boxShadow: 8,
                        backgroundColor: '#f66263',
                        color: 'white',
                        width: '70px',
                        height: '70px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // margin: '0 auto', // Center the box within the grid item
                        borderRadius: '5px',
                      }}
                    >
                      <h4>{token.label}</h4>
                    </Box>
                  </Grid>
                ))}
            </Grid>


          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
