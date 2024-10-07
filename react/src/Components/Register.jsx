import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
      });
      console.log('Usuario registrado con éxito:', response.data);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <div>
      <Typography variant="h5">Registro</Typography>
      <TextField label="Nombre" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Correo" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Registrarse
      </Button>
    </div>
  );
};

export default Register;
