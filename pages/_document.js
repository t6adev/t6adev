import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const style = {
  font: {
    fontFamily: 'Lato, "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
  },
};

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render () {
    return (
     <html>
       <Head>
         <title>Tell-y's Site</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
       </Head>
       <body style={{ ...style.font, margin: 0 }}>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
