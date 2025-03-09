import styled from 'styled-components';

/**
 * @interface BackgroundProps
 *  @prop {string} [bgColor] - background color to be applied to the container
 *  @prop {string} [bgImage] - background image to be applied to the container
 *  @prop {string} [bgStyles] - custom background styles to be applied to the container
 */
export interface BackgroundProps {
  bgColor?: string;
  bgImage?: string;
  bgStyles?: string;
}

/**
 * Base Styled Component for wrappers with with optional background styles
 * @prop {BackgroundProps} props
 */
export const BackgroundWrapper = styled.div<BackgroundProps>`
  ${props => props.bgColor && `background-color: ${props.bgColor};`}
  ${props => props.bgImage && `background-image: url(${props.bgImage});`}

  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: contain;

  /* Additional background overides */
  ${props => props.bgStyles}
`;

export default BackgroundWrapper;
