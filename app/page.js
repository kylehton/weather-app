'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField } from '@mui/material';

export default function Home() {
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [Country, setCountry] = useState('');
  const [PostalCode, setPostalCode] = useState('');

  const router = useRouter();

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
