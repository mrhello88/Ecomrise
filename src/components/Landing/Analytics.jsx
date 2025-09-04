import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Analytics = () => {
  const scrollContainerRef = useRef(null);
  const secondCardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const secondCard = secondCardRef.current;
    if (!container || !secondCard) return;

    const targetScrollLeft =
      secondCard.offsetLeft -
      (container.clientWidth - secondCard.clientWidth) / 2;
    container.scrollTo({ left: Math.max(0, targetScrollLeft) });
  }, []);

  // Global mouse up listener to prevent drag from getting stuck
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        const x = e.pageX;
        const walk = x - startX;
        scrollContainerRef.current.scrollLeft = dragScrollLeft - walk;
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isDragging) {
        setIsDragging(false);
      }
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDragging, startX, dragScrollLeft]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    setDragScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = dragScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Add touch support for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = dragScrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Helpers to compute snapping scroll positions
  const getTrackAndCards = () => {
    const container = scrollContainerRef.current;
    if (!container) return { container: null, track: null, cards: [] };
    const track = container.firstElementChild;
    if (!track) return { container, track: null, cards: [] };
    const cards = Array.from(track.children);
    return { container, track, cards };
  };

  const getCenteredScrollLeftForCard = (container, card) => {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const left =
      card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
    return Math.max(0, Math.min(left, maxScrollLeft));
  };

  const getCurrentCardIndex = () => {
    const { container, cards } = getTrackAndCards();
    if (!container || cards.length === 0) return 0;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    return nearestIndex;
  };

  const scrollToLeft = () => {
    const { container, cards } = getTrackAndCards();
    if (!container || cards.length === 0) return;
    const current = getCurrentCardIndex();
    const target = Math.max(0, current - 1);
    let left;
    if (target === 0) {
      left = 0; // show first card fully
    } else {
      left = getCenteredScrollLeftForCard(container, cards[target]);
    }
    container.scrollTo({ left, behavior: "smooth" });
  };

  const scrollToRight = () => {
    const { container, cards } = getTrackAndCards();
    if (!container || cards.length === 0) return;
    const current = getCurrentCardIndex();
    const lastIndex = cards.length - 1;
    const target = Math.min(lastIndex, current + 1);
    let left;
    if (target === lastIndex) {
      left = container.scrollWidth - container.clientWidth; // show last card fully
    } else {
      left = getCenteredScrollLeftForCard(container, cards[target]);
    }
    container.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-white py-16! md:py-20! flex flex-col items-center">
      {/* Centered container matching other sections */}
      <div className="w-full max-w-[calc(80rem+10rem)]">
        {/* Header Section */}
        <div className="text-center mb-3! md:mb-6!">
          {/* Top subtitle */}
          <p className="text-[var(--primary-color)] text-base md:text-lg font-medium mb-4!">
            Our platform adapts to you.
          </p>

          {/* Main headline */}
          <h2 className="text-3xl! md:text-4xl! lg:text-5xl! xl:text-6xl! leading-[120%] font-medium text-[var(--tertiary-color)]">
            Meet Your{" "}
            <span className="block md:inline mt-3 md:mt-0 font-bold text-[var(--primary-color)]">
              AI Co-Workers
            </span>
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            className={`overflow-x-auto scrollbar-hide pb-3! md:pb-8! ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ userSelect: "none" }}
          >
            <div className="flex gap-6! md:gap-10!">
              {/* Analytics Agent Card */}
              <div className="flex-shrink-0 w-[350px]! md:w-[1059px]! 2xl:w-auto h-[345px]! md:h-[486px]! 2xl:h-auto rounded-3xl relative overflow-hidden features-gradient">
                {/* Feature Background */}
                <img
                  src="/Mobile-Mask-group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 block md:hidden"
                />
                <img
                  src="/Mask-Group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 hidden md:block"
                />

                {/* Additional overlay images (behind avatar) */}
                <div className="absolute inset-0 z-10">
                  {/* Left image, slightly above avatar center */}
                  <img
                    src="/Mask-Group-card-1-2.png"
                    alt="analytics-card-right"
                    className="absolute top-[18%] md:left-20 md:top-[30%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                  {/* Right image, slightly below avatar center */}
                  <img
                    src="/Mask-Group-card-1-1.png"
                    alt="analytics-card-left"
                    className="absolute -right-2 top-[27%] md:right-24 md:-top-[2%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                </div>
                {/* Avatar in Center */}
                <div className="absolute bottom-0 left-0 right-0 md:inset-0 flex items-center justify-center z-20">
                  <img
                    src="/illustratorAvtar.png"
                    alt="Illustrator Avatar"
                    className="w-[265px] h-[253px] md:w-full md:h-full object-contain"
                  />
                </div>

                {/* Content Overlay - Heading and Description */}
                <div className="absolute top-4 left-0 right-0 md:top-8 md:left-8 md:right-auto flex flex-col items-center md:items-start z-20 px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-3">
                    Analytics Agent
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs">
                    Ask, explore, view key reports, and build custom dashboards
                    that fit your store.
                  </p>
                </div>
              </div>
              {/* Analytics Agent Card (duplicate 1) */}
              <div
                ref={secondCardRef}
                className="flex-shrink-0 w-[350px]! md:w-[1059px]! 2xl:w-auto h-[345px]! md:h-[486px]! 2xl:h-auto rounded-3xl relative overflow-hidden features-gradient"
              >
                {/* Feature Background */}
                <img
                  src="/Mobile-Mask-group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 block md:hidden"
                />
                <img
                  src="/Mask-Group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 hidden md:block"
                />
                {/* Additional overlay images (behind avatar) */}
                <div className="absolute inset-0 z-10">
                  <img
                    src="/Mask-Group-card-1-2.png"
                    alt="analytics-card-right"
                    className="absolute top-[18%] md:left-20 md:top-[30%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                  <img
                    src="/Mask-Group-card-1-1.png"
                    alt="analytics-card-left"
                    className="absolute -right-2 top-[27%] md:right-24 md:-top-[2%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                </div>
                {/* Avatar in Center */}
                <div className="absolute bottom-0 left-0 right-0 md:inset-0 flex items-center justify-center z-20">
                  <img
                    src="/illustratorAvtar.png"
                    alt="Illustrator Avatar"
                    className="w-[265px] h-[253px] md:w-full md:h-full object-contain"
                  />
                </div>
                {/* Content Overlay - Heading and Description */}
                <div className="absolute top-4 left-0 right-0 md:top-8 md:left-8 md:right-auto flex flex-col items-center md:items-start z-20 px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-3">
                    Analytics Agent
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs">
                    Ask, explore, view key reports, and build custom dashboards
                    that fit your store.
                  </p>
                </div>
              </div>
              {/* Analytics Agent Card (duplicate 2) */}
              <div className="flex-shrink-0 w-[350px]! md:w-[1059px]! h-[345px]! md:h-[486px]! 2xl:h-auto rounded-3xl relative overflow-hidden features-gradient">
                {/* Feature Background */}
                <img
                  src="/Mobile-Mask-group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 block md:hidden"
                />
                <img
                  src="/Mask-Group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 hidden md:block"
                />
                {/* Additional overlay images (behind avatar) */}
                <div className="absolute inset-0 z-10">
                  <img
                    src="/Mask-Group-card-1-2.png"
                    alt="analytics-card-right"
                    className="absolute top-[18%] md:left-20 md:top-[30%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                  <img
                    src="/Mask-Group-card-1-1.png"
                    alt="analytics-card-left"
                    className="absolute -right-2 top-[27%] md:right-24 md:-top-[2%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                </div>
                {/* Avatar in Center */}
                <div className="absolute bottom-0 left-0 right-0 md:inset-0 flex items-center justify-center z-20">
                  <img
                    src="/illustratorAvtar.png"
                    alt="Illustrator Avatar"
                    className="w-[265px] h-[253px] md:w-full md:h-full object-contain"
                  />
                </div>
                {/* Content Overlay - Heading and Description */}
                <div className="absolute top-4 left-0 right-0 md:top-8 md:left-8 md:right-auto flex flex-col items-center md:items-start z-20 px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-3">
                    Analytics Agent
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs">
                    Ask, explore, view key reports, and build custom dashboards
                    that fit your store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Arrows - Bottom Right */}
        <div className="absolute bottom-8 right-4 md:right-8 flex gap-3 z-30">
          <button
            onClick={scrollToLeft}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollToRight}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-base md:!px-0 px-12! md:text-lg italic text-[#7E8492]">
            This is what makes us different—our platform adapts to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
