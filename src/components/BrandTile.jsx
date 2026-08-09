import Link from 'next/link';
import Image from 'next/image';
import { getByBrand } from '@/config/site';

export default function BrandTile({ brand }) {
  const count = getByBrand(brand.id).length;
  return (
    <Link href={`/brands/${brand.id}/`} className="brand-tile">
      <div className="brand-logo-wrap">
        {brand.logo
          ? <Image src={brand.logo} alt={`${brand.label} logo`} width={200} height={100} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 10 }} />
          : <span className="brand-emoji" aria-hidden="true">{brand.emoji}</span>}
      </div>
      <span className="brand-name">{brand.label}</span>
      <span className="brand-count">{count} product{count === 1 ? '' : 's'}</span>
      <span className={`brand-pmta ${brand.pmta === 'authorized' ? 'auth' : 'pending'}`}>{brand.pmta === 'authorized' ? 'FDA Auth' : 'PMTA Pending'}</span>
    </Link>
  );
}
