export function getLang(url?: URL): string {
  const sourceUrl =
    url ||
    (typeof window !== "undefined" ? new URL(window.location.href) : undefined);

  return (
    sourceUrl?.searchParams.get("lang") ||
    (typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : null) ||
    "en"
  );
}
