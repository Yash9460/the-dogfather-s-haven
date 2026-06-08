import { createFileRoute } from "@tanstack/react-router";
import heroDog from "@/assets/hero-dog.jpg";
import gallerySalon from "@/assets/gallery-salon.jpg";
import galleryToys from "@/assets/gallery-toys.jpg";
import galleryTreats from "@/assets/gallery-treats.jpg";
import galleryAccessories from "@/assets/gallery-accessories.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Dogfather — Premium Pet Care & Grooming in Raja Park, Jaipur" },
      {
        name: "description",
        content:
          "The Dogfather in Raja Park, Jaipur: premium dog & cat food, treats, toys, accessories, professional grooming salon, boarding & training. Your pet deserves the best.",
      },
      { property: "og:title", content: "The Dogfather — Premium Pet Care in Jaipur" },
      {
        property: "og:description",
        content:
          "Complete pet care destination in Raja Park, Jaipur. Grooming salon, premium food, boarding & training — all under one roof.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroDog },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroDog },
    ],
  }),
  component: Index,
});

const PawIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="6" cy="9" r="2" />
    <circle cx="10.5" cy="6" r="2" />
    <circle cx="13.5" cy="6" r="2" />
    <circle cx="18" cy="9" r="2" />
    <path d="M12 11c-2.5 0-4.5 2-5 4-.4 1.6 1 3 2.6 3 .9 0 1.6-.4 2.4-.4s1.5.4 2.4.4c1.6 0 3-1.4 2.6-3-.5-2-2.5-4-5-4z" />
  </svg>
);

