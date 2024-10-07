import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import useCartStore from "../../../store";

const AddProductModal = ({ open, onClose }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const addProduct = useCartStore((state) => state.addProduct);

    const handleAddProduct = () => {
      if (name && price) {
        addProduct({ name, description: "Producto agregado desde el frontend", price: parseFloat(price).toFixed(2) });
        setName('');
        setPrice('');
        onClose();
      }
    };

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Agregar Nuevo Producto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre del Producto"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Precio del Producto"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">Cancelar</Button>
          <Button onClick={handleAddProduct} variant="contained" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    );
};

export default AddProductModal;
