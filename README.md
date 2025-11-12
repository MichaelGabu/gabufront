# Gabufront

> Framework CSS/JS moderno y ligero para desarrollo web

[![Version](https://img.shields.io/badge/version-0.2.0-blue.svg)](https://github.com/MichaelGabu/gabufront)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Gabufront es un framework frontend completo que combina la potencia de Stylus como preprocesador CSS con componentes JavaScript interactivos. Diseñado para ser ligero, modular y fácil de usar.

## Características

- 🎨 **18+ Componentes UI** - Botones, formularios, tarjetas, modales, navegación y más
- 📱 **Responsive Design** - Mobile-first con breakpoints bien definidos
- ⚡ **Ligero** - Solo ~91KB de CSS compilado
- 🎯 **Modular** - Usa solo lo que necesitas
- 🛠️ **Stylus** - Preprocesador CSS potente y flexible
- 🎪 **Componentes Interactivos** - JavaScript para funcionalidad completa
- 🌈 **Sistema de Diseño** - Paleta de colores y tipografía consistente

## Instalación

### Via npm

```bash
npm install gabufront
```

### Via CDN (próximamente)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gabufront/dist/gabufront.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/gabufront/dist/gabufront.js"></script>
```

### Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/MichaelGabu/gabufront.git
cd gabufront

# Instalar dependencias
npm install

# Modo desarrollo (watch)
npm run dev

# Build de producción
npm run build:prod
```

## Inicio Rápido

### HTML Básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto con Gabufront</title>

    <!-- Gabufront CSS -->
    <link rel="stylesheet" href="dist/gabufront.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Catamaran:300,400,700,900" rel="stylesheet">
</head>
<body>
    <!-- Tu contenido aquí -->
    <div class="grid">
        <div class="grid-item w12">
            <h1>Hola, Gabufront!</h1>
        </div>
    </div>

    <!-- Gabufront JS -->
    <script src="dist/gabufront.js"></script>
</body>
</html>
```

## Componentes

### Botones

```html
<!-- Botón primario -->
<button class="btn">Botón</button>

<!-- Botón flat -->
<button class="btn btn-flat">Flat</button>

<!-- Botón circular -->
<button class="btn btn-circle">
    <i class="material-icons">add</i>
</button>

<!-- Botón de búsqueda -->
<button class="btn btn-search">Buscar</button>
```

### Grid System

Sistema de grilla de 12 columnas con Flexbox:

```html
<div class="grid">
    <div class="grid-item w12 m6 l4">
        Columna 1
    </div>
    <div class="grid-item w12 m6 l4">
        Columna 2
    </div>
    <div class="grid-item w12 m12 l4">
        Columna 3
    </div>
</div>
```

**Clases de ancho:**
- `w1` a `w12` - Ancho en columnas (1-12)
- Responsive: `m1-m12` (tablet), `l1-l12` (desktop)

### Tarjetas

```html
<div class="card">
    <div class="card-content">
        <h3>Título de la tarjeta</h3>
        <p>Contenido de la tarjeta aquí.</p>
    </div>
    <div class="card-action">
        <a href="#">Enlace 1</a>
        <a href="#">Enlace 2</a>
    </div>
</div>
```

### Formularios

```html
<div class="input-field">
    <input type="text" id="nombre">
    <label for="nombre">Nombre</label>
</div>

<div class="input-field">
    <textarea id="mensaje" class="materialize-textarea"></textarea>
    <label for="mensaje">Mensaje</label>
</div>

<!-- Checkbox -->
<p>
    <input type="checkbox" id="check1">
    <label for="check1">Opción 1</label>
</p>

<!-- Radio -->
<p>
    <input type="radio" name="grupo" id="radio1">
    <label for="radio1">Opción A</label>
</p>

<!-- Switch -->
<div class="switch">
    <label>
        Off
        <input type="checkbox">
        <span class="lever"></span>
        On
    </label>
</div>
```

### Modales

```html
<!-- Botón trigger -->
<button class="btn" data-target="modal1">Abrir Modal</button>

<!-- Modal -->
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4>Título del Modal</h4>
        <p>Contenido del modal aquí.</p>
    </div>
    <div class="modal-footer">
        <button class="btn modal-close">Cerrar</button>
    </div>
</div>

<script>
// Inicializar modal
Gabufront.Modal.init();
</script>
```

### Tabs

```html
<div class="tabs">
    <ul>
        <li class="tab"><a href="#tab1" class="active">Tab 1</a></li>
        <li class="tab"><a href="#tab2">Tab 2</a></li>
        <li class="tab"><a href="#tab3">Tab 3</a></li>
    </ul>
</div>

<div id="tab1" class="tab-content active">
    Contenido del tab 1
</div>
<div id="tab2" class="tab-content">
    Contenido del tab 2
</div>
<div id="tab3" class="tab-content">
    Contenido del tab 3
</div>

<script>
Gabufront.Tabs.init();
</script>
```

### Collapsible (Acordeón)

```html
<ul class="collapsible">
    <li>
        <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>
            Primer Item
        </div>
        <div class="collapsible-body">
            <span>Contenido del primer item.</span>
        </div>
    </li>
    <li>
        <div class="collapsible-header">
            <i class="material-icons">place</i>
            Segundo Item
        </div>
        <div class="collapsible-body">
            <span>Contenido del segundo item.</span>
        </div>
    </li>
</ul>

<script>
Gabufront.Collapsible.init();
</script>
```

### Dropdown

```html
<button class="btn dropdown-button" data-target="dropdown1">
    Dropdown
    <i class="material-icons right">arrow_drop_down</i>
</button>

<ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">Opción 1</a></li>
    <li><a href="#!">Opción 2</a></li>
    <li class="divider"></li>
    <li><a href="#!">Opción 3</a></li>
</ul>

<script>
Gabufront.Dropdown.init();
</script>
```

### Preloader (Spinner)

```html
<div class="preloader-wrapper active">
    <div class="spinner-layer">
        <div class="circle-clipper left">
            <div class="circle"></div>
        </div>
        <div class="gap-patch">
            <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
            <div class="circle"></div>
        </div>
    </div>
</div>
```

### Chips (Tags)

```html
<div class="chip">
    Tag
    <i class="material-icons">close</i>
</div>

<div class="chip">
    <img src="avatar.jpg" alt="Avatar">
    Usuario
    <i class="material-icons">close</i>
</div>
```

### Tooltips

```html
<button class="btn" data-tooltip="Texto del tooltip">
    Hover me
</button>

<script>
Gabufront.Tooltip.init();
</script>
```

## Sistema de Diseño

### Paleta de Colores

```stylus
primary-color   = #AD002B    // Rojo profundo
secondary-color = #999999    // Gris medio
dark-color      = #666666    // Gris oscuro
light-color     = #FFFFFF    // Blanco
card-bg-color   = #FBFBFB    // Blanco hueso
```

### Clases de Color

```html
<p class="primary-color-text">Texto color primario</p>
<p class="lightblue-text">Texto azul claro</p>
<p class="blue-text">Texto azul</p>
```

### Tipografía

- **Familia:** Catamaran (Google Fonts)
- **Pesos disponibles:** 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)

```html
<h1>Heading 1 - 2.7rem</h1>
<h2>Heading 2 - 2rem</h2>
<h3>Heading 3 - 1.2rem</h3>
```

### Breakpoints

```stylus
mobile:  < 600px
tablet:  600px - 900px
desktop: > 900px
```

## Scripts de NPM

```bash
# Desarrollo con watch mode
npm run dev

# Build estándar
npm run build

# Build de producción (minificado)
npm run build:prod

# Solo watch
npm run watch
```

## Personalización

### Modificar Variables

Edita `css/components/variables.styl`:

```stylus
// Colores personalizados
primary-color = #AD002B
secondary-color = #999999

// Tipografía
font-family = 'Catamaran', sans-serif
```

### Importar Componentes Específicos

Modifica `css/style.styl` para incluir solo los componentes que necesitas:

```stylus
@import 'nib'
@import 'components/variables'
@import 'components/global'
@import 'components/buttons'
@import 'components/grid'
// ... solo los componentes que uses
```

## Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Opera (últimas 2 versiones)

## Estructura del Proyecto

```
gabufront/
├── css/
│   ├── style.styl              # Archivo principal
│   ├── style.css               # CSS compilado
│   └── components/             # Componentes modulares
│       ├── variables.styl
│       ├── global.styl
│       ├── buttons.styl
│       ├── form.styl
│       ├── cards.styl
│       ├── grid.styl
│       └── ...
├── js/
│   └── gabufront.js            # JavaScript del framework
├── dist/                       # CSS/JS compilado
├── index.html                  # Página demo
├── package.json
└── README.md
```

## Roadmap

### v0.2.0 (Actual)
- ✅ Package.json con npm scripts
- ✅ Documentación mejorada
- 🔄 JavaScript para componentes interactivos
- 🔄 Build system multiplataforma

### v0.3.0
- [ ] Página de documentación con ejemplos
- [ ] Componentes adicionales (alerts, badges, pagination)
- [ ] Sistema de testing
- [ ] Changelog

### v1.0.0
- [ ] Documentación completa
- [ ] CDN distribution
- [ ] Wrappers para React/Vue
- [ ] CLI tool
- [ ] Production ready

## Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

MIT License - ve [LICENSE](LICENSE) para más detalles.

## Autor

**Michael Gabu**

## Agradecimientos

- Inspirado en Materialize CSS y Bootstrap
- Iconos de Material Design
- Tipografía Catamaran de Google Fonts

---

⭐ Si te gusta Gabufront, considera darle una estrella en GitHub!
