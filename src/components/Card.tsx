type CardProps = {
  loadUser: (userName: string, userPassword: string) => Promise<void>;
};

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Card.module.css';

export default function Card({ loadUser }: CardProps) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUSerPassword] = useState('');

  return (
    <div className={styles.card}>
      <input type="text" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setUSerPassword(e.target.value)} />
      <button onClick={(e) => loadUser(userEmail, userPassword)}>Send</button>
      <Link href={'/user'}>Register</Link>
    </div>
  );
}
