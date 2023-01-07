import styled from "styled-components";

import SlickSlider from "react-slick";

export const Slider = styled(SlickSlider)`
  height: ${({ height }) => height || '100%'};
  
  .slick-next {
    right: 8px !important;
    z-index: 1;
  }

  .slick-prev {
    left: 8px !important;
    z-index: 1;
  }
`;
