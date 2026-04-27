/**
 * <lab-header> Web Component
 * Light DOM implementation for kazetate.com lab navigation.
 *
 * Usage:
 *   <script src="https://cdn.jsdelivr.net/gh/kazetate/kazetateLabWidgets@v1.0.0/lab-header.js"></script>
 *   <lab-header current-site="kazetate.com"></lab-header>
 *
 * Attributes:
 *   current-site: "kazetate.com" | "minimixier" | "hexagram"
 */

const LAB_SITES = [
  { id: 'kazetate.com', label: 'kazetate.com', url: 'https://kazetate.com/lab/' },
  { id: 'minimixier', label: 'minimixier', url: 'https://minimixier.lab.kazetate.com' },
  { id: 'hexagram', label: 'hexagram', url: 'https://hexagram.lab.kazetate.com' },
];

const STYLES = `
  lab-header {
    display: block;
  }
  .lab-header {
    background-color: var(--lab-header-bg, #111111);
    border-bottom: 1px solid var(--lab-header-border, #2a2a2a);
    padding: 0 1.5rem;
    font-family: var(--lab-header-font, system-ui, -apple-system, sans-serif);
  }
  .lab-header__nav {
    display: flex;
    align-items: center;
    height: 2.75rem;
    gap: 0.25rem;
  }
  .lab-header__item {
    color: var(--lab-header-color, #888888);
    text-decoration: none;
    font-size: 0.8125rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    transition: color 0.15s ease, background-color 0.15s ease;
    letter-spacing: 0.01em;
  }
  .lab-header__item:hover {
    color: var(--lab-header-color-hover, #ffffff);
    background-color: var(--lab-header-hover-bg, rgba(255,255,255,0.07));
  }
  .lab-header__item--active {
    color: var(--lab-header-color-active, #ffffff);
    background-color: var(--lab-header-active-bg, rgba(255,255,255,0.1));
  }
`;

let stylesInjected = false;

function injectStyles() {
  if (stylesInjected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-lab-header', '');
  style.textContent = STYLES;
  document.head.appendChild(style);
  stylesInjected = true;
}

class LabHeader extends HTMLElement {
  static get observedAttributes() {
    return ['current-site'];
  }

  connectedCallback() {
    injectStyles();
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() {
    const currentSite = this.getAttribute('current-site') || '';
    const items = LAB_SITES.map(site => {
      const isActive = currentSite === site.id;
      const cls = `lab-header__item${isActive ? ' lab-header__item--active' : ''}`;
      return `<a href="${site.url}" class="${cls}"${isActive ? ' aria-current="page"' : ''}>${site.label}</a>`;
    }).join('');

    this.innerHTML = `
      <header class="lab-header">
        <nav class="lab-header__nav" aria-label="Lab navigation">
          ${items}
        </nav>
      </header>
    `;
  }
}

if (!customElements.get('lab-header')) {
  customElements.define('lab-header', LabHeader);
}
