import { getMdxComponent } from '@/lib/compiled/registry';

// Post bodies are precompiled at build time (scripts/compile-mdx.mjs) into
// static React components, avoiding new Function() which is forbidden on
// Cloudflare Workers.
export function CompiledMDX({ slug }: { slug: string }) {
  const Component = getMdxComponent(slug);
  if (!Component) {
    return <div>Post content not found.</div>;
  }
  return <Component />;
}
