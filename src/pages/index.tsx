import Card from '@/components/Card';
import { UserProps } from '@/types/user';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string, userPassword: string) => {
    console.log(userName, userPassword);

    // const res = await fetch(`https://api.github.com/users/${userName}`);

    // const data = await res.json();

    // const { email, password } = data;

    // const userData: UserProps = {
    //   email,
    //   password,
    // };

    // setUser(userData);
  };

  return (
    <>
      <Card loadUser={loadUser}></Card>
    </>
  );
}
