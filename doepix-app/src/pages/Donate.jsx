
import { useState } from 'react'
import { buildPixPayload } from '../lib/pix'

export default function Donate() {
  const [amount, setAmount] = useState(20)
  const cpf = '00000000000'
  const payload = buildPixPayload({ cpf, amount })

  return (
    <div className="max-w-md mx-auto card space-y-4">
      <h2 className="text-xl font-semibold">Checkout de doação</h2>
      <div className="grid grid-cols-4 gap-2">
        {[10,20,50,100].map(v => (
          <button key={v} className={`btn ${amount===v ? 'btn-primary' : 'border'}`} onClick={()=>setAmount(v)}>R$ {v}</button>
        ))}
      </div>
      <div>
        <label className="label">Valor personalizado (R$)</label>
        <input className="input" type="number" min="1" value={amount} onChange={e=>setAmount(Number(e.target.value))} />
      </div>
      <div className="text-xs text-neutral-600">
        Payload Pix (mock): <code className="break-all">{payload}</code>
      </div>
      <button className="btn btn-primary w-full">Copiar código Pix</button>
    </div>
  )
}
