import { Html, Head, Main, NextScript } from 'next/document';
import { AppContext } from "next/app";

export default function Document() {
  console.log('Document');

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/*
 * This function is not called during client-side transitions, nor when a page is statically optimized (pre-rendered pages).
 * The "context.req" is undefined for pre-rendered pages.
 *
 */
// Document.getInitialProps = async (appContext: AppContext) => {
//   console.log('Document.getInitialProps');

//   const document = 'document';
//   return { html: '' };
// }
