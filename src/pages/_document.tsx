// Esse arquivo funciona para configurar o document html, se apagar o arquivo, ele não vai dar erro pq vc não vai estar usando
// e você faria o que ele faz dentro do próprio _app.tsx (não sei como mas deve ser de forma semelhante, declarando o Head
// adicionando as meta tags e coisa e tal). O conteúdo do _app.tsx substitui o main e o nextScripts acredito que seja uma opção
// para adicionar '<script></script>' de forma mais fácil e unificada

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
