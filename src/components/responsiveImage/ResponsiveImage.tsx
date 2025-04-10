import { SiteImg, SiteImgSource } from '@/models';
import { BREAKPOINT_DESKTOP } from '@/config';
import { getFileExtension } from '@/utils';

import styles from './ResponsiveImage.module.css';

export const ResponsiveImage = ({ img }: { img: SiteImg }) => {
  const getSources = (src: SiteImgSource) => {
    if (typeof src === 'string') {
      //* FIXME: Remove console message
      console.log('NC>>', 'SOURCE IS STRING', src);
      const ext = getFileExtension(src);
      const type = ext === 'jpg' ? 'jpeg' : ext;

      return (
        <source
          srcSet={src}
          type={`image/${type}`}
        />
      );
    }

    console.log('NC>>', 'SOURCE IS OBJECT', { src });

    const ext = getFileExtension(src.sm);
    const type = ext === 'jpg' ? 'jpeg' : ext;

    return (
      <>
        <source
          srcSet={src.lg}
          media={`(min-width: ${BREAKPOINT_DESKTOP}px)`}
          type={`image/${type}`}
        />
        <source
          srcSet={src.sm}
          type={`image/${type}`}
        />
      </>
    );
  };
  return (
    <picture>
      {img.avif && getSources(img.avif)}

      {getSources(img.src)}

      <img
        className={styles.image}
        src={typeof img.src === 'string' ? img.src : img.src.sm}
        alt={img.alt}
      />
    </picture>
  );
};
