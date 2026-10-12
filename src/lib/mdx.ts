import { paginateItems, PaginationResult } from '@/lib/pagination';
import { generatedPosts } from '@/lib/generated-posts';

export const DEFAULT_BLOG_LIST_LIMIT = 6;

export type Frontmatter<T = {}> = {
  title: string;
  date: string;
  description: string;
} & T;

export type MDXData<T = {}> = {
  metadata: Frontmatter<T>;
  slug: string;
  content?: React.ReactNode;
  rawContent: string;
};

export type BlogPost = MDXData<{
  thumbnail?: string;
  tags?: string[];
}>;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Posts are pre-generated at build time (scripts/build-content.mjs)
  // to avoid filesystem reads on Cloudflare Workers.
  return generatedPosts as BlogPost[];
}

export async function getBlogPosts(
  page = 1,
  pageSize = DEFAULT_BLOG_LIST_LIMIT
): Promise<PaginationResult<BlogPost>> {
  const posts = await getAllBlogPosts();
  return paginateItems(posts, page, pageSize);
}

export async function getBlogPostsByTagSlug(
  tagSlug: string
): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.metadata.tags?.includes(tagSlug));
}

export async function getBlogPostBySlug(slug: string) {
  return getBlogPost((post) => post.slug === slug);
}

async function getBlogPost(
  predicate: (post: BlogPost) => boolean
): Promise<BlogPost | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find(predicate);
}
