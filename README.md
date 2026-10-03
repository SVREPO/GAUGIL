# GAUGIL — Landing page

Sitio estático (HTML + CSS + JS vanilla), sin build ni dependencias.

## Estructura
```
gaugil/
├── index.html          # Estructura y contenido (nav, hero, servicios, rubros, nosotros, footer, botón WhatsApp)
├── css/
│   └── styles.css      # Tokens (:root), layout, componentes, animaciones y media queries
├── js/
│   └── main.js         # Navbar, menú móvil, reveal on scroll, glow de cartas, partículas del hero
├── assets/
│   └── img/logo.png    # Logo de GAUGIL (también favicon)
└── README.md
```

## Cómo verlo
Abrí `index.html` en el navegador. Las tipografías (Unbounded e Instrument Sans) se cargan desde Google Fonts, así que necesitás conexión.

## Qué editar
- **Colores:** variables en `:root` al inicio de `css/styles.css`.
- **Teléfono / WhatsApp:** buscá `5491121909502` en `index.html` (hay 4 enlaces).
- **Email y localidad:** bloque `<footer>` de `index.html`.
- **Textos de cada sección:** `index.html`, dentro de su `<section>`.
- **Partículas del hero:** cantidad y distancia en `js/main.js`.
