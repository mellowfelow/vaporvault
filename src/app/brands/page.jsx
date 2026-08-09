import { BRANDS } from '@/config/site';
import PageHero from '@/components/PageHero';
import BrandTile from '@/components/BrandTile';

export const metadata = {
  title: 'All Vape Brands',
  description: 'Browse every brand VaporVault carries, with FDA PMTA authorization status disclosed for each.',
  alternates: { canonical: '/brands/' },
};

export default function BrandsIndexPage() {
  return (
    <>
      <PageHero title="All Brands" subtitle="Every brand we carry, with PMTA authorization status disclosed." trail={[{ label: 'Brands' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <div className="brands-grid">
            {BRANDS.map((b) => <BrandTile key={b.id} brand={b} />)}
          </div>
        </div>
      </section>
    </>
  );
}
