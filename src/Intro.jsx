import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import StyledIntro, {
  Title,
  ImgContainer,
  ImgWrapper,
  Expalins,
  BtnContainer,
} from "./style/StyledIntro";

const Intro = () => {
  const [URLs, setURLs] = useState([]);
  const API_KEY = process.env.REACT_APP_PUBLIC_FOOD_IMG_API_KEY;
  const imageRaw = 1198;
  const rndmPage = Math.floor(Math.random() * Math.floor(imageRaw / 10));
  const URL_PUBLIC_KR = `https://api.odcloud.kr/api/15097008/v1/uddi:1e5a6f2e-3f79-49bd-819b-d17541e6df78?page=${rndmPage}&perPage=10&serviceKey=${API_KEY}`;
  const URL_FOODISH = `https://foodish-api.herokuapp.com/api`;

  const getFoodImgAPI = async () => {
    try {
      const response = await axios({
        method: "get",
        url: URL_PUBLIC_KR,
      });
      const data = response.data.data;
      setURLs(data.map((ele) => ele["음식이미지(URL)"]));
    } catch (error) {
      await getBackupImgAPI();
      console.log(error);
    }
  };

  const getFoodishAPI = async () => {
    return await axios({
      method: "get",
      url: URL_FOODISH,
    });
  };

  const getBackupImgAPI = async () => {
    try {
      const responses = await Promise.all([
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
        getFoodishAPI(),
      ]);
      setURLs(responses.map((ele) => ele.data.image));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoodImgAPI();
  }, []);

  return (
    <StyledIntro>
      <Title>리든 램지의 리슐랭 가이드</Title>
      <Expalins>
        뭐 드실지 모르겠다?!? <br />
        리든 램지가 추천해드립니다.
      </Expalins>
      <ImgContainer>
        {URLs.map((ele, idx) => {
          return (
            <ImgWrapper key={idx} animationTime={idx + 1}>
              <img src={ele} alt="" />
            </ImgWrapper>
          );
        })}
      </ImgContainer>
      <BtnContainer>
        <Link to="/question">Click</Link>
      </BtnContainer>
    </StyledIntro>
  );
};

export default Intro;
