import { getMdxComponent } from '@/lib/compiled/registry';
import { mdxComponents } from '@/components/content/mdx-components';

// Post bodies are precompiled at build time (scripts/compile-mdx.mjs) into
// static React components, avoiding new Function() which is forbidden on
// Cloudflare Workers.
export function CompiledMDX({ slug }: { slug: string }) {
  const Component = getMdxComponent(slug) as React.ComponentType<{ components?: typeof mdxComponents }> | null;
  if (!Component) {
    return <div>Post content not found.</div>;
  }
  return <Component components={mdxComponents} />;
}
