import { useEffect, useState } from 'react';
import { PartnerDocument } from '../models/partner.model';

export default function PartnersPage() {
  const [partners, setPartners] = useState<PartnerDocument[]>([]);

  const getPartners = async () => {
    const { origin } = window.location;
    const data = await fetch(origin + '/api/partners');
    const partners = await data.json();
    return partners;
  };

  useEffect(() => {
    if (window) {
      getPartners().then((partners) => {
        setPartners(partners);
      });
    }
  }, []);

  return (
    <div>
      <h1>Partners</h1>

      {partners.map((partner) => {
        return (
          <div key={partner.id}>
            <h1></h1>
            <h1>
              {partner.id} - {partner.ownerName} | {partner.tradingName}
            </h1>

            <p>{partner.document}</p>

            <p>{partner.address.type}</p>
            <p>{partner.address.coordinates}</p>

            <p>{partner.coverageArea.type}</p>
            <p>{partner.coverageArea.coordinates}</p>
          </div>
        );
      })}
    </div>
  );
}
