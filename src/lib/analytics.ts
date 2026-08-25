/**
 * Safe client-side analytics event dispatcher for Google Tag Manager & GA4
 */

export function pushDataLayerEvent(eventData: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  if (!Array.isArray(w.dataLayer)) {
    w.dataLayer = [];
  }
  w.dataLayer.push(eventData);
}
