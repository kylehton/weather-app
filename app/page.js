'use client'


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Modal, Button, TextField } from '@mui/material';
import { configDotenv } from 'dotenv';

export default function Home() {
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [Country, setCountry] = useState('');
  const [PostalCode, setPostalCode] = useState('');

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/weather?City=${encodeURIComponent(City)}
    &State=${encodeURIComponent(State)}
    &Country=${encodeURIComponent(Country)}
    &PostalCode=${encodeURIComponent(PostalCode)}`
    );
  };


  return (
    <main className="bg-white w-screen h-screen flex flex-col items-center mt-10">
      <h1 className="text-center text-4xl">Weather App</h1>
      <p>Created by: Kyle Ton</p>
      <Button variant="contained" color="primary" onClick={openDialog}>
        About PM Accelerator
      </Button>
      <Modal
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title" className="text-lg font-bold">Product Management Accelerator</h2>
          <p id="modal-description" className="text-base">The Product Manager Accelerator Program is designed to support PM professionals 
            through every stage of their career. From students looking for entry-level jobs 
            to Directors looking to take on a leadership role, our program has helped over 
            hundreds of students fulfill their career aspirations.</p>
          <Button onClick={closeDialog} className="mt-4 p-2 bg-gray-300 rounded">Close</Button>
        </Box>
      </Modal>



      <form onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-6">
        <div>
          <h2 className="text-xl mb-2">Please Enter a City Below:</h2>
          <TextField
            placeholder="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">Please Enter a State Below:</h2>
          <TextField
            placeholder="State"
            value={State}
            onChange={(e) => setState(e.target.value)}
            fullWidth
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">Please Enter a Country Below:</h2>
          <TextField
            placeholder="Country"
            value={Country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">Please Enter a Postal Code Below:</h2>
          <TextField
            placeholder="ZIP Code"
            value={PostalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            fullWidth
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </main>
  );
}
