import styled  from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  width: 100%;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  border-radius: 0.5rem;
  padding-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.50) 0px 3px 8px;
  text-align: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 980px) {
    width: 33%;
  }
`;