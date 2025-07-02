import { copyFileSync, existsSync } from 'fs';

if (existsSync('dist/index.html')) {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('404.html copied.');
} else {
  console.error('dist/index.html does not exist. Build the project first.');
}