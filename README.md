# Super Lotto - Aplicación de Lotería 🎰

Una interfaz moderna y elegante para una plataforma de lotería en línea, construida con Astro, React y Tailwind CSS v4.

## ✨ Características

- 🌙 **Modo Oscuro** - Configurado por defecto con soporte completo de Tailwind CSS v4
- 🎨 **Diseño Moderno** - UI elegante con gradientes y efectos de glassmorphism
- ⚛️ **Componentes React** - Arquitectura modular y reutilizable
- 🚀 **Astro Framework** - Rendimiento optimizado con Islands Architecture
- 💬 **Chat en Vivo** - Sistema de mensajería en tiempo real
- 🏆 **Tabla de Líderes** - Ranking de los mejores jugadores
- 📊 **Feed en Vivo** - Actualizaciones de compras de tickets en tiempo real
- 📱 **Responsive** - Diseño adaptable a diferentes dispositivos

## 🛠️ Tecnologías Utilizadas

- **Astro 5.17.1** - Framework de desarrollo web
- **React 19.2.4** - Biblioteca de componentes UI
- **Tailwind CSS 4.1.18** - Framework de utilidades CSS
- **Motion 12.31.0** - Librería de animaciones

## 📁 Estructura de Componentes

```
src/
├── components/
│   └── react/
│       ├── Sidebar.jsx           # Barra lateral de navegación
│       ├── Header.jsx            # Encabezado con usuario y balance
│       ├── Chat.jsx              # Chat en vivo
│       ├── FeaturedCard.jsx      # Tarjetas destacadas principales
│       ├── InfoCard.jsx          # Tarjetas de información
│       ├── ResultNumbers.jsx     # Resultados del día
│       ├── TopLeaders.jsx        # Tabla de líderes
│       ├── LiveFeed.jsx          # Feed de actividad
│       └── LiveFeedItem.jsx      # Ítem individual del feed
├── layouts/
│   ├── Layout.astro              # Layout principal
│   └── BaseHead.astro            # Metadatos del head
├── pages/
│   └── index.astro               # Página principal
└── css/
    └── global.css                # Estilos globales y scrollbar
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js 18 o superior
- npm o bun

### Pasos de Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

3. **Abrir en el navegador**
```
http://localhost:4321
```

### Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el proyecto para producción en `./dist/` |
| `npm run preview` | Previsualiza la build de producción localmente |

## 🌙 Modo Oscuro

El modo oscuro está configurado por defecto en toda la aplicación. La configuración utiliza:

- **Clase `.dark`** en el elemento HTML principal
- **@custom-variant** de Tailwind CSS v4 para variantes oscuras
- **Gradientes personalizados** para un look premium
- **Efectos glassmorphism** con backdrop-blur

### Personalización del Tema

Puedes personalizar los colores en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      },
    },
  },
}
```

## 🎨 Componentes Principales

### Sidebar
Barra lateral con navegación y enlaces a redes sociales.

### Header
Encabezado con logo, navegación, información del usuario y balance.

### Chat
Sistema de chat en vivo con lista de mensajes y campo de entrada.

### Featured Cards
Tarjetas destacadas para:
- Sorteo diario de números
- Ganadores de la semana
- Cómo funciona la lotería

### Top Leaders
Tabla de clasificación con los 6 mejores jugadores, mostrando avatares, nombres y premios.

### Live Feed
Feed de actividad en tiempo real mostrando las últimas compras de tickets.

## 🎯 Características de la Interfaz

1. **Animaciones Suaves** - Transiciones y hover effects en todos los componentes
2. **Scrollbar Personalizado** - Diseño consistente con el tema oscuro
3. **Gradientes Vibrantes** - Uso de gradientes lineales para destacar secciones
4. **Glassmorphism** - Efectos de vidrio esmerilado con backdrop-blur
5. **Iconografía SVG** - Iconos vectoriales para mejor rendimiento

## 📝 Notas de Desarrollo

- Los componentes React utilizan la directiva `client:load` de Astro para carga inmediata
- Las imágenes de avatares usan el servicio pravatar.cc (considera usar imágenes propias en producción)
- Los gradientes están definidos inline en los SVG para máxima personalización
- Tailwind CSS v4 usa la sintaxis `bg-linear-to-br` en lugar de `bg-gradient-to-br`

## � Solución de Problemas

### Error: ENOSPC (System limit for number of file watchers reached)

Si encuentras este error en Linux al ejecutar `npm run dev`:

```bash
Error: ENOSPC: System limit for number of file watchers reached
```

**Solución:**

```bash
# Aumentar el límite de file watchers permanentemente
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**Solución temporal (hasta el próximo reinicio):**

```bash
sudo sysctl fs.inotify.max_user_watches=524288
```

**Verificar el valor actual:**

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

## �🔧 Próximas Mejoras

- [ ] Integración con API real de backend
- [ ] Autenticación de usuarios
- [ ] Sistema de compra de tickets funcional
- [ ] Animaciones más avanzadas con Framer Motion
- [ ] Modo claro alternativo
- [ ] Internacionalización (i18n)
- [ ] Tests unitarios y de integración

## 👀 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS v4](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Creado con ❤️ usando Astro, React y Tailwind CSS
