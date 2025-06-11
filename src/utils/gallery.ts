export function getGalleryCount() {
  const galleryEntries = import.meta.glob('../content/gallery/*.md', { eager: true });
  return Object.keys(galleryEntries).length;
}
