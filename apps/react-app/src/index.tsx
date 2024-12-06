import './index.css';
import { InfoPageComponent, STMLApp } from './wc/components';
export { STMLPage } from './wc/components';

const define = (name: string, comp: CustomElementConstructor) => {
  if (!window.customElements.get(name)) {
    customElements.define(name, comp);
  }
};

const entryPoint = () => {
  define('stml-app', STMLApp);
  define('stml-info-page', InfoPageComponent);
}

entryPoint();