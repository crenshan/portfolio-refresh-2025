export type SiteImgSource = string | { sm: string; lg: string };

/**
 * Represents an image configuration for the site with support for multiple formats and responsive sizes
 * @interface
 */
export interface SiteImg {
  /**
   * The source path(s) for JPG or PNG image(s)
   * @type {string | {sm: string, lg: string}}
   * @property {string} [sm] - Path to small version of the image
   * @property {string} [lg] - Path to large (2x) version of the image
   */
  src: SiteImgSource;

  /**
   * The source path(s) for AVIF format image(s)
   * @type {string | {sm: string, lg: string}}
   * @property {string} [sm] - Path to small version of the AVIF image
   * @property {string} [lg] - Path to large (2x) version of the AVIF image
   * @optional
   */
  avif?: SiteImgSource;

  /**
   * Alternative text description of the image for accessibility
   * @type {string}
   */
  alt: string;
}
