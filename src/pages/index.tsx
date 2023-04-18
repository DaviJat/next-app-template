// Arquivo do localhost/ (rota default), o conteúdo do return (que é o conteúdo dessa "page") é renderizado no lugar
// do <Component {...pageProps} /> do arquivo _app.tsx

// https://www.youtube.com/watch?v=lOJKBmAxeP8&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=8&ab_channel=MatheusBattisti-HoradeCodar

import LoginCard from '@/components/cards/LoginCard';
import SignUpCard from '@/components/cards/SignUpCard';

export default function Home() {
  return (
    <>
      <SignUpCard></SignUpCard>
      <LoginCard></LoginCard>
    </>
  );
}
