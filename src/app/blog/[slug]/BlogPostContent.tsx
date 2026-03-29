"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Twitter, 
  Linkedin, 
  Globe, 
  Share2, 
  Copy, 
  Check,
  Bookmark,
  ChevronRight,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";
import { useState } from "react";

interface Props {
  post: BlogPost;
}

export function BlogPostContent({ post }: Props) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          description: post.description,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      handleCopyLink();
    }
  };

  // Extract headings for table of contents
  const headings = extractHeadings(post.content);

  return (
    <div className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            
            {/* Description */}
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author.name}</div>
                  <div className="text-xs">{post.author.role}</div>
                </div>
              </div>
              
              <div className="w-px h-8 bg-border hidden sm:block" />
              
              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              
              {/* Reading Time */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={handleCopyLink}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => setBookmarked(!bookmarked)}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-primary text-primary' : ''}`} />
                {bookmarked ? 'Saved' : 'Save'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-6 lg:py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/20"
          >
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/30 mb-2">BN</div>
                  <div className="text-white/50 text-sm">BusyNotify</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wider">
                      Table of Contents
                    </h3>
                    <nav className="space-y-1">
                      {headings.map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className={`block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-3 ${
                            heading.level === 3 ? 'pl-6 text-xs' : ''
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                {/* Author Card Sidebar */}
                <Card className="mt-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wider">
                      Written by
                    </h3>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="font-semibold">{post.author.name}</div>
                      {post.author.role && (
                        <div className="text-xs text-muted-foreground mb-2">{post.author.role}</div>
                      )}
                      {post.author.bio && (
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                          {post.author.bio}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-3">
                        {post.author.twitter && (
                          <a
                            href={`https://twitter.com/${post.author.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {post.author.linkedin && (
                          <a
                            href={`https://linkedin.com/${post.author.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {post.author.website && (
                          <a
                            href={post.author.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold">Found this helpful?</h3>
                    <p className="text-sm text-muted-foreground">Share it with others who might benefit</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`}
                      className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center hover:bg-muted/80 transition-colors"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Author Image */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Author Info */}
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      About the Author
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{post.author.name}</h3>
                    {post.author.role && (
                      <div className="text-primary font-medium mb-3">{post.author.role}</div>
                    )}
                    {post.author.bio && (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.author.bio}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      {post.author.twitter && (
                        <a
                          href={`https://twitter.com/${post.author.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Twitter className="w-4 h-4" />
                          @{post.author.twitter}
                        </a>
                      )}
                      {post.author.linkedin && (
                        <a
                          href={`https://linkedin.com/${post.author.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      )}
                      {post.author.website && (
                        <a
                          href={post.author.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Globe className="w-4 h-4" />
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Ready to Automate Your BUSY Software?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of Indian businesses already using BusyNotify to streamline their 
              accounting workflows and get paid faster.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="glow-teal" asChild>
                <Link href="/pricing">Start Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Extract headings from content for table of contents
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(##|###) (.+)$/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const level = match[1] === '##' ? 2 : 3;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    headings.push({ id, text, level });
  }

  return headings;
}

// Enhanced markdown to HTML conversion
function formatContent(content: string): string {
  return content
    // Headers with IDs for anchor links
    .replace(/^## (.+)$/gm, '<h2 id="$1" class="text-2xl font-bold mt-12 mb-4 scroll-mt-20">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 id="$1" class="text-xl font-semibold mt-8 mb-3 scroll-mt-20">$1</h3>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="px-2 py-1 rounded-md bg-muted text-accent text-sm font-mono">$1</code>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]+?)```/g, '<pre class="my-6 p-4 rounded-lg bg-muted overflow-x-auto border border-border"><code class="text-sm font-mono text-foreground">$2</code></pre>')
    // Lists
    .replace(/^- (.+)$/gm, '<li class="ml-6 mb-2 text-muted-foreground">$1</li>')
    .replace(/(<li.+<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-6 mb-2 text-muted-foreground list-decimal">$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote class="my-6 pl-4 border-l-4 border-primary italic text-muted-foreground">$1</blockquote>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="my-8 border-border" />')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="my-4 text-muted-foreground leading-relaxed">')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p class="my-4 text-muted-foreground leading-relaxed">${match}</p>`;
    });
}
