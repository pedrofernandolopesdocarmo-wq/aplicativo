
import { useState } from 'react'

export default function Login() {
  const [form, setForm] = useState({ email:'', password:'' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => { e.preventDefault(); alert('Login simulado.'); }

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-xl font-semibold mb-4">Entrar</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="label">E-mail</label>
          <input className="input" type="email" name="email" value={form.email} onChange={onChange} required />
        </div>
        <div>
          <label className="label">Senha</label>
          <input className="input" type="password" name="password" value={form.password} onChange={onChange} required />
        </div>
        <button className="btn btn-primary w-full">Entrar</button>
      </form>
    </div>
  )
}
