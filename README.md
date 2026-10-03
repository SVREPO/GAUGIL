# GAUGIL — Diseño y desarrollo web

Landing page profesional para GAUGIL, un estudio de diseño y desarrollo web especializado en crear presencias digitales para estudios jurídicos, clínicas, inmobiliarias, gimnasios y clubes.

Sitio 100% estático (HTML + CSS + JS vanilla), sin dependencias de frameworks ni build steps.

## Stack

| Capa   | Tecnología |
|--------|------------|
| Marcado | HTML5 semántico |
| Estilo  | CSS3 con variables, Flexbox y animaciones |
| Lógica  | JavaScript vanilla |
| Tipografía | Unbounded + Instrument Sans (Google Fonts) |
| Íconos  | SVG inline |

## Estructura

```
gaugil/
├── index.html           # Contenido completo (nav, hero, servicios, rubros, nosotros, footer, WhatsApp)
├── css/
│   └── styles.css       # Variables, layout, componentes, animaciones, media queries
├── js/
│   └── main.js          # Navbar sticky, menú móvil, reveal al scrollear, glow de cards, partículas del hero
├── assets/
│   └── img/
│       └── logo.png     # Logo (también usado como favicon)
├── vercel.json          # Configuración de deploy en Vercel
├── package.json         # Scripts de desarrollo local
└── README.md
```

## Desarrollo local

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:3000 con live-reload
npm start       # igual pero sin abrir el navegador
```

## Deploy

El proyecto se deploya en **Vercel** en cero pasos:

1. Subir el código a GitHub.
2. Ir a [vercel.com/new](https://vercel.com/new), importar el repositorio.
3. Vercel detecta automáticamente que es un proyecto estático — sin configurar nada más.

## Personalización

- **Colores**: editar las variables `:root` en `css/styles.css`.
- **Teléfono / WhatsApp**: buscar `5491121909502` en `index.html`.
- **Email y dirección**: bloque `<footer>` en `index.html`.
- **Textos**: cada sección tiene su `<section>` con id descriptivo en `index.html`.
- **Partículas del hero**: ajustar cantidad y distancia en `js/main.js`.