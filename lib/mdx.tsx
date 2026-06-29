import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeHighlight],
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} options={{ mdxOptions }} />;
}
