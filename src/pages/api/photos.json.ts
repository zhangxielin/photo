import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const GET: APIRoute = async ({ request }) => {
  const galleryDir = path.resolve('src/content/gallery');
  const files = fs.readdirSync(galleryDir).filter((f) => f.endsWith('.md'));
  const url = new URL(request.url);
  const filter = url.searchParams.get('filter') || 'latest';

  const entries = files.map((file) => {
    const filePath = path.join(galleryDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    return {
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      featured: data.featured ?? false,
    };
  });

  let result = [...entries];

  if (filter === 'latest') {
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (filter === 'random') {
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    console.log('[API] 打乱顺序后的标题顺序:', result.map(p => p.title));
  } else if (filter === 'featured') {
    result = result.filter(photo => photo.featured === true);
  }

  return new Response(JSON.stringify(result.slice(0, 20)), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
