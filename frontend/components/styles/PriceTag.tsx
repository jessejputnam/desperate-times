import styled, { StyledComponent } from "styled-components";

const PriceTag: StyledComponent<"span", any, {}, never> = styled.span`
  background: var(--red);
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;
