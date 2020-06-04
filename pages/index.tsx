import React from "react";

const Index = () => {
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
    </div>
  );
};

Index.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: "Donkey",
      page: "Home",
      description: "Your friendly donkey app!",
    },
  };
};

export default Index;
