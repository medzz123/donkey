import React from "react";
import Link from "next/link";
type PostLinkProps = {
  title?: string;
};
const PostLink: React.FunctionComponent<PostLinkProps> = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};
const About: React.FunctionComponent = () => {
  return (
    <div>
      <h1>This is About page ✌</h1>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </div>
  );
};
export default About;
