import { registerApplication, start } from 'single-spa';
import './index.css';
registerApplication(
  'weather',
   () => System.import('http://localhost:8500/sample-sample.js'),
  () => location.pathname === "/weather" || location.pathname === "/" ? true : false
);

start();