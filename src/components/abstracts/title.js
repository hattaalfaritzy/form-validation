import Head from 'next/head';
import PropTypes from 'prop-types';
import { SITE_NAME } from './meta';

// Untuk menambahkan tag &lt;title&gt; dan &lt;meta property="og:title"&gt; pada halaman web.
//  *
// @component
// @category Components
// @subcategory Abstracts

function Title({ content, isFullTitle }) {
  const finalTitle = isFullTitle
    ? content
    : `${content ? `${content} · ` : ''}${SITE_NAME}`;

  return (
    <Head>
      <title key="title">{finalTitle}</title>
      <meta key="title-meta" property="og:title" content={finalTitle} />
    </Head>
  );
}

Title.propTypes = {
  // Judul halaman web 
  content: PropTypes.string,
  // Jika false (default) maka akan nama website akan ditambahkan di akhir, menjadi seperti ini: "xxx | Assignment Login 
  isFullTitle: PropTypes.bool,
};

export default Title;
