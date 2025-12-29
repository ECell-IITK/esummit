import { Check, X } from "lucide-react";

/* -------- MASTER FEATURE LIST (ORDER FIXED) -------- */
const ALL_FEATURES = [
  "3 Days, 2 Nights Accommodation",
  "Breakfast Included",
  "Exclusive Merchandise",
  "Premium Hospitality Kit",
  "Certificate of Participation",
  "Talk Sessions",
  "Workshops",
  "Competitions",
  "Startup Expo",
  "Comedy Night & Cultural Night",
  "Premium Networking Dinner",
];

export default function Register() {
  return (
    <section
      className="
        relative z-10
        min-h-screen
        px-6
        pt-32
        pb-24
        bg-black
      "
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Buy <span className="text-teal-300">Passes</span> Now!
      </h1>

      <p className="text-white/80 text-center mb-16 max-w-3xl mx-auto">
        Choose the pass that fits your entrepreneurial journey at E-Summit’25.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <PassCard
          title="BASIC"
          subtitle="For participants"
          price="₹1099"
          includes={[
            "Certificate of Participation",
            "Talk Sessions & Workshops",
            "Competitions",
            "Startup Expo",
            "Comedy Night & Cultural Night",
            "Talk Sessions",
            "Workshops",
          ]}
        />

        <PassCard
          title="INSPIRE"
          subtitle="For participants"
          price="₹2199"
          includes={[
            "3 Days, 2 Nights Accommodation",
            "Breakfast Included",
            "Premium Hospitality Kit",
            "Certificate of Participation",
            "Talk Sessions",
            "Workshops",
            "Talk Sessions & Workshops",
            "Competitions",
            "Startup Expo",
            "Comedy Night & Cultural Night",
          ]}
        />

        <PassCard
          title="ELITE"
          subtitle="For participants"
          price="₹2699"
          popular
          includes={[
            "3 Days, 2 Nights Accommodation",
            "Breakfast Included",
            "Exclusive Merchandise",
            "Premium Hospitality Kit",
            "Certificate of Participation",
            "Talk Sessions",
            "Workshops",
            "Talk Sessions & Workshops",
            "Competitions",
            "Startup Expo",
            "Comedy Night & Cultural Night",
          ]}
        />

        <PassCard
          title="PROFESSIONAL"
          subtitle="Working Professionals"
          price="₹2199"
          includes={[
            "Premium Networking Dinner",
            "Talk Sessions",
            "Workshops",
            "Talk Sessions & Workshops",
            "Competitions",
            "Startup Expo",
            "Comedy Night & Cultural Night",
          ]}
        />
      </div>
    </section>
  );
}


function PassCard({ title, subtitle, price, includes, popular }) {
  const originalPrice = Number(price.replace("₹", ""));
  const discountedPrice = Math.round(originalPrice * 0.9); // 10% OFF

  return (
    <div
      className={`
        relative
        rounded-3xl
        p-8
        bg-white/10 backdrop-blur-xl
        border border-white/20
        text-white
        shadow-[0_0_60px_rgba(36,145,132,0.25)]
        flex flex-col
        ${popular ? "ring-2 ring-teal-400 scale-[1.04]" : ""}
      `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
          Best Value
        </div>
      )}

      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-sm text-white/60 text-center mb-4">{subtitle}</p>

      {/* 💰 UPDATED PRICE UI */}
      <div className="text-center mb-6 flex flex-col gap-1">
        <span className="text-3xl font-bold text-teal-300">
          ₹{discountedPrice}
        </span>

        <span className="text-xl text-white/40 line-through">
          {price}
        </span>

        <span className="text-s font-bold text-teal-300/80">
          10 % Early Bird Discount !
        </span>
      </div>

      {/* FEATURES */}
      <ul className="space-y-3 text-sm mb-8 flex-1">
        {ALL_FEATURES.map((feature, idx) => {
          const enabled = includes.includes(feature);

          return (
            <li key={idx} className="flex items-start gap-3">
              {enabled ? (
                <Check className="w-4 h-4 text-teal-400 mt-1" />
              ) : (
                <X className="w-4 h-4 text-red-400 mt-1" />
              )}
              <span className={enabled ? "" : "text-white/40"}>
                {feature}
              </span>
            </li>
          );
        })}
      </ul>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfBwn2SVIppxG8QXNy5bS0MIT_0cO0quCe5sXYyXPeghGO9dg/viewform"
        target="_blank"
      >
        <button
          className="
            mt-auto
            w-full
            py-2
            rounded-xl
            font-semibold text-sm text-white
            bg-gradient-to-b from-[#3bd2c1] to-[#1f8f82]
            shadow-[0_4px_10px_rgba(0,0,0,0.4)]
            hover:from-[#4fe6d5] hover:to-[#2ba99a]
            transition-all duration-300
            hover:scale-[1.08] active:scale-[0.97]
          "
        >
          Buy Now
        </button>
      </a>
    </div>
  );
}

