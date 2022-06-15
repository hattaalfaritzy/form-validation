import Head from 'next/head';

export const AUTHOR = '';
export const SITE_NAME = 'Assignment Login';
export const DESCRIPTION = '';
export const KEYWORDS = '';
export const THEME_COLOR = '#ffffff';

// Menambahkan tag-tag &lt;meta&gt; seperti keywords, description, site name, dll pada halaman website.
//  *
// @component
// @category Components
// @subcategory Abstracts

function Meta() {
  return (
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="author" content={AUTHOR} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="description" key="meta-description" content={DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="" /> */}
    </Head>
  );
}

export default Meta;
