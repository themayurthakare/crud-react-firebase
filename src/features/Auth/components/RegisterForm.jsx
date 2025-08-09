// src/features/Auth/components/RegisterForm.jsx
import React, { useState, useContext } from 'react';
import InputField from '../../../components/common/InputField/InputField';
import Button from '../../../components/common/Button/Button';
import styles from './AuthForms.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../App';

export default function RegisterForm() {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e?.preventDefault();
    setErr('');
    setLoading(true);
    try {
      await register({ name, email, password });
      nav('/dashboard');
    } catch (error) {
      setErr(error.message || 'Register failed');
    } finally { setLoading(false); }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <h3>Create account</h3>
      {err && <div className={styles.err}>{err}</div>}
      <InputField label="Full name" value={name} onChange={setName} placeholder="Your name" />
      <InputField label="Email" value={email} onChange={setEmail} placeholder="you@domain.com" />
      <InputField label="Password" value={password} onChange={setPassword} placeholder="Choose a password" type="password" />
      <div style={{ marginTop: 8 }}>
        <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Register'}</Button>
      </div>
    </form>
  );
}
