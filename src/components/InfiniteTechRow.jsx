export default function InfiniteTechRow({ children, direction = "left", speed = 26, label }) {
  const items = Array.isArray(children) ? children : [children];
  const doubled = [...items, ...items];
  return (
    <div
      className="tech-marquee overflow-hidden"
      aria-label={label}
      style={{ maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}
    >
      <div
        className="tech-track flex w-max gap-2 py-0.5"
        style={{ animationDuration: `${speed}s`, animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {doubled.map((child, i) => (
          <div key={i} aria-hidden={i >= items.length} className="w-[118px] shrink-0 md:w-[132px]">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
