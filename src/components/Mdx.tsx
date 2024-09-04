import { MDXContent } from "@content-collections/mdx/react";

export function Mdx({ code }: { code: string }) {
  return (
    <div>
      <MDXContent code="test" />
    </div>
  );
}
