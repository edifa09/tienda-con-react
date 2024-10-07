import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import useCartStore from '../../../store';

const ProductList = () => {
  const products = useCartStore((state) => state.products); 
  const fetchedProducts = useCartStore((state) => state.fetchedProducts); 
  const addToCart = useCartStore((state) => state.addToCart);
  const removeProduct = useCartStore((state) => state.removeProduct);

  useEffect(() => {
    fetchedProducts(); 
  }, [fetchedProducts]);

 
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Productos Disponibles
      </Typography>
      <Grid container spacing={2}>
        {products.length === 0 ? (
          <Typography variant="body1" sx={{ ml: 2 }}>
            No hay productos disponibles.
          </Typography>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography>${product.price}</Typography>
                  <Button variant="contained" onClick={() => addToCart(product)}>
                    Añadir al Carrito</Button>
                  <Button variant="outlined" color="secondary" onClick={() => removeProduct(product.id)}>
                  Eliminar Producto</Button>
                  
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default ProductList;
