import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/lib/shop-data";

export const Route = createFileRoute("/shop/")({
  component: ShopIndex,
});

function ShopIndex() {
  return (
    <div className="bg-brand-cream text-brand-dark font-body min-h-screen selection:bg-brand-teal/30">
      <nav className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/5 px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-display text-2xl tracking-tight flex items-center gap-2 font-extrabold">
          <span className="text-brand-teal">THE</span>DOGFATHER
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
          <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
          <Link to="/shop" className="text-brand-teal">Shop</Link>
          <a href="/#reviews" className="hover:text-brand-teal transition-colors">Reviews</a>
          <a href="/#visit" className="hover:text-brand-teal transition-colors">Visit</a>
        </div>
        <a
          href="tel:9672502244"
          className="bg-brand-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand-teal/20"
        >
          Call Now
        </a>
      </nav>

      <header className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          The Shop
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-[0.95] text-balance mb-6">
          Everything your pet needs.
        </h1>
        <p className="text-lg text-brand-dark/70 max-w-xl leading-relaxed">
          Browse our hand-picked categories of premium food, treats, toys and accessories — all
          available in-store at Raja Park, Jaipur.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/shop/$category"
              params={{ category: cat.slug }}
              className="group relative overflow-hidden rounded-3xl border border-brand-dark/5 bg-card shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-dark/5">
                <img
                  src={cat.cover}
                  alt={cat.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">{cat.emoji}</span>
                  <h2 className="font-display text-2xl font-bold">{cat.name}</h2>
                </div>
                <p className="text-sm text-brand-dark/60">{cat.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-brand-teal font-bold text-sm">
                  Explore
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
