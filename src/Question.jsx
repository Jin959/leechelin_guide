import { useNavigate } from "react-router-dom";

const Question = () => {
  const onClickYesBtn = () => {};
  const onClickNoBtn = () => {};

  return (
    <div>
      <button type="button" onClick={onClickYesBtn}>
        네 있어요!
      </button>
      <button type="button" onClick={onClickNoBtn}>
        모르겠어요.
      </button>
    </div>
  );
};

export default Question;
