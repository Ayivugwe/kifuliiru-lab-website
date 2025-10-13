'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  readTime: string
}

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { t } = useLanguage()

  // Convert markdown-like content to HTML (simplified)
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^\- \*\*(.*?)\*\* (.*$)/gim, '<li><strong>$1</strong> $2</li>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(.*)$/gim, '<p>$1</p>')
      .replace(/<p><h/g, '<h')
      .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
      .replace(/<p><li>/g, '<ul><li>')
      .replace(/<\/li><\/p>/g, '</li></ul>')
  }

  return (
    <div className="blog-post">
      <div className="blog-post-header">
        <Link href="/blog" className="blog-back-link">
          {t('blog.back_to_blog')}
        </Link>
        
        <h1 className="blog-post-title">{post.title}</h1>
        
        <div className="blog-post-meta">
          <span className="blog-post-date">
            {t('blog.published_on')}: {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="blog-post-author">
            {t('blog.author')}: {post.author}
          </span>
          <span className="blog-post-read-time">
            {post.readTime}
          </span>
        </div>
        
        <div className="blog-post-tags">
          <span className="blog-post-tags-label">{t('blog.tags')}:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="blog-post-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
      />
    </div>
  )
}
