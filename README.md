# kazetateLabWidgets

Web Components for kazetate.com lab projects.

## Components

### `<lab-header>`

Cross-site navigation header for lab projects. Light DOM, no build step required.

**Usage:**

```html
<script src="https://cdn.jsdelivr.net/gh/kazetate/kazetateLabWidgets@v1.0.0/lab-header.js"></script>
<lab-header current-site="kazetate.com"></lab-header>
```

**Attributes:**

| Attribute | Values | Description |
|-----------|--------|-------------|
| `current-site` | `kazetate.com` \| `minimixier` \| `hexagram` | Highlights the active site |

**Theming (CSS custom properties):**

```css
lab-header {
  --lab-header-bg: #111111;
  --lab-header-border: #2a2a2a;
  --lab-header-font: system-ui, sans-serif;
  --lab-header-color: #888888;
  --lab-header-color-hover: #ffffff;
  --lab-header-color-active: #ffffff;
  --lab-header-hover-bg: rgba(255,255,255,0.07);
  --lab-header-active-bg: rgba(255,255,255,0.1);
}
```

**Astro integration:**

```astro
<!-- src/layouts/BaseLayout.astro -->
<script src="https://cdn.jsdelivr.net/gh/kazetate/kazetateLabWidgets@v1.0.0/lab-header.js"></script>
<lab-header current-site="kazetate.com"></lab-header>
```

**React / Next.js integration:**

```tsx
// app/layout.tsx (or _app.tsx)
import 'https://cdn.jsdelivr.net/gh/kazetate/kazetateLabWidgets@v1.0.0/lab-header.js';

// TypeScript: add to a global.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lab-header': { 'current-site'?: string };
    }
  }
}
```

```tsx
// In JSX
<lab-header current-site="minimixier"></lab-header>
```

## Local development

```bash
# Serve test page
python3 -m http.server 8080
# Open http://localhost:8080/test.html
```
