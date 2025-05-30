// src/content.config.ts

import { defineCollection } from 'astro:content';

export const collections = {
  gallery: defineCollection({
    type: 'markdown', // 定义为 Markdown 文件集合
    schema: {
      title: 'string',
      description: 'string',
      image: 'string',
      date: 'string',
      featured: 'boolean',
    },
  }),
  albums: defineCollection({
    type: 'markdown', // 如果 albums 是 JSON 数据，可以设置为 json 类型
    schema: {
      title: 'string',
      description: 'string',
      coverImage: 'string', // 专辑封面
    },
  }),
};
