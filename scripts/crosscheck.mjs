// Lightweight pre-ship crosscheck. Run after `npm run build`. Exits non-zero on failure.
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, FORMS, PRODUCTS, BRANDS } from '../src/config/site.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const pub = join(root, 'public');

let failures = 0;
let warnings = 0;
const fail = (msg) => { console.error(`✗ FAIL: ${msg}`); failures++; };
const warn = (msg) => { console.warn(`⚠ WARN: ${msg}`); warnings++; };
const pass = (msg) => console.log(`✓ ${msg}`);

// B1 — domain placeholder (warn only; this is a pending-domain build by design)
if (SITE.domain === 'DOMAIN.com') {
  warn('SITE.domain is still the placeholder DOMAIN.com — set the real domain before going to production.');
} else {
  pass('SITE.domain is set to a real domain');
}

// Web3Forms key pending
if (!FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')) {
  warn('FORMS.web3formsKey is still a placeholder — contact/checkout/wholesale/newsletter forms will not deliver until a real key is set.');
} else {
  pass('Web3Forms key is set');
}

// Required generated files exist and are valid JSON where applicable
const jsonFiles = [
  '.well-known/api-catalog',
  '.well-known/agent-skills/index.json',
  '.well-known/mcp/server-card.json',
  '.well-known/oauth-protected-resource',
  '.well-known/oauth-authorization-server',
  '.well-known/openid-configuration',
  '.well-known/acp.json',
  '.well-known/ucp',
];
for (const f of jsonFiles) {
  const full = join(pub, f);
  if (!existsSync(full)) { fail(`Missing generated file: public/${f} — run npm run prebuild`); continue; }
  try {
    JSON.parse(readFileSync(full, 'utf-8'));
    pass(`Valid JSON: public/${f}`);
  } catch (e) {
    fail(`Invalid JSON in public/${f}: ${e.message}`);
  }
}

for (const f of ['llms.txt', 'auth.md', 'js/webmcp.js']) {
  if (!existsSync(join(pub, f))) fail(`Missing generated file: public/${f}`);
  else pass(`Present: public/${f}`);
}
if (!existsSync(join(root, 'vercel.json'))) fail('Missing vercel.json at repo root');
else pass('vercel.json present');

// auth.md must start with "# Auth.md"
const authMdPath = join(pub, 'auth.md');
if (existsSync(authMdPath)) {
  const first = readFileSync(authMdPath, 'utf-8').split('\n')[0].trim();
  if (first !== '# Auth.md') fail(`auth.md must start with exactly "# Auth.md" (found "${first}")`);
  else pass('auth.md starts with correct heading');
}

// ucp must have "ucp":"1.0"
const ucpPath = join(pub, '.well-known/ucp');
if (existsSync(ucpPath)) {
  const ucp = JSON.parse(readFileSync(ucpPath, 'utf-8'));
  if (ucp.ucp !== '1.0') fail('.well-known/ucp missing required "ucp":"1.0" field');
  else pass('.well-known/ucp has required ucp field');
}

// Product/brand integrity
const brandIds = new Set(BRANDS.map((b) => b.id));
const orphanProducts = PRODUCTS.filter((p) => !brandIds.has(p.brand));
if (orphanProducts.length) fail(`Products reference unknown brand ids: ${orphanProducts.map((p) => p.id).join(', ')}`);
else pass('Every product references a known brand');

// docs/ never in public/
if (existsSync(join(pub, 'docs'))) fail('docs/ must never be copied into public/ — strategy leak');
else pass('docs/ is not in public/');

console.log(`\n${failures} failure(s), ${warnings} warning(s).`);
if (failures > 0) process.exit(1);
