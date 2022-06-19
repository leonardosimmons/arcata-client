import { GetStaticProps, InferGetStaticPropsType } from 'next';

function HomePage({
  message,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return <h1>{message}</h1>;
}

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const message = 'Hello from Arcata 27 client';

  return {
    props: {
      message,
    },
  };
};
