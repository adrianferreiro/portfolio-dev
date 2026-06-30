# Portfolio Dev

Portfolio personal de desarrollador Full Stack construido con React + TypeScript + Vite.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** con **Tailwind CSS v4**
- Arquitectura Feature-Slice

## Estructura del proyecto

```
src/
├── types/                        # Tipos globales compartidos
├── services/projects/            # Capa de acceso a datos
│   ├── mockService.ts            # Implementación mock (desarrollo)
│   ├── realService.ts            # Implementación real (producción)
│   └── index.ts                  # Selección según variable de entorno
├── features/projects/
│   ├── hooks/                    # useProjects, useProjectScreenshots
│   └── components/               # ProjectCard, ProjectGrid, ScreenshotGallery
├── shared/components/            # Modal, Spinner
└── App.tsx
```

## Variables de entorno

| Variable | Descripción | Default |
|---|---|---|
| `VITE_USE_MOCK_API` | Usar datos mock (`true`) o API real (`false`) | `true` |
| `VITE_API_BASE_URL` | URL base de la API real | — |

## API esperada

Cuando `VITE_USE_MOCK_API=false`, el servicio real consume:

```
GET  /projects                    → Project[]
GET  /projects/:id/screenshots    → Screenshot[]
```

### Tipos

```typescript
interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  category: string
  year: number
}

interface Screenshot {
  id: string
  url: string
  caption?: string
}
```

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
