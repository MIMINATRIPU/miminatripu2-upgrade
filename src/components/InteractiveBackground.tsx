import { useEffect, useRef } from "react";

/** Animated cursor-following gradient blobs + grid backdrop */
const InteractiveBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let tx = 0, ty = 0, x = 0, y = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      {/* cursor blob */}
      <div
        ref={blobRef}
        className="absolute h-[600px] w-[600px] rounded-full opacity-40 blur-3xl will-change-transform"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.5), transparent 60%)" }}
      />
      {/* corner blobs */}
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
    </div>
  );
};

export default InteractiveBackground;
