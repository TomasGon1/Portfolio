const proyectos = [
    {
        titulo:"DecoGamer",
        descripcion:"Landing page responsive para decoración gamer, desarrollada con HTML, CSS, SASS, SEO y Bootstrap. Host: Netlify",
        url:"https://decogamer.netlify.app/",
        imagen:"img/decogamer.jpg"
    },
    {
        titulo:"ZonaPet",
        descripcion:"Sitio informativo para mascotas, construido con JavaScript moderno (ES6) y diseño dinámico. Host: Netlify",
        url:"https://zonapet.netlify.app",
        imagen:"img/zonapet.jpg"
    },
    {
        titulo:"Tienda Gamers",
        descripcion:"E-commerce interactivo con React JS y Firebase, incluye catálogo y carrito. Host: Netlify",
        url:"https://tiendagamerss.netlify.app",
        imagen:"img/tienda-gamers.jpg"
    },
    {
        titulo:"E-commerce",
        descripcion:"Aplicación completa con Node.js y MongoDB, usando Express, Passport, WebSockets, CRUD y usuarios con roles. Host: Render",
        url:"https://e-commerce-2llb.onrender.com",
        imagen:"img/ecommerce.jpg"
    },
    {
        titulo:"Blog para Usuarios",
        descripcion:"Plataforma web con Python y Django para publicar, editar y gestionar entradas de blog. Host: Render",
        url:"https://miprimerapagina-gonzalez.onrender.com",
        imagen:"img/blog.jpg"
    }
];

const contenedor = document.getElementById("contenedor-proyectos");
proyectos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" class="card-img">
        <h2>${p.titulo}</h2>
        <p>${p.descripcion}</p>
        <a href="${p.url}" target="_blank">Ver Página</a>
        `;

        contenedor.appendChild(card);
});