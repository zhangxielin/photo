// src/content.config.ts
import { defineCollection, z } from 'astro:content'; // 注意导入 `z`

const albumsCollection = defineCollection({
  type: 'content', // 或 'data'（如果是 Markdown/JSON 内容，通常用 'content'）
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(), // 封面图片路径
    // 可选：添加默认值或额外约束
    date: z.date(), // 日期字段
    Featured: z.boolean().default(false), // 默认值
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(), // 图片路径
    date: z.date(),   // 必填日期
    featured: z.boolean().default(false), // 默认 false
  }),
});

// 导出集合
export const collections = {
  albums: albumsCollection,
  gallery: galleryCollection,
};