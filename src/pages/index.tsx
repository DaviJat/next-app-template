import Card from '@/components/Card';
import { UserProps } from '@/types/user';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userNome: string, userEmail: string, userSenha: string) => {
    console.log(userNome, userEmail, userSenha);
  };

  return (
    <>
      <Card loadUser={loadUser}></Card>
    </>
  );
}
