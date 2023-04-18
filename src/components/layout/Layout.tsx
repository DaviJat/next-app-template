// O compoennte Layout serve para padronizar o conteúdo fixo de uma página, ele é chamado dentro do _app.tsx,
// esse children dentro do main carrega o que ta dentro dele no lugar que ele foi chamado, no caso do _app.tsx
// ele ta adicionando o conteúdo da "page" que o site estiver (nesse caso, ou index.tsx '/' ou user.tsx '/user')

import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
