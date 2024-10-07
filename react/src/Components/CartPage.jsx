import axios from "axios";
import React from "react";
import { useCartStore } from "../store";

const Carrito = () => {
    const cart = useCartStore((state) => state.cract);
    const userId = 1;


    const pago = async () => {
        try {
            const productos = cart.map(product => product.id);
            const response = await axios.post ("http://localhost:5000/api/pedidos", {userId, productos
        });
        
        console.log("Pedido realizado con éxito!", response.data);
    } catch (error) {
        console.error("Error al realizar el pedido:", error);
    }

};

    return (
        <Button onClick={pago}>Realizar pedido</Button>
    );
};

export default Carrito;
