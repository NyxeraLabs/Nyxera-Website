import type { Metadata } from 'next';

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Nyxera Labs`,
      description,
      url: `https://nyxera.cloud${path}`,
      images: ['/og-image.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Nyxera Labs`,
      description,
      images: ['/og-image.svg'],
    },
  };
}
