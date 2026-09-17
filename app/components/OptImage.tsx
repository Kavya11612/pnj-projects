'use client';

import Image, { type ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'alt'> & {
  alt: string;
  className?: string;
};

/** Optimized image helper — AVIF/WebP, lazy by default, sized responsively. */
export default function OptImage({ alt, className, sizes, priority, ...rest }: Props) {
  return (
    <Image
      alt={alt}
      className={className}
      sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
      quality={72}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      {...rest}
    />
  );
}
