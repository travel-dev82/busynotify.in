import { db } from '@/lib/db'

export interface Author {
  id: string
  name: string
  email: string
  bio: string | null
  avatar: string | null
  role: string | null
  twitter: string | null
  linkedin: string | null
  website: string | null
  isDefault: boolean
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: Date
  author: Author
  image: string | null
  tags: string[]
  readingTime: string
  content: string
}

// Helper to convert DB post to BlogPost interface
function toBlogPost(post: {
  slug: string
  title: string
  description: string
  publishedAt: Date
  image: string | null
  tags: string
  readingTime: string
  content: string
  author: {
    id: string
    name: string
    email: string
    bio: string | null
    avatar: string | null
    role: string | null
    twitter: string | null
    linkedin: string | null
    website: string | null
    isDefault: boolean
  }
}): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    image: post.image,
    tags: post.tags.split(',').map(tag => tag.trim()),
    readingTime: post.readingTime,
    content: post.content,
    author: {
      id: post.author.id,
      name: post.author.name,
      email: post.author.email,
      bio: post.author.bio,
      avatar: post.author.avatar,
      role: post.author.role,
      twitter: post.author.twitter,
      linkedin: post.author.linkedin,
      website: post.author.website,
      isDefault: post.author.isDefault,
    },
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await db.blogPost.findUnique({
    where: { slug },
    include: {
      author: true,
    },
  })

  if (!post) return null
  return toBlogPost(post)
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await db.blogPost.findMany({
    where: { published: true },
    include: {
      author: true,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  })

  return posts.map(toBlogPost)
}

export async function getRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  const currentPost = await getBlogPost(currentSlug)
  if (!currentPost) return []

  const posts = await db.blogPost.findMany({
    where: {
      slug: { not: currentSlug },
      published: true,
    },
    include: {
      author: true,
    },
    take: limit,
  })

  // Filter by matching tags
  const relatedPosts = posts.filter(post => {
    const postTags = post.tags.split(',').map(tag => tag.trim())
    return postTags.some(tag => currentPost.tags.includes(tag))
  })

  return relatedPosts.map(toBlogPost)
}

export async function getDefaultAuthor() {
  const author = await db.author.findFirst({
    where: { isDefault: true },
  })
  return author
}
