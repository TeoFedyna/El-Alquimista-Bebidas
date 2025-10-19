# El Alquimista Bebidas 🥃

Aplicación web de e-commerce especializada en la venta de bebidas alcohólicas, desarrollada como proyecto de práctica en JavaScript vanilla y tecnologías web modernas.

## Descripción

**El Alquimista Bebidas** es una tienda online completa que simula la venta de bebidas alcohólicas. Incluye funcionalidades esenciales como carrito de compras, validación de mayoría de edad, catálogo de productos dinámico y sistema de pedidos. El proyecto fue desarrollado para practicar conceptos de JavaScript, manipulación del DOM y diseño responsivo.

## Características Principales

- **Validación de edad** - Verificación obligatoria de mayoría de edad al acceder al sitio
- **Carrito de compras** - Sistema completo para agregar, modificar y eliminar productos
- **Diseño responsivo** - Interfaz optimizada para dispositivos móviles y desktop
- **Alertas interactivas** - Implementación de SweetAlert2 para confirmaciones elegantes
- **Gestión dinámica de productos** - Catálogo cargado desde archivo JSON para fácil mantenimiento
- **Formulario de pedidos** - Simulación completa del proceso de compra
- **Notificaciones en tiempo real** - Feedback inmediato de acciones del usuario

## Tecnologías Utilizadas

- **HTML5, CSS3, JavaScript ES6+** - Tecnologías base del desarrollo web
- **Bootstrap 5.2.0** - Framework CSS para diseño responsivo y componentes UI
- **SweetAlert2** - Librería para alertas y confirmaciones personalizadas
- **Toastify.js** - Sistema de notificaciones toast no intrusivas

## 📁 Estructura del Proyecto

```
El-Alquimista-Bebidas/
├── index.html              # Página principal
├── script.js               # Lógica de la aplicación
├── styles.css              # Estilos personalizados
├── README.md               # Documentación del proyecto
├── images/                 # Recursos gráficos
│   └── bebidas/           # Imágenes de productos
└── json/
    └── bebidas.json        # Base de datos de productos
```

## Instalación y Uso

### Prerrequisitos
- Navegador web moderno
- Git (para clonación del repositorio)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TeoFedyna/El-Alquimista-Bebidas.git
   ```

2. **Navegar al directorio del proyecto**
   ```bash
   cd El-Alquimista-Bebidas
   ```

3. **Ejecutar la aplicación**
   - **Opción 1**: Abrir directamente `index.html` en el navegador
   - **Opción 2**: Usar servidor local (recomendado)
     ```bash
     python -m http.server 8000
     ```
   Luego acceder a `http://localhost:8000`

## Funcionalidades

### Validación de Edad
Al acceder por primera vez, el sistema solicita verificación de mayoría de edad. Esta preferencia se almacena en localStorage para futuras visitas. Los usuarios menores de edad tienen el contenido restringido.

### Catálogo de Productos
La aplicación incluye una variedad de bebidas alcohólicas:
- **Whisky**: Jack Daniels, Chivas Regal, Johnnie Walker
- **Vodka**: Smirnoff, Absolut, Grey Goose, Skyy
- **Ron**: Havana Club (diferentes años), Malibu
- **Gin**: Bombay, Beefeater, Tanqueray
- **Fernet**: Branca, Branca Menta

### Sistema de Carrito
- Agregar productos con cantidad personalizable
- Modificar cantidades de productos existentes
- Eliminar productos individuales o vaciar carrito completo
- Cálculo automático del precio total

### Proceso de Compra Simulado
Formulario completo para recopilar datos del cliente (nombre, apellido, email, dirección) con validación de campos y confirmación de pedido.

## Arquitectura del Proyecto

### Estructura del Código

**HTML (`index.html`)**
- Estructura semántica con integración de Bootstrap
- Modales para carrito de compras y formularios
- Organización clara de secciones y componentes

**JavaScript (`script.js`)**
- Validación de edad implementada con SweetAlert2
- Gestión completa del carrito de compras
- Carga dinámica de productos desde JSON
- Manejo de eventos del DOM y validación de formularios

**CSS (`styles.css`)**
- Estilos personalizados complementando Bootstrap
- Tema visual con paleta negro y verde chartreuse
- Optimizaciones para diferentes tamaños de pantalla

**Datos (`bebidas.json`)**
Los productos se almacenan en formato JSON para facilitar el mantenimiento:
```json
{
  "id": 1,
  "tipo": "Fernet",
  "nombre": "Branca",
  "precio": 1000,
  "cantidad": 1,
  "img": "bebidas/fernet-branca.png"
}
```