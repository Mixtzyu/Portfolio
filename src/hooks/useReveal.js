import { useEffect, useRef } from "react";

/**
 * useReveal – attaches an IntersectionObserver to the ref'd element.
 * When the element enters the viewport it gets the "visible" class added,
 * which triggers the CSS transition defined in index.css.
 *
 * @param {object} options
 * @param {number}  options.threshold  - 0..1, default 0.12
 * @param {string}  options.rootMargin - CSS margin, default "0px 0px -60px 0px"
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // fire only once
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * useRevealAll – observes EVERY element inside the ref'd container
 * that has a class starting with "reveal". Useful for lists / grids.
 */
export function useRevealAll(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll(
      "[class*='reveal']"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return containerRef;
}
