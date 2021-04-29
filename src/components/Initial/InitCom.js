import styled from "styled-components";

const InitContainer = styled.div`
  background-color: ${props => props.color};
  padding: 20px 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InitCardtitle = styled.h3`
  font-size: 1.3rem;
`;

const InitInfoContainer = styled.div`
  margin: 50px 0px;
`;

const InitInfoHead = styled.h5`
  font-size: 1rem;
  font-family: sans-serif;
`;

const InitInfo = styled.p`
  color: #ffffffc4;
  margin-top: 5px;
`;

const InitCardTextContainer = styled.div``;

const InitInfoText = styled(InitInfo)`
  font-style: italic;
`;

export {
  InitContainer,
  InitCardtitle,
  InitInfoContainer,
  InitInfoHead,
  InitInfo,
  InitCardTextContainer,
  InitInfoText,
};
