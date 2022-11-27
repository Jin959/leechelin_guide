import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import StyledQuestion, {
  FormContainer,
  BtnContainer,
  Asking,
  TagBtn,
} from "./style/StyledQuestion";

const Question = () => {
  const [questionState, setQuestionState] = useState("initial");
  const navigate = useNavigate();
  const ideaInput = useRef();
  const userLocation = useRef('');
  const questions = {
    initial: "먹고 싶은 게 있나요?",
    haveIdea: "무슨 메뉴인가요??",
    noIdea: "괜찮다고 생각되는 걸 골라주세요!",
  };
  const tagList = [
    "일식",
    "중식",
    "양식",
    "한식",
    "백반",
    "분식",
    "태국",
    "패스트푸드",
    "불맛",
    "단짠",
    "매콤",
    "커피",
    "차",
    "담백한",
    "고소한",
    "술자리",
  ];
  const [taggedList, setTaggedList] = useState([]);
  const onClickIdeaBtn = () => {
    setQuestionState("haveIdea");
    setTimeout(() => ideaInput.current.focus(), 1000);
  };
  const onClickNoIdeaBtn = () => {
    setQuestionState("noIdea");
  };
  const getLocation = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    userLocation.current += `lat=${lat}&lon=${lon}`
  }
  const onErrorLocation = () => {
    window.alert('브라우저 위치 접근 권한을 켜주세요');
  }
  const onIdeaInputSubmit = (e) => {
    e.preventDefault();
    const inputValue = ideaInput.current.value;
    navigate(`/result?${userLocation.current}&query=${inputValue}%20맛집`);
  };
  const onNoIdeaSubmitClick = () => {
    const tags = taggedList.join(" ");
    navigate(`/result?${userLocation.current}&query=${tags}%20맛집`);
  };

  const onTagBtnClick = (e) => {
    const tag = e.target.innerText;
    if (taggedList.includes(tag)) {
      const tmpList = taggedList.filter((ele) => {
        if (ele === tag) return false;
        else return true;
      });
      setTaggedList(tmpList);
    } else {
      const tmpList = [...taggedList, tag];
      setTaggedList(tmpList);
    }
    console.log(taggedList);
  };

  useEffect(() => {  
    navigator.geolocation.getCurrentPosition(getLocation, onErrorLocation);
  }, [])
  

  return (
    <StyledQuestion>
      <Asking>{questions[questionState]}</Asking>
      {questionState === "initial" && (
        <BtnContainer>
          <button type="button" onClick={onClickIdeaBtn}>
            네 있어요!
          </button>
          <button type="button" onClick={onClickNoIdeaBtn}>
            모르겠어요...
          </button>
        </BtnContainer>
      )}
      {questionState === "haveIdea" && (
        <FormContainer>
          <form action="submit" onSubmit={onIdeaInputSubmit}>
            <input
              type="text"
              placeholder="입력 후 Enter를 눌러주세요."
              ref={ideaInput}
            />
          </form>
        </FormContainer>
      )}
      {questionState === "noIdea" && (
        <BtnContainer>
          {tagList.map((ele, idx) => {
            return (
              <TagBtn
                key={idx}
                onClick={onTagBtnClick}
                tagged={taggedList.includes(ele)}
              >
                {ele}
              </TagBtn>
            );
          })}
        </BtnContainer>
      )}
      <BtnContainer>
        {questionState === "noIdea" && (
          <button type="button" onClick={onNoIdeaSubmitClick}>다 골랐어요!</button>
        )}
        <Link to="/">처음부터 다시 할래요!</Link>
      </BtnContainer>
    </StyledQuestion>
  );
};

export default Question;
