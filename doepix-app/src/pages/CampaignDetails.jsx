
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { buildPixPayload } from '../lib/pix'

export default function CampaignDetails() {
  const { id } = useParams()
  const [amount, setAmount] = useState(20)
  const cpf = '00000000000'

  const payload = buildPixPayload({ cpf, amount })

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <img className="w-full h-64 object-cover rounded-2xl" src="https://via.placeholder.com/800x400" />
        <h1 className="text-2xl font-semibold">Título da campanha #{id}</h1>
        <p className="text-neutral-700">Descrição detalhada da campanha. Conte a história, objetivo e impacto esperado.</p>
        <div className="text-sm text-neutral-600">Meta: <strong>R$ 10.000</strong> · Arrecadado: <strong>R$ 1.250</strong></div>
      </div>
      <div className="card space-y-3">
        <h3 className="font-semibold">Doar via Pix</h3>
        <div>
          <label className="label">Valor (R$)</label>
          <input className="input" type="number" min="10" step="10" value={amount} onChange={e=>setAmount(Number(e.target.value))} />
        </div>
        <div className="text-xs text-neutral-600">
          Payload Pix (mock): <code className="break-all">{payload}</code>
        </div>
        <button className="btn btn-primary w-full">Copiar código Pix</button>
        <p className="text-sm text-neutral-600">Ou escolha valores rápidos no checkout (R$10, R$20, R$50, R$100).</p>
      </div>
    </div>
  )
}
