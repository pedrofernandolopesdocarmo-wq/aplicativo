
import CampaignCard from '../components/CampaignCard'
import { Link } from 'react-router-dom'

const demo = [
  { id:'1', title:'Tratamento do João', summary:'Campanha para custear tratamento...', goal: 5000, raised: 1250 },
  { id:'2', title:'Ração para ONG Amigos', summary:'A ONG precisa de ração e remédios...', goal: 8000, raised: 3240 },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Receba doações para a sua causa direto na sua chave Pix.</h1>
        <p className="mt-2 text-neutral-600">Crie sua campanha, receba doações no CPF via Pix ou apoie com Créditos que impulsionam causas dentro da plataforma.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/campanhas/nova" className="btn btn-primary">Criar campanha</Link>
          <Link to="/creditos" className="btn border">Comprar Créditos</Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-xl">Campanhas em destaque</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {demo.map(c => <CampaignCard key={c.id} campaign={c} />)}
        </div>
      </section>
    </div>
  )
}
