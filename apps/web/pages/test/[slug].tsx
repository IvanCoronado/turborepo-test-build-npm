import { ParsedUrlQuery } from "querystring";

import { GetStaticPaths, GetStaticProps } from "next";
import { Button } from "ui";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  const demo = `Hello ${slug}`;
  console.log(demo);

  return {
    props: {
      demo,
    },
    revalidate: 20,
  };
};

export default function Web(props: any) {
  console.log(props);
  return (
    <div>
      <h1>Web {props.demo}</h1>
      <Button />
    </div>
  );
}
