# Farmacia Del Pueblo

Sitio web institucional para **Farmacia Del Pueblo**, desarrollado con React y Vite.

El objetivo de la web es presentar la farmacia de forma clara, profesional y accesible, facilitando que los usuarios puedan consultar servicios, horarios, ubicación y comunicarse por WhatsApp.

---

## Descripción

La web está pensada como una landing institucional para una farmacia local.

Incluye:

- Página de inicio.
- Historia de la farmacia.
- Servicios.
- Contacto.
- Comunidad.
- Botones de WhatsApp.
- Enlaces a Google Maps.
- Información de horarios.
- SEO local básico.
- Diseño responsive para desktop, tablet y mobile.

---

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- CSS modular por componente
- HTML semántico
- SEO básico
- Vercel para deploy

---

## Estructura del proyecto

```txt
webFarmaciaDelPueblo/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   └── NavBar/
│   │
│   ├── data/
│   │   ├── contactData.js
│   │   └── navigationData.js
│   │
│   ├── pages/
│   │   ├── Contact/
│   │   ├── Community/
│   │   ├── History/
│   │   ├── Home/
│   │   └── Services/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md