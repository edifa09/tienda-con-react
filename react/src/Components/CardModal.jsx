import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import useCartStore from '../../../store';
import axios from 'axios';

const CartModal = ({ open, handleClose }) => {
  const { cart = [], removeFromCart } = useCartStore(); // Asegúrate de que `cart` esté definido
  const totalPrice = cart.reduce((acc, product) => acc + parseFloat(product.price || 0), 0).toFixed(2); // Asegúrate de que `price` sea un número

  const realizarPedido = async () => {
    try {
      const userId = 1; 
      const productos = cart.map((product) => product.id);
      const response = await axios.post("http://localhost:5000/api/pedidos", {
        userId,
        productos,
      });
      console.log("Pedido realizado con éxito:", response.data);
    } catch (error) {
      console.error("Error al realizar el pedido:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Carrito</DialogTitle>
      <DialogContent>
        {cart.length === 0 ? (
          <Typography>Tu carrito está vacío</Typography>
        ) : (
          <List>
            {cart.map((product) => (
              <ListItem key={product.id}>
                <ListItemText primary={product.name} secondary={`Precio: $${product.price}`} />
                <Button variant="outlined" color="secondary" onClick={() => removeFromCart(product.id)}>
                  Eliminar
                </Button>
              </ListItem>
            ))}
          </List>
        )}
        <Typography variant="h6" sx={{ mt: 2 }}>Total: ${totalPrice}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={realizarPedido} variant="contained" color="primary">
          Comprar
        </Button>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartModal;
