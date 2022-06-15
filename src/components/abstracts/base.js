/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Meta from './meta';
import Scripts from './scripts';
import Title from './title';

// Memuat [&lt;Meta&gt;]{@link Meta}, [&lt;Title&gt;]{@link Title}, [&lt;Scripts&gt;]{@link Scripts},
// dan link ke Google Font.

// @component
// @category Components
// @subcategory Abstracts

function Base() {
  return (
    <>
      <Meta/>
      <Title/>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suneditor@latest/dist/css/suneditor.min.css" />
      </Head>
      <Scripts/>
    </>
  );
}

export default Base;
