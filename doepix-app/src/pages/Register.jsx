
import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ name:'', cpf:'', email:'', password:'' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    alert('Registro simulado. Conecte ao backend depois.')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-xl font-semibold mb-4">Criar conta</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="label">Nome</label>
          <input className="input" name="name" value={form.name} onChange={onChange} required />
        </div>
        <div>
          <label className="label">CPF</label>
          <input className="input" name="cpf" value={form.cpf} onChange={onChange} required />
        </div>
        <div>
          <label className="label">E-mail</label>
          <input className="input" type="email" name="email" value={form.email} onChange={onChange} required />
        </div>
        <div>
          <label className="label">Senha</label>
          <input className="input" type="password" name="password" value={form.password} onChange={onChange} required />
        </div>
        <button className="btn btn-primary w-full">Criar conta</button>
      </form>
    </div>
  )
}
