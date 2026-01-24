#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import beautify from 'js-beautify';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../../html/thalirmanam_prod');

function formatHtmlFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      formatHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      console.log(`Formatting: ${filePath}`);
      const html = fs.readFileSync(filePath, 'utf8');
      const formatted = beautify.html(html, {
        indent_size: 2,
        indent_inner_html: true,
        unformatted: ['pre', 'code', 'textarea', 'script'],
        preserve_newlines: true,
        max_preserve_newlines: 2,
        wrap_line_length: 0,
        end_with_newline: true,
      });
      fs.writeFileSync(filePath, formatted);
    }
  });
}

console.log('Formatting HTML files...');
formatHtmlFiles(distDir);
console.log('Done!');
