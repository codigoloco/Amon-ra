import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const Calculator = () => {

  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleDigit = (digit) => {
    if (waitingForSecondValue) {
      setDisplayValue(digit.toString());
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(
        displayValue === '0' ? digit.toString() : displayValue + digit
      );
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const currentValue = firstValue || 0;
      const newValue = performCalculation(currentValue, inputValue, operator);
      setFirstValue(newValue);
      setDisplayValue(newValue.toString());
    }

    setOperator(nextOperator);
    setWaitingForSecondValue(true);
  };

  const handleEqual = () => {
    const inputValue = parseFloat(displayValue);
    const currentValue = firstValue || 0;
    const newValue = performCalculation(currentValue, inputValue, operator);
    setDisplayValue(newValue.toString());
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const performCalculation = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };
  return (
    <Box className="calculator">
        <Box className="buttons"  padding={2} sx={{ width: '20%' }}>
          <Grid  padding="normal" rowSpacing={2} columnSpacing={1}>
                  <Grid className="display"> {displayValue} </Grid>
          </Grid>
          <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(7)}>7</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(8)}>8</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(9)}>9</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleOperator('/')}>/</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(4)}>4</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(5)}>5</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(6)}>6</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleOperator('*')}>*</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(1)}>1</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(2)}>2</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(3)}>3</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleOperator('-')}>-</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleDigit(0)}>0</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleEqual()}>=</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleOperator('+')}>+</Button> </Grid> 
          <Grid xs={3}> <Button variant="contained" onClick={() => handleClear()}>C</Button> </Grid> 
          </Grid>
        </Box>
      </Box>
    
  )
}

