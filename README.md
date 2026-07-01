# Portfolio — Adrian Ferreiro

Portfolio personal de **Flutter Developer & Full Stack**, construido con React + TypeScript + Vite y desplegado automáticamente en Hostinger vía GitHub Actions.

🌐 **[appedir.net/portfolio](https://www.appedir.net/portfolio)**

---

## Secciones

| Sección                 | Descripción                                                    |
| ----------------------- | -------------------------------------------------------------- |
| **Hero**                | Presentación con énfasis en desarrollo Flutter / iOS & Android |
| **Experiencia**         | Timeline laboral con logros, tecnologías y roles actuales      |
| **Proyectos Flutter**   | Grid de apps publicadas con galería de capturas por proyecto   |
| **También trabajo con** | Laravel, React/TS, Node.js, MySQL                              |
| **Contacto**            | Email, WhatsApp, LinkedIn, GitHub                              |

## Stack técnico

- **React 19** + **TypeScript 6**
- **Vite 8** + **Tailwind CSS v4**
- **Intersection Observer API** para animaciones de scroll
- Arquitectura **Feature-Slice**
- Sin dependencias de UI — todo construido desde cero

## Estructura

```
src/
├── data/
│   └── projects.ts              # Proyectos y capturas — editar acá para agregar contenido
├── types/
│   └── index.ts                 # Project, Screenshot, ProjectsService
├── services/projects/
│   └── index.ts                 # StaticProjectsService (lee src/data/projects.ts)
├── features/
│   ├── projects/
│   │   ├── hooks/               # useProjects, useProjectScreenshots
│   │   └── components/          # ProjectCard, ProjectGrid, ScreenshotGallery
│   ├── experience/
│   │   └── components/          # Experience (timeline + formación)
│   ├── other-tech/
│   │   └── components/          # OtherTech (Laravel, React, Node, SQL)
│   └── contact/
│       └── components/          # Contact (email, WhatsApp, LinkedIn, GitHub)
├── shared/
│   ├── components/              # Modal, Spinner, AnimateIn
│   └── hooks/                   # useInView (Intersection Observer)
└── App.tsx
```

## CI/CD

```
push a develop  →  Build & Type Check  →  ✅ / ❌
push a main     →  Build & Type Check  →  Deploy FTP a Hostinger
PR a main       →  Build & Type Check  →  ✅ / ❌
```

El workflow está en `.github/workflows/ci-cd.yml`. El deploy usa `SamKirkland/FTP-Deploy-Action` y requiere estos secrets en el repo:

| Secret           | Descripción                   |
| ---------------- | ----------------------------- |
| `FTP_SERVER`     | Host FTP de Hostinger         |
| `FTP_USERNAME`   | Usuario FTP                   |
| `FTP_PASSWORD`   | Contraseña FTP                |
| `FTP_SERVER_DIR` | Ruta en el servidor (ej: `/`) |

## Agregar un proyecto

Editar `src/data/projects.ts`:

```typescript
// En PROJECTS:
{
  id: 'mi-app',
  name: 'Mi App',
  description: 'Descripción completa...',
  tech: ['Flutter', 'Laravel', 'MySQL'],
  category: 'HealthTech · iOS & Android',
  year: 2025,
  thumbnail: 'https://url-de-la-imagen.com/thumb.jpg',
}

// En SCREENSHOTS:
'mi-app': [
  { id: 'ma-1', url: 'https://...', caption: 'Pantalla principal' },
]
```

Push a `main` y el CI/CD despliega automáticamente.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera dist/
npx tsc --noEmit  # type check
```
