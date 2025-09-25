
import { useState } from 'react'

export default function Credits() {
  const [qty, setQty] = useState(10)
  const price = qty * 1.0 // R$1 por crédito (mock)

  return (
    <div className="max-w-md mx-auto card space-y-4">
      <h2 className="text-xl font-semibold">Comprar Créditos</h2>
      <p className="text-neutral-600 text-sm">Créditos impulsionam campanhas no ranking/visibilidade dentro da plataforma.</p>
      <div>
        <label className="label">Quantidade</label>
        <input className="input" type="number" min="10" step="10" value={qty} onChange={e=>setQty(Number(e.target.value))} />
      </div>
      <div className="text-sm">Total: <strong>R$ {price.toFixed(2)}</strong></div>
      <button className="btn btn-primary w-full">Pagar e adicionar créditos</button>
    </div>
  )
}
