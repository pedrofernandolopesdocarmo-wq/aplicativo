
import { useState } from 'react'

export default function CampaignNew() {
  const [form, setForm] = useState({
    title:'', summary:'', goal:'', cpf:'', cover:'',
    facebook:'', instagram:'', twitter:'', tiktok:'', whatsapp:''
  })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    alert('Campanha criada (simulação). Salve no backend depois.')
  }

  return (
    <div className="max-w-2xl mx-auto card space-y-4">
      <h2 className="text-xl font-semibold">Nova campanha</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">Título</label>
            <input className="input" name="title" value={form.title} onChange={onChange} required />
          </div>
          <div>
            <label className="label">Meta (R$)</label>
            <input className="input" name="goal" value={form.goal} onChange={onChange} required />
          </div>
          <div className="md:col-span-2">
            <label className="label">Resumo</label>
            <textarea className="input min-h-[100px]" name="summary" value={form.summary} onChange={onChange} />
          </div>
          <div>
            <label className="label">CPF (recebimento via Pix)</label>
            <input className="input" name="cpf" value={form.cpf} onChange={onChange} required />
          </div>
          <div>
            <label className="label">Imagem de capa (URL)</label>
            <input className="input" name="cover" value={form.cover} onChange={onChange} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">Facebook</label>
            <input className="input" name="facebook" value={form.facebook} onChange={onChange} />
          </div>
          <div>
            <label className="label">Instagram</label>
            <input className="input" name="instagram" value={form.instagram} onChange={onChange} />
          </div>
          <div>
            <label className="label">Twitter (X)</label>
            <input className="input" name="twitter" value={form.twitter} onChange={onChange} />
          </div>
          <div>
            <label className="label">TikTok</label>
            <input className="input" name="tiktok" value={form.tiktok} onChange={onChange} />
          </div>
          <div className="md:col-span-2">
            <label className="label">WhatsApp (link)</label>
            <input className="input" name="whatsapp" value={form.whatsapp} onChange={onChange} />
          </div>
        </div>

        <button className="btn btn-primary">Criar campanha</button>
      </form>
    </div>
  )
}
