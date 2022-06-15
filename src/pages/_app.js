import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Base from '../components/abstracts/base';
import Core from '../components/wrappers/_core';
import { publicRuntimeConfig } from '../config/env';
import '../styles/index.scss';
import { getDecodedJWT, httpAuthCheck } from '../utils/auth';
import { disableBrowserConsoleLog } from '../utils/console';

const { NEXT_PUBLIC_ENABLE_CONSOLE_LOG } = publicRuntimeConfig;

if (typeof window !== 'undefined') {
  console.info('%cApp v20211210.1122', 'color: cornflowerblue');
  if (NEXT_PUBLIC_ENABLE_CONSOLE_LOG === 'false') disableBrowserConsoleLog();
}

export default class MyApp extends App {
  static async getInitialProps(context) {
    const initialProps = await App.getInitialProps(context);
    const auth = getDecodedJWT(typeof window === 'undefined' && context.ctx.req);
    if (process.env.PASSWORD && context.ctx.query.noLayout !== '') {
      await httpAuthCheck(context.ctx.req, context.ctx.res);
    }
    return { ...initialProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;
    const getLayout = Component.getLayout || ((page) => page);

    return (
      <Core auth={auth}>
        <Base />
        <NextNProgress color="#CA2629" stopDelayMs={200} />
        {getLayout(<Component auth={auth} {...pageProps} />)}
      </Core>
    );
  }
}
