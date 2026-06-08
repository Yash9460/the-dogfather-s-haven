import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getCategory, categories, type Category, type Product } from "@/lib/shop-data";

export const Route = createFileRoute("/shop/$category")({
  component: CategoryPage,
  notFoundComponent: CategoryNotFound,
  errorComponent: CategoryError,
});

function CategoryNav({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/5 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-display text-2xl tracking-tight flex items-center gap-2 font-extrabold">
        <span className="text-brand-teal">THE</span>DOGFATHER
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
        <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
        <Link to="/shop" className={activeSlug ? "hover:text-brand-teal transition-colors" : "text-brand-teal"}>
          Shop
        </Link>
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
  );
}

function CategoryPage() {
  const { category: categorySlug } = useParams({ from: "/shop/$category" });
  const category = getCategory(categorySlug);

  if (!category) return <CategoryNotFound />;

  return (
    <div className="bg-brand-cream text-brand-dark font-body min-h-screen selection:bg-brand-teal/30">
      <CategoryNav activeSlug={category.slug} />

      {/* Breadcrumb + category chips */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="flex items-center gap-2 text-sm text-brand-dark/50 mb-8">
          <Link to="/shop" className="hover:text-brand-teal">Shop</Link>
          <span>/</span>
          <span className="text-brand-dark font-semibold">{category.name}</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className={
                "px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors " +
                (c.slug === category.slug
                  ? "bg-brand-teal text-white"
                  : "bg-brand-dark/5 hover:bg-brand-dark/10")
              }
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-10 pb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl" aria-hidden="true">{category.emoji}</span>
          <span className="px-4 py-1.5 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-bold uppercase tracking-widest">
            {category.tagline}
          </span>
        </div>
        <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-[0.95] mb-6">
          {category.name}
        </h1>
        <p className="text-lg text-brand-dark/70 max-w-2xl leading-relaxed">{category.description}</p>
      </header>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {category.products.map((p: Product) => (
            <article
              key={p.name}
              className="group bg-card rounded-3xl border border-brand-dark/5 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-brand-dark/5">
                {p.tag && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-accent text-white">
                    {p.tag}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-5">
                <h2 className="font-semibold text-base md:text-lg leading-snug mb-1">{p.name}</h2>
                <p className="text-brand-teal font-bold text-lg">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-brand-dark text-white rounded-[2.5rem] p-10 md:p-14 text-center">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Visit us to shop the full range
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Drop by our store in Raja Park, Jaipur, or call us to check stock and reserve your
            pet's favourites.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:9672502244"
              className="px-8 py-4 bg-brand-teal text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Call +91 96725 02244
            </a>
            <Link
              to="/shop"
              className="px-8 py-4 border-2 border-white/15 rounded-2xl font-bold text-lg hover:border-brand-teal transition-all"
            >
              All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryNotFound() {
  return (
    <div className="bg-brand-cream text-brand-dark font-body min-h-screen">
      <CategoryNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display font-extrabold text-5xl mb-4">Category not found</h1>
        <p className="text-brand-dark/60 mb-8">
          That category doesn't exist. Browse all our categories instead.
        </p>
        <Link
          to="/shop"
          className="inline-flex px-8 py-4 bg-brand-teal text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}

function CategoryError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="bg-brand-cream text-brand-dark font-body min-h-screen">
      <CategoryNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display font-extrabold text-4xl mb-4">Something went wrong</h1>
        <p className="text-brand-dark/60 mb-8">We couldn't load this category. Please try again.</p>
        <button
          onClick={reset}
          className="inline-flex px-8 py-4 bg-brand-teal text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Keep the Category type referenced for editors/tooling.
export type { Category };
