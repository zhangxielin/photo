import { defineCollection, z } from 'astro:content';

const albumsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    date: z.date(),
    path: z.string(), // ✅ 替代 slug
    featured: z.boolean().default(false)
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
    albums: z.union([
      z.string(),
      z.array(z.string())
    ]).optional(), // ✅ 可为单个专辑或多个专辑
  }),
});

const pages = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
  }),
});



export const collections = {
  albums: albumsCollection,
  gallery: galleryCollection,
  pages,
};
