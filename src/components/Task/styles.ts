import styled from "styled-components";

export const Container = styled.div`
  display: block;
  
  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: column;
    padding: 0.4rem;
  }

  li {
    width: calc(100% - 2rem);
    max-width: 300px;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.50) 0px 3px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    &.back {
      background: red;
    }
    &.next {
      background: green;
    }
    &:disabled {
      opacity: 0.2;
    }
  }
`;