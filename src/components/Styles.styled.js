import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;

  font-size: 40px;
  color: #010101;
`;

export const SectionName = styled.h2`
  display: block;
  font-size: 50px;
  font-weight: 600;
`;

export const FeedbackBtn = styled.button`
  display: block;
  width: 150px;
  padding: 5px;
  font-size: 30px;
  background-color: rgb(223, 223, 223);
  border: 1px solid grey;
  border-radius: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  scale: 1;
  transition: background-color, scale 250ms ease-in;

  &:hover {
    scale: 1.05;
    background-color: ${p =>
      p.name === 'good'
        ? 'rgb(58, 189, 35)'
        : p.name === 'neutral'
        ? 'rgb(217, 217, 38)'
        : 'rgb(248, 97, 71)'};
    color: white;
    border: 1px solid
      ${p =>
        p.name === 'good'
          ? 'rgb(58, 189, 35)'
          : p.name === 'neutral'
          ? 'rgb(217, 217, 38)'
          : 'rgb(248, 97, 71)'};
  }
`;

export const ButtonWrapper = styled.div`
  padding: 30px 0px;
  display: flex;
  gap: 20px;
`;

export const InfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatsWrapper = styled.div`
  display: flex;

  gap: 30px;
`;

export const Info = styled.p`
  font-size: 25px;
`;

export const Total = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const Percentage = styled.p`
  font-size: 30px;
  color: green;
  font-weight: 800;
`;

export const Warning = styled.p`
  font-size: 25px;
  color: grey;
`;
