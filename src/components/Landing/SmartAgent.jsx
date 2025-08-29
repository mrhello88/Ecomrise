const SmartAgent = () => {
  return (
    <section className="relative w-full bg-white py-20 !mt-20 flex flex-col items-center">
      {/* Left side decorative element */}
      <img
        src="/elipse-star-left-side-1.png"
        alt="left side decorative element"
        className="absolute -left-20 top-[100%] transform -translate-y-1/2 w-auto h-auto object-contain pointer-events-none z-50 hidden sm:hidden md:block"
      />
      {/* Centered container matching other sections */}
      <div className="w-full max-w-[calc(80rem+10rem)] py-4! !px-4 md:!px-6 lg:!px-10 xl:!px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center md:items-start !mb-10 md:!mb-12">
          {/* Top subtitle */}
          <p className="text-[var(--primary-color)] text-base md:text-lg font-medium !mb-2 md:!mb-3 !text-center md:!text-left">
            Boost ROI
          </p>
          
          {/* Main headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[120%] font-medium text-[var(--tertiary-color)] max-w-3xl !text-center md:!text-left">
            Cut Costs. {" "}
            <span className="font-bold text-[var(--primary-color)]">
              Boost ROI.
            </span>
            <br />
            Powered by Smart Agents.
          </h2>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="flex flex-wrap items-stretch !gap-3 md:!gap-4 !mb-3 md:!mb-4 md:grid md:grid-cols-3">
          
          {/* Card 1 - Save thousands on agencies */}
          <div className="basis-full h-full min-w-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 !p-6 overflow-hidden shadow-lg" style={{background: 'var(--card-gradient)'}}>
            {/* Title row with badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <h3 className="font-bold text-[var(--primary-color)] text-lg md:text-xl">
                Save thousands on agencies
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base !mt-2">
              Let AI track performance, recommend changes, and optimize daily.
            </p>
            
            {/* Image - Dashboard mockup */}
            <div className="!mt-6 flex items-center justify-center">
              <img 
                src="/2cdcfee16fdc2f54d4c4aed45655809a162c210a.png" 
                alt="Dashboard UI" 
                className="w-full max-w-md object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Card 2 - Always-on Anomaly Detection */}
          <div className="basis-full h-full min-w-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 !p-6 overflow-hidden shadow-lg" style={{background: 'var(--card-gradient)'}}>
            {/* Title row with badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <h3 className="  font-bold text-[var(--primary-color)] text-lg md:text-xl">
                Always-on Anomaly Detection
              </h3>
            </div>
            
            {/* Description */}
            <p className="  text-gray-600 text-sm md:text-base !mt-2">
              Get notified of sudden changes in spend, sales, stock, or customer behavior — before it hurts your business.
            </p>
            
            {/* Image - Email notification mockup */}
            <div className="!mt-6 flex items-center justify-center">
              <img 
                src="/cf5da52ad40431d0aa7ae89d7c3d8bf75cad8080.png" 
                alt="Email Notification UI" 
                className="w-full max-w-md object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Card 3 - All-in-one AI platform */}
          <div className="basis-full h-full min-w-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 !p-6 overflow-hidden shadow-lg" style={{background: 'var(--card-gradient)'}}>
            {/* Title row with badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <h3 className="  font-bold text-[var(--primary-color)] text-lg md:text-xl">
                All-in-one AI platform
              </h3>
            </div>
            
            {/* Description */}
            <p className="  text-gray-600 text-sm md:text-base !mt-2">
              Unify Shopify, Facebook Ads, and more — and manage everything through a single intelligent system of AI agents.
            </p>
            
            {/* Image - Platform metrics */}
            <div className="!mt-6 flex items-center justify-center">
              <img 
                src="/smartAgent-card-3.png" 
                alt="Platform Metrics UI" 
                className="w-full max-w-xs object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="flex flex-wrap items-stretch !gap-3 md:!gap-4 !mt-2 md:grid md:grid-cols-3">
          
          {/* Card 4 - Conversational Analytics + Custom Reports */}
          <div className="basis-full md:col-span-2 z-51 h-full min-w-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 !p-6 overflow-hidden shadow-lg flex flex-col md:flex-row items-start" style={{background: 'var(--card-gradient)'}}>
            {/* Left Content */}
            <div className="flex-1 md:pr-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <h3 className="  font-bold text-[var(--primary-color)] text-lg md:text-xl">
                  Conversational Analytics + Custom Reports
                </h3>
              </div>
              <p className="  text-gray-600 text-sm md:text-base !mt-2">
                Ask "Why did ROAS drop this week?" and get a clear answer. Use built-in reports or create custom views tailored to your KPIs.
              </p>
            </div>
            
            {/* Right Side Image */}
            <div className="!mt-6 md:!mt-0 md:w-1/3 flex items-center justify-center">
              <img 
                src="/f5a283296ffbc6ffddfe9cb20b137e92388a5063.png" 
                alt="Chat Interface with Profile" 
                className="w-full max-w-xs object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Card 5 - Data-backed Recommendations */}
          <div className="basis-full h-full min-w-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 !p-6 overflow-hidden shadow-lg" style={{background: 'var(--card-gradient)'}}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <h3 className="  font-bold text-[var(--primary-color)] text-lg md:text-xl">
                Data-backed Recommendations
              </h3>
            </div>
            
            {/* Description */}
            <p className="  text-gray-600 text-sm md:text-base !mt-2">
              Your agents suggest budget shifts, content tweaks, and inventory actions — based on what's really happening in your store.
            </p>
            
            {/* Image - Campaign notification */}
            <div className="!mt-6 flex items-center justify-center">
              <img 
                src="/smartAgent-card-5.png" 
                alt="Campaign Notification UI" 
                className="w-full max-w-sm object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Background Elements removed to avoid positional offsets */}
    </section>
  );
};

export default SmartAgent;
