import { css } from "styled-components";

const sizes = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  phone: 425
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
