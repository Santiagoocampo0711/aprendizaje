// Productos disponibles con códigos y precios
const productos = {
    "123": { nombre: "Manzana", precio: 1.500 },
    "456": { nombre: "Leche", precio: 4.500 },
    "789": { nombre: "Panela", precio: 50.000 },
    "321": { nombre: "Leche", precio: 6.750 },
    "369": { nombre: "Azúcar", precio: 9.500 },
    "147": { nombre: "Pasta", precio: 16.000 },
    "250": { nombre: "Frijol", precio: 10.000 },
    "654": { nombre: "Arroz (Paca)", precio: 48.000 },
    "987": { nombre: "Salsas x3", precio: 24.500 }
};

// Variable para llevar el total
let total = 0.000;

// Función para procesar un producto basado en su código
function procesarProducto() {
    const codigoProducto = document.getElementById('codigo').value;
    agregarProducto(codigoProducto);
    document.getElementById('codigo').value = ''; // Limpiar el campo de texto después de agregar
}

// Función para agregar un producto a la tabla
function agregarProducto(codigoProducto) {
    if (productos[codigoProducto]) {
        const producto = productos[codigoProducto];
        
        // Crear una nueva fila en la tabla
        const fila = document.createElement('tr');
        
        // Crear las celdas para el producto y precio
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = producto.nombre;
        
        const celdaPrecio = document.createElement('td');
        celdaPrecio.textContent = producto.precio.toFixed(3); // Mostrar el precio con 3 decimales
        
        // Crear la celda para el botón de eliminar
        const celdaEliminar = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = function() {
            fila.remove();  // Elimina la fila de la tabla
            total -= producto.precio; // Restar el precio del total
            document.getElementById('total').textContent = total.toFixed(3); // Actualizar el total
        };
        celdaEliminar.appendChild(botonEliminar);
        
        // Añadir las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaEliminar);
        
        // Añadir la fila a la tabla
        document.getElementById('cuerpo-tabla').appendChild(fila);
        
        // Sumar el precio al total
        total += producto.precio;
        document.getElementById('total').textContent = total.toFixed(3);
    } else {
        alert('Producto no encontrado');
    }
}

// Función para calcular el cambio
function calcularCambio() {
    const dineroRecibido = parseFloat(document.getElementById('dinero-recibido').value);
    
    if (isNaN(dineroRecibido)) {
        alert("Por favor, ingresa una cantidad válida de dinero.");
        return;
    }

    const cambio = dineroRecibido - total;
    document.getElementById('cambio').textContent = cambio.toFixed(3); // Mostrar el cambio con 3 decimales
}
