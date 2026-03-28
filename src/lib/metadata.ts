import type { Metadata, OpenGraph } from "next";

const siteConfig = {
  name: "BusyNotify",
  description: "AI-powered notification infrastructure. Monitor your workflows and fire intelligent alerts the moment something needs your attention.",
  url: "https://busynotify.in",
  ogImage: "https://busynotify.in/og-image.png",
  links: {
    twitter: "https://twitter.com/busynotify",
    github: "https://github.com/busynotify",
  },
  creator: "BusyNotify Team",
};

export function createMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | BusyNotify` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;

  const openGraph: OpenGraph = {
    type: "website",
    locale: "en_US",
    url: canonical || siteConfig.url,
    title: pageTitle,
    description: pageDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  };

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "notification infrastructure",
      "AI notifications",
      "workflow automation",
      "alert management",
      "Slack notifications",
      "email notifications",
      "webhook triggers",
      "business alerts",
    ],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: "@busynotify",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    ...(canonical && { alternates: { canonical } }),
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

export function createBlogMetadata({
  title,
  description,
  image,
  publishedAt,
  author,
  slug,
}: {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  author: string;
  slug: string;
}): Metadata {
  const pageImage = image || siteConfig.ogImage;
  const url = `${siteConfig.url}/blog/${slug}`;

  return {
    title,
    description,
    authors: [{ name: author }],
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: publishedAt,
      authors: [author],
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pageImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export { siteConfig };
