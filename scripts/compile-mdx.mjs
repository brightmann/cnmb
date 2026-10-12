// Precompiles src/content/blog/*.mdx to static React components at build time.
// Replaces @mdx-js/mdx evaluate() (which uses new Function(), forbidden on
// Cloudflare Workers) with plain importable modules.
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const matter = require('gray-matter');

const root = new URL('../', import.meta.url).pathname;
const contentDir = join(root, 'src', 'content', 'blog');
const outDir = join(root, 'src', 'lib', 'compiled');

const files = (await readdir(contentDir)).filter((f) => f.endsWith('.mdx'));
await mkdir(outDir, { recursive: true });

const entries = [];
for (const file of files) {
  const slug = file.replace(/\.mdx$/, '');
  const raw = await readFile(join(contentDir, file), 'utf8');
  const { content: body } = matter(raw);
  const { value } = await compile(body, {
    outputFormat: 'program',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: { dark: 'github-dark', light: 'github-light-default' } }],
    ],
  });
  const outName = `${slug}.jsx`;
  await writeFile(join(outDir, outName), String(value));
  const varName = `Mdx_${slug.replace(/[^a-zA-Z0-9_$]/g, '_')}`;
  entries.push({ slug, varName, outName });
  console.log(`compiled ${file} -> src/lib/compiled/${outName}`);
}

const registry =
  `import * as React from 'react';\n` +
  entries.map(({ varName, outName }) => `import ${varName} from './${outName}';`).join('\n') +
  `\n\nconst registry: Record<string, React.ComponentType> = {\n` +
  entries.map(({ slug, varName }) => `  ${JSON.stringify(slug)}: ${varName},`).join('\n') +
  `\n};\n\nexport function getMdxComponent(slug: string): React.ComponentType | null {\n  return registry[slug] ?? null;\n}\n`;

await writeFile(join(outDir, 'registry.ts'), registry);
console.log(`Generated registry with ${entries.length} components`);
