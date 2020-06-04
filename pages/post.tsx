import { withRouter } from "next/router";
type PostProps = {
  router?: any;
};

const Post: React.FunctionComponent<PostProps> = ({ router }) => {
  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
};
export default withRouter(Post);
