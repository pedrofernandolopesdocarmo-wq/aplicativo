
import { Link } from 'react-router-dom'

export default function CampaignCard({ campaign }) {
  return (
    <div className="card">
      <div className="flex items-start gap-4">
        <img src={campaign.cover || 'https://via.placeholder.com/160x100'} alt="" className="w-40 h-24 object-cover rounded-xl" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{campaign.title}</h3>
          <p className="text-sm text-neutral-600 line-clamp-2">{campaign.summary}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-neutral-600">
              Meta: <strong>R${'{'}campaign.goal{'}'}</strong> · Arrecadado: <strong>R${'{'}campaign.raised{'}'}</strong>
            </div>
            <Link to={`/campanhas/${campaign.id}`} className="btn btn-primary">Ver campanha</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
