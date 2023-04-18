import { useState } from 'react';
import styles from '../../styles/Card.module.css';

export default function Card() {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const createUser = async () => {
    const response = await fetch('/api/users/createUser', {
      method: 'POST',
      body: JSON.stringify({ nome: user.nome, email: user.email, senha: user.senha }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json;

    console.log(data);
  };

  return (
    <div className={styles.card}>
      <input type="text" placeholder="Nome" onChange={(e) => (user.nome = e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => (user.email = e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => (user.senha = e.target.value)} />

      <button onClick={createUser}>Sign up</button>
    </div>
  );
}
