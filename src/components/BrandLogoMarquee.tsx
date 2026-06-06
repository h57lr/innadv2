export type BrandLogoItem = {
  name: string;
  logoSrc: string;
  tone: string;
};

type BrandLogoMarqueeProps = {
  brands: BrandLogoItem[];
};

function BrandLogoCard({ brand }: { brand: BrandLogoItem }) {
  return (
    <div className={`brand-marquee__card brand-marquee__card--${brand.tone}`} aria-label={brand.name}>
      <img className="brand-marquee__logo" src={brand.logoSrc} alt={`${brand.name} logo`} loading="lazy" decoding="async" />
    </div>
  );
}

function BrandLogoTrack({ brands }: { brands: BrandLogoItem[] }) {
  return (
    <div className="brand-marquee__viewport">
      <div className="brand-marquee__track">
        {[0, 1].map((group) => (
          <div className="brand-marquee__group" aria-hidden={group === 1} key={group}>
            {brands.map((brand) => (
              <BrandLogoCard brand={brand} key={`${group}-${brand.name}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandLogoMarquee({ brands }: BrandLogoMarqueeProps) {
  return (
    <div className="brand-marquee" aria-label="Brand experience logo slider">
      <BrandLogoTrack brands={brands} />
    </div>
  );
}
