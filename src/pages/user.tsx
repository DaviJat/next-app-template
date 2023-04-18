// Apenas um arquivo para testar o funcionamento de rotas do next, esse arquivo pode ser acessado
// como localhost/user (baseado no nome do arquivo), o conteúdo do return (que é o conteúdo dessa "page") é renderizado no lugar
// do <Component {...pageProps} /> do arquivo _app.tsx

// https://www.youtube.com/watch?v=lOJKBmAxeP8&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=8&ab_channel=MatheusBattisti-HoradeCodar

export default function User() {
  return (
    <div>
      <h1>Usuário</h1>
    </div>
  );
}
