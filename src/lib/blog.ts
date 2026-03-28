export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  image?: string;
  tags: string[];
  readingTime: string;
  content: string;
}

// In production, this would fetch from a CMS or MDX files
export const blogPosts: BlogPost[] = [
  {
    slug: "intelligent-notification-routing",
    title: "Intelligent Notification Routing: The Future of Alert Management",
    description: "Learn how AI-powered routing can reduce alert fatigue by 80% and ensure critical notifications reach the right people at the right time.",
    publishedAt: "2026-03-15",
    author: "Priya Sharma",
    image: "/images/blog/intelligent-routing.png",
    tags: ["AI", "Notifications", "Best Practices"],
    readingTime: "8 min read",
    content: `
# Intelligent Notification Routing: The Future of Alert Management

In today's fast-paced digital landscape, teams are drowning in notifications. The average knowledge worker receives over 100 notifications per day, leading to alert fatigue and missed critical alerts. This is where intelligent notification routing comes in.

## The Problem with Traditional Notifications

Traditional notification systems follow simple rules: if X happens, notify Y. But this approach doesn't account for:

- **Context**: Is this a critical production issue or a minor staging alert?
- **Timing**: Is the on-call engineer in a different time zone?
- **Priority**: Should this wake someone up at 3 AM or can it wait until morning?
- **History**: Have we seen this issue before? Was it resolved quickly?

## How AI Changes Everything

Machine learning models can analyze your historical alert data to understand:

1. **Alert patterns**: Which alerts tend to be critical vs. noise
2. **Response patterns**: Who typically responds to what types of issues
3. **Time patterns**: When are different team members most responsive
4. **Resolution patterns**: How long different types of issues take to resolve

## Implementation Strategies

### Start with Data Collection

Before you can implement intelligent routing, you need historical data. Start by:

- Logging all alert events and their outcomes
- Tracking response times and resolution times
- Categorizing alerts by severity and type

### Build Your Models

Work with your data science team or use pre-built models to:

- Classify alert severity automatically
- Predict escalation needs
- Identify optimal routing paths

### Iterate and Improve

AI systems improve over time. Continuously:

- Monitor routing accuracy
- Gather team feedback
- Retrain models with new data

## The Results Speak for Themselves

Teams that implement intelligent notification routing typically see:

- **80% reduction** in alert fatigue
- **50% faster** mean time to resolution
- **95% improvement** in on-call satisfaction

## Getting Started

Ready to transform your notification strategy? Start with our free tier and see the difference intelligent routing can make for your team.
    `,
  },
  {
    slug: "webhook-triggers-best-practices",
    title: "Webhook Triggers: Best Practices for Reliable Integrations",
    description: "A comprehensive guide to implementing webhook triggers that are reliable, secure, and scalable.",
    publishedAt: "2026-03-10",
    author: "Rahul Patel",
    image: "/images/blog/webhook-triggers.png",
    tags: ["Webhooks", "Integrations", "Technical"],
    readingTime: "12 min read",
    content: `
# Webhook Triggers: Best Practices for Reliable Integrations

Webhooks are the backbone of modern integration architectures. When implemented correctly, they enable real-time communication between services. When done poorly, they become a source of endless debugging headaches.

## Understanding Webhook Architecture

A webhook is essentially an HTTP callback: when an event occurs in one system, it makes an HTTP request to another system. Simple in concept, but complex in practice.

### Key Components

1. **Event Source**: The system generating events
2. **Webhook Endpoint**: The URL receiving the webhook
3. **Payload**: The data being transmitted
4. **Signature**: Security verification

## Best Practice #1: Implement Retry Logic

Network failures happen. Your webhook system should:

- Retry failed deliveries with exponential backoff
- Have a maximum retry limit (typically 5-10 attempts)
- Log all retry attempts for debugging

\`\`\`typescript
const retryConfig = {
  maxRetries: 5,
  initialDelay: 1000,
  maxDelay: 30000,
  backoffMultiplier: 2
};
\`\`\`

## Best Practice #2: Secure Your Webhooks

Security isn't optional. Always:

- Use HTTPS endpoints
- Verify signatures using HMAC
- Include timestamps to prevent replay attacks
- Rotate secrets regularly

## Best Practice #3: Handle Payload Size

Large payloads can cause issues:

- Keep payloads under 1MB when possible
- Consider using a reference ID instead of full data
- Implement compression for large payloads

## Best Practice #4: Monitor Everything

Comprehensive monitoring includes:

- Delivery success rates
- Response times
- Error rates by type
- Endpoint availability

## Conclusion

Well-implemented webhooks are the foundation of reliable integrations. Follow these best practices and you'll build systems that scale gracefully and fail gracefully.
    `,
  },
  {
    slug: "reducing-alert-fatigue",
    title: "Reducing Alert Fatigue: A Practical Guide for Engineering Teams",
    description: "Practical strategies to reduce alert fatigue without missing critical incidents.",
    publishedAt: "2026-03-05",
    author: "Ananya Krishnan",
    image: "/images/blog/alert-fatigue.png",
    tags: ["Alert Fatigue", "DevOps", "Best Practices"],
    readingTime: "6 min read",
    content: `
# Reducing Alert Fatigue: A Practical Guide for Engineering Teams

Alert fatigue is real, and it's dangerous. When engineers are bombarded with hundreds of notifications, they start to ignore them—even the critical ones. Here's how to break the cycle.

## The Hidden Cost of Alert Fatigue

Beyond the obvious frustration, alert fatigue leads to:

- **Missed incidents**: Critical alerts get lost in the noise
- **Burnout**: Engineers leave teams that are always "on"
- **Slower response**: When everything is urgent, nothing is
- **Culture erosion**: Blame games replace collaboration

## The Three-Layer Approach

### Layer 1: Reduce at the Source

Stop alerts before they start:

- Review and remove unnecessary monitors
- Tune thresholds to reduce false positives
- Implement alert deduplication
- Use maintenance windows wisely

### Layer 2: Intelligently Aggregate

Combine related alerts:

- Group alerts by service or infrastructure
- Implement intelligent bundling
- Use AI to identify related incidents
- Create escalation policies that make sense

### Layer 3: Optimize Delivery

Get alerts to the right people:

- Route based on expertise, not just rotation
- Consider time zones and working hours
- Use appropriate channels (Slack vs. SMS vs. Phone)
- Implement smart throttling

## Measuring Success

Track these metrics to measure improvement:

- Alerts per engineer per day (target: <10)
- False positive rate (target: <5%)
- Mean time to acknowledge
- Engineer satisfaction scores

## Getting Started

Start with an audit. Export your last month of alerts and ask:

1. Which alerts were actionable?
2. Which alerts could have been prevented?
3. Which alerts were duplicates?
4. Which alerts woke someone up unnecessarily?

The answers will guide your first improvements.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit);
}
