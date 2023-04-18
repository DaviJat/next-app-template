import Card from '@/components/Card';
import { UserProps } from '@/types/user';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userNome: string, userEmail: string, userSenha: string) => {
    console.log(userNome);
    const response = await fetch('/api/users/createUser', {
      method: 'POST',
      body: JSON.stringify({ nome: userNome, email: userEmail, senha: userSenha }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json;

    console.log(data);

    const response2 = await fetch('/api/users/getUsers');
    const data2 = await response2.json();
    console.log(data2);
  };

  return (
    <>
      <Card loadUser={loadUser}></Card>
    </>
  );
}
