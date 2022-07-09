import styled from "styled-components"

export const FooterWrapper = styled.div `
  background: var(--color-primary-grey-blue-800);
  display: flex;
  color: var(--color-neutral-white);
  place-items:center;
  justify-content: space-between;
  padding-block: var(--space-5);

  & div {    
    display:flex;
    place-items:center;
    gap: var(--space-10);
  }

  & svg path {
    fill : var(--color-neutral-white);
  }
`