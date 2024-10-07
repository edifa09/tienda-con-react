import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button, } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import CartModal from './CardModal';
import AddProductModal from './AddProductModal'; 
import useCartStore from '../../../store';


const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [addProductModalOpen, setAddProductModalOpen] = useState(false); 
  const handleCartModalOpen = () => {
    setCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setCartModalOpen(false);
  };

  const handleAddProductModalOpen = () => {
    setAddProductModalOpen(true); 
  };

  const handleAddProductModalClose = () => {
    setAddProductModalOpen(false); 
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'primary.main',width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tienda
          </Typography>

          <Button 
            color="inherit" 
            startIcon={<AddIcon />} 
            onClick={handleAddProductModalOpen}
          >
            Agregar Producto
          </Button>

          <IconButton color="inherit" onClick={handleCartModalOpen}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <CartModal open={cartModalOpen} handleClose={handleCartModalClose} />

      <AddProductModal open={addProductModalOpen} onClose={handleAddProductModalClose} />
    </>
  );
};

export default Navbar;