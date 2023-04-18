// É o arquivo principal para estruturar o body do documento html, tudo do body vai estar dentro desse return, aqui basicamente
// vc vai chamar os componentes da tela, não sei como ele vai funcionar direito ainda ou como vai ser feito o esquema para mudar o
// conteúdo dele, sendo que na teoria seriam muitas mudanças e condições de renderização dentro de um arquivo só.

import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
