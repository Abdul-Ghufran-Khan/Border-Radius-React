import { useState } from "react"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [roundedval, setroundedval] = useState()

  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <div className={`container bg-blue-400 w-96 h-56 ${roundedval}`}>
          <div className="row">
          </div>
        </div>
      </div>
      <Stack spacing={2} direction="row" className="flex justify-around mt-28">
        <Button  onClick={() => setroundedval('rounded-sm')} variant="outlined">Rounded-sm</Button>
        <Button  onClick={() => setroundedval('rounded-md')} variant="outlined">Rounded-md</Button>
        <Button  onClick={() => setroundedval('rounded-lg')} variant="outlined">Rounded-lg</Button>
        <Button  onClick={() => setroundedval('rounded-xl')} variant="outlined">Rounded-xl</Button>
        <Button  onClick={() => setroundedval('rounded-2xl')} variant="outlined">Rounded-2xl</Button>
        <Button  onClick={() => setroundedval('rounded-3xl')} variant="outlined">Rounded-3xl</Button>
        <Button  onClick={() => setroundedval('rounded-full')} variant="outlined">Rounded-full</Button>
      </Stack>
    </>
  )
}

export default App
