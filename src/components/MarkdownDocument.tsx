import Link from "next/link";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

import { siteContainerClassName } from "@/lib/site-container";

type MarkdownDocumentProps = {
  content: string;
};

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-3 pl-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-muted-foreground">{children}</em>
  ),
  a: ({ href, children }) => {
    if (!href) return <span>{children}</span>;

    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className="font-medium text-askill-primary underline-offset-4 hover:underline"
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className="font-medium text-askill-primary underline-offset-4 hover:underline"
      >
        {children}
      </Link>
    );
  },
};

export function MarkdownDocument({ content }: MarkdownDocumentProps) {
  return (
    <article className={`${siteContainerClassName} py-14 sm:py-16 lg:py-20`}>
      <div className="mx-auto max-w-3xl">
        <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
