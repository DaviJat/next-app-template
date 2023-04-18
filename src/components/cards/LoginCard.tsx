// import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Card.module.css';

export default function Card() {
  const [user, setUser] = useState({
    email: '',
    senha: '',
  });

  const loadUser = async () => {
    const response = await fetch('/api/users/getUser', {
      method: 'POST',
      body: JSON.stringify({ email: user.email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={styles.card}>
      <input type="email" placeholder="Email" onChange={(e) => (user.email = e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => (user.senha = e.target.value)} />

      <button onClick={loadUser}>Login</button>
    </div>
  );
}
