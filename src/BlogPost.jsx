import { PostBtn } from "./style/StyledBlogPost";

const BlogPost = ({link, title, description, animationTime}) => {
  const onClickPostBtn = () => window.open(link, '_blank');
  return (
    <PostBtn type='button' onClick={onClickPostBtn} animationTime={animationTime}>
      <h4>{title}</h4>
      <p>{description}</p>
    </PostBtn>
  );
};

export default BlogPost;
