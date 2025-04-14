import { SiteImg, SiteImgSource } from '@/models';
import { BREAKPOINT_DESKTOP } from '@/config';
import { getFileExtension } from '@/utils';

import styles from './ResponsiveImage.module.css';

export const ResponsiveImage = ({ img }: { img: SiteImg }) => {
  const getImgType = (filename: string) => {
    const ext = getFileExtension(filename);
    return ext === 'jpg' ? 'jpeg' : ext;
  };

  const getSources = (src: SiteImgSource) => {
    if (typeof src === 'string') {
      return (
        <source
          srcSet={src}
          type={`image/${getImgType(src)}`}
        />
      );
    }

    const type = getImgType(src.sm);

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
