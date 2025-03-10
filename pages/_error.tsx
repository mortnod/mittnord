import { NextPageContext } from 'next';

type Props = {
  statusCode?: number;
};

function Error({ statusCode }: Props) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, namespacesRequired: ['common'] };
};

export default Error;
