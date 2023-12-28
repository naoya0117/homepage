import { Helmet } from 'react-helmet-async';

type HeadProps = {
    title?: string;
    description?: string;
};

export const Head = ({title = '', description = ''}:HeadProps= {}) => {
    return (
    <Helmet
      title={title ? `${title} | Naoya's portfolio` : undefined}
      defaultTitle="大阪に住む学生のポートフォリオサイトです。"
    >
      <meta name="description" content={description} />
    </Helmet>
  );

};