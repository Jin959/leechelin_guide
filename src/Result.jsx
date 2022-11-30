import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import BlogPost from "./BlogPost";
import {
  StyledResult,
  ResContatiner,
  BtnContainer,
  Title,
} from "./style/StyledResult";

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const query = searchParams.get("query");
  const [region, setRegion] = useState("");
  const [dataList, setDataList] = useState([]);
  const [backUpList, setBackUpList] = useState([]);
  const ID_KEY = process.env.REACT_APP_NAVER_SEARCH_ID;
  const SECRET_KEY = process.env.REACT_APP_NAVER_SEARCH_SECRET;
  const { kakao } = window;

  const getAdressFromGeo = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lon);

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const city = result[0].address.region_2depth_name;
        const town = result[0].address.region_3depth_name;
        const regionArray = `${city} "${town}"`.split(" ");
        setRegion(`${city} ${town}`)
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const getSearchAPIResult = async () => {
    try {
      const response = await axios.get("/v1/search/blog.json", {
        headers: {
          "X-Naver-Client-Id": ID_KEY,
          "X-Naver-Client-Secret": SECRET_KEY,
        },
        params: {
          query: `${region} ${query} "맛집" -매물`,
          display: 12,
          start: 1,
          sort: "sim",
        },
      });
      setDataList(response.data.items);
    } catch (error) {
      window.alert("Search Error!");
      console.log(error);
    }
  };

  const onClickRndm = () => {
    const rndm = Math.floor(Math.random() * 12);
    if (dataList.length !== 1) {
      setBackUpList(dataList);
      setDataList([dataList[rndm]]);
    } else {
      setDataList([backUpList[rndm]]);
    }
  };

  useEffect(() => {
    getAdressFromGeo();
  }, []);
  useEffect(() => {
    console.log(region);
    console.log(`${region} ${query} "맛집"`)
    getSearchAPIResult();
  }, [region]);

  return (
    <StyledResult>
      <Title>{query}</Title>
      <ResContatiner>
        {dataList.map((ele, idx) => {
          const title = ele.title.replace(/<[^>]*>?/g, "");
          const description = ele.description.replace(/<[^>]*>?/g, "");
          return (
            <BlogPost
              key={idx}
              animationTime={idx}
              link={ele.link}
              title={title}
              description={description}
            />
          );
        })}
      </ResContatiner>
      <BtnContainer>
        <Link to="/">처음부터 다시 할래요!</Link>
        <button type="button" onClick={onClickRndm}>
          하나 골라줘요~
        </button>
      </BtnContainer>
    </StyledResult>
  );
};

export default Result;