const services = [
  {
    n: "01",
    title: "Grooming Salon",
    desc: "Expert bathing, breed-specific haircuts, nail trimming, ear cleaning and relaxing spa treatments in a safe, hygienic environment.",
  },
  {
    n: "02",
    title: "Premium Food",
    desc: "The finest selection of dog and cat nutrition, nutritious treats and supplements for every breed and life stage.",
  },
  {
    n: "03",
    title: "Pet Boarding",
    desc: "A comfortable, clean home-away-from-home where your furry family is cared for with love while you're away.",
  },
  {
    n: "04",
    title: "Training Service",
    desc: "Professional obedience and behaviour training to build a stronger, happier bond between you and your companion.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    pet: "Shih Tzu Dad",
    quote:
      "Best grooming service in Jaipur. My Shih Tzu looks absolutely royal after every single visit!",
  },
  {
    name: "Priya Singh",
    pet: "Labrador Mom",
    quote:
      "The selection of treats and food is amazing. The staff genuinely knows pet nutrition inside out.",
  },
  {
    name: "Ananya Kapoor",
    pet: "Cat Parent",
    quote:
      "Truly a one-stop shop. Friendly staff, spotless salon and so much love for every animal.",
  },
  {
    name: "Vikas Mehta",
    pet: "Golden Retriever Dad",
    quote:
      "Extremely clean and professional. They handle even nervous dogs with so much patience. Highly recommend!",
  },
  {
    name: "Sneha Agarwal",
    pet: "Beagle Mom",
    quote:
      "Boarded my beagle for a week and got daily updates. He came back happy and well looked after.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-brand-teal mb-4 text-xl" aria-hidden="true">
      ★★★★★
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="bg-card p-8 rounded-3xl w-[340px] sm:w-[380px] whitespace-normal shrink-0 border border-brand-teal/10 shadow-sm">
      <Stars />
      <p className="italic text-brand-dark/80 mb-6 leading-relaxed">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-brand-teal/15 flex items-center justify-center font-bold text-brand-teal">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-sm">{t.name}</div>
          <div className="text-xs text-brand-dark/40">{t.pet}</div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-brand-cream text-brand-dark font-body min-h-screen selection:bg-brand-teal/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/5 px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-display text-2xl tracking-tight flex items-center gap-2 font-extrabold">
          <span className="text-brand-teal">THE</span>DOGFATHER
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#services" className="hover:text-brand-teal transition-colors">Services</a>
          <a href="#gallery" className="hover:text-brand-teal transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-brand-teal transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-brand-teal transition-colors">Visit</a>
        </div>
        <a
          href="tel:9672502244"
          className="bg-brand-teal text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand-teal/20"
        >
          Call Now
        </a>
      </nav>

      {/* Hero */}
      <section id="top" className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-entrance">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <PawIcon className="size-4" /> Premium Pet Care in Jaipur
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95] text-balance mb-8">
            Because your{" "}
            <span className="text-brand-teal italic underline decoration-brand-accent/40">
              best friend
            </span>{" "}
            deserves the best.
          </h1>
          <p className="text-lg text-brand-dark/70 max-w-md mb-10 leading-relaxed">
            The complete destination for grooming, boarding, training and premium nutrition — all
            under one roof in the heart of Raja Park.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:9672502244"
              className="px-8 py-4 bg-brand-dark text-white rounded-2xl font-bold text-lg hover:bg-brand-teal transition-all"
            >
              Book Grooming
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-brand-dark/10 rounded-2xl font-bold text-lg hover:border-brand-teal transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative animate-entrance [animation-delay:200ms]">
          <div className="absolute -top-6 -right-6 size-24 bg-brand-accent/10 rounded-full animate-float" />
          <div className="rounded-[2.5rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <img
              src={heroDog}
              alt="A happy golden retriever in a bright pet boutique"
              width={1200}
              height={1200}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-brand-dark text-white py-24 rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
              Everything under one roof.
            </h2>
            <p className="text-white/60">Professional care tailored for every furry personality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.n}
                className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-brand-teal transition-all"
              >
                <div className="size-12 bg-brand-teal rounded-xl mb-6 group-hover:bg-white flex items-center justify-center text-white group-hover:text-brand-teal font-bold transition-colors">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl mb-3 font-bold">{s.title}</h3>
                <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="font-display font-extrabold text-4xl mb-4">The Gallery</h2>
            <div className="flex gap-2 flex-wrap">
              <span className="px-4 py-1.5 bg-brand-teal text-white rounded-full text-xs font-bold">Grooming</span>
              <span className="px-4 py-1.5 bg-brand-dark/5 rounded-full text-xs font-bold">Treats</span>
              <span className="px-4 py-1.5 bg-brand-dark/5 rounded-full text-xs font-bold">Toys</span>
              <span className="px-4 py-1.5 bg-brand-dark/5 rounded-full text-xs font-bold">Accessories</span>
            </div>
          </div>
          <a
            href="https://instagram.com/thedogfather.india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal font-bold text-sm underline decoration-2 underline-offset-4"
          >
            Follow @thedogfather.india
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img
              src={gallerySalon}
              alt="A happy puppy being pampered at a grooming session"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover rounded-3xl"
            />
          </div>
          <img
            src={galleryToys}
            alt="Colorful dog chew toys"
            width={512}
            height={512}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-3xl"
          />
          <img
            src={galleryTreats}
            alt="Premium organic dog treats"
            width={512}
            height={512}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-3xl"
          />
          <div className="col-span-2">
            <img
              src={galleryAccessories}
              alt="A stylish leather dog collar and leash set"
              width={800}
              height={512}
              loading="lazy"
              className="w-full aspect-[16/9] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section id="reviews" className="py-24 bg-brand-teal/10 overflow-hidden">
        <div className="px-6 max-w-7xl mx-auto mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-teal/15 text-brand-teal rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <PawIcon className="size-4" /> Loved by pet parents
          </span>
          <h2 className="font-display font-extrabold text-4xl">What the pack says</h2>
        </div>
        <div className="group flex">
          <div className="flex gap-8 px-4 animate-marquee group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="visit" className="bg-brand-dark text-white pt-24 pb-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div>
            <div className="font-display font-extrabold text-3xl mb-6">
              <span className="text-brand-teal">THE</span>DOGFATHER
            </div>
            <p className="text-white/50 mb-8 leading-relaxed">
              Your pet's favourite corner in Jaipur. Quality care, premium supplies and lots of
              love — because your pet deserves the best.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/thedogfather.india"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-white/10 rounded-full grid place-items-center hover:bg-brand-teal transition-colors text-xs font-bold"
              >
                IG
              </a>
              <a
                href="tel:9672502244"
                className="size-10 bg-white/10 rounded-full grid place-items-center hover:bg-brand-teal transition-colors text-xs font-bold"
              >
                ☎
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-brand-teal mb-6">
              Location
            </h3>
            <address className="not-italic text-white/70 leading-relaxed">
              Raja Park
              <br />
              Jaipur, Rajasthan
              <br />
              India
            </address>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-brand-teal mb-6">
              Direct Contact
            </h3>
            <a
              href="tel:9672502244"
              className="text-2xl font-display font-bold block mb-2 hover:text-brand-teal transition-colors"
            >
              +91 96725 02244
            </a>
            <p className="text-white/50">Open daily: 10:00 AM — 9:00 PM</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} The Dogfather India. All furry rights reserved.</p>
          <p>Raja Park, Jaipur</p>
        </div>
      </footer>
    </div>
  );
}
