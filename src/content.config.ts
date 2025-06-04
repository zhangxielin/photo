import { defineCollection, z } from 'astro:content';

const albumsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    date: z.date(),
    Featured: z.boolean().default(false),
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content', // ✅ 添加这行！
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  albums: albumsCollection,
  gallery: galleryCollection,
  pages,
};
