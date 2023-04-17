type CardProps = {
  loadUser: (userNome: string, userEmail: string, userSenha: string) => Promise<void>;
};

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Card.module.css';

export default function Card({ loadUser }: CardProps) {
  const [userNome, setUserNome] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSenha, setUserSenha] = useState('');

  return (
    <div className={styles.card}>
      <input type="text" placeholder="Nome" onChange={(e) => setUserNome(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setUserSenha(e.target.value)} />
      <button onClick={(e) => loadUser(userNome, userEmail, userSenha)}>Send</button>
      <Link href={'/user'}>Register</Link>
    </div>
  );
}
