// Tipo criado para ser reutilizado (Funciona como uma Classe, acredito que seja possível colocar as funções 
// do 'pages/api/db/users' aqui também e usar a pasta types para criar todas as classes)

// https://www.youtube.com/watch?v=3sQITRihW_A&ab_channel=MatheusBattisti-HoradeCodar (20:58)

export type UserProps = {
    nome: string;
    email: string;
    senha: string;
};