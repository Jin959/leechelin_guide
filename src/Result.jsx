import { Link } from "react-router-dom";

import Map from "./Map";
import StyledResult, { BtnContainer, Title } from "./style/StyledResult";

const Result = () => {
  return (
    <StyledResult>
      <Title>Result</Title>
      <Map/>
      <BtnContainer>
        <Link to="/">처음부터 다시 할래요!</Link>
      </BtnContainer>
    </StyledResult>
  );
};

export default Result;
