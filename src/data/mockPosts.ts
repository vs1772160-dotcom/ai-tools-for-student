export interface Post {
  id: string;
  slug: string;
  title: string;
  snippet: string;
  featuredImage?: string;
  category: string;
  labels: string[];
  date: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  readTime: string;
  rating?: number;
  logoType?: string;
  websiteUrl?: string;
  brandHex?: string;
  shortBadge?: string;
  contentHtml: string;
  comments: Array<{
    id: string;
    author: string;
    date: string;
    content: string;
  }>;
}

export const SAMPLE_POSTS: Post[] = [
  {
    id: 'gpt-1',
    slug: 'chatgpt-4o-o3-review',
    title: 'ChatGPT & OpenAI o3-mini Review: Advanced Voice, Reasoning & Canvas',
    snippet: 'Comprehensive test of GPT-4o real-time voice mode, o3-mini math/coding reasoning benchmarks, and Canvas collaboration tools.',
    category: 'Chatbots',
    labels: ['Chatbots', 'Productivity'],
    date: 'Oct 11, 2026',
    readTime: '7 min read',
    rating: 4.9,
    logoType: 'chatgpt',
    websiteUrl: 'https://chatgpt.com',
    brandHex: '#10A37F',
    shortBadge: 'OpenAI',
    author: {
      name: 'Aman Sharma',
      role: 'Staff Engineer & Tool Reviewer',
    },
    contentHtml: `
      <p class="lead" style="font-size: 1.15em; color: var(--text-2); margin-bottom: 24px;">
        OpenAI's flagship ChatGPT ecosystem remains the global reference point for AI assistants. With the integration of GPT-4o, the o3 reasoning series, and interactive Canvas, we tested its real-world performance for writing, coding, and problem-solving.
      </p>
      <h2>1. The Power of o3-mini for Logic & Code</h2>
      <p>
        The o3-mini model delivers chain-of-thought verification without the sluggish latency of previous generation reasoning models. In our competitive programming benchmark suite, it achieved an 89.4% first-pass pass rate.
      </p>
      <blockquote>
        "Canvas has transformed ChatGPT from a ephemeral chat interface into a persistent document and code workspace with inline commentary."
      </blockquote>
      <h2>2. Pricing & Plans Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Tier</th>
            <th>Monthly Cost</th>
            <th>Key Inclusions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Free</td>
            <td>$0</td>
            <td>GPT-4o mini, basic GPT-4o limits, standard voice</td>
          </tr>
          <tr>
            <td>Plus</td>
            <td>$20</td>
            <td>5x message caps, o3 reasoning models, advanced voice, Canvas</td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>$200</td>
            <td>Unlimited fast reasoning tokens, highest compute priority</td>
          </tr>
        </tbody>
      </table>
    `,
    comments: [
      {
        id: 'cg1',
        author: 'Karan Verma',
        date: 'Oct 11, 2026',
        content: 'The voice mode latency is shockingly low. Feels like talking to a real human tutor.',
      },
    ],
  },
  {
    id: 'gemini-1',
    slug: 'google-gemini-2-flash-pro-review',
    title: 'Google Gemini 2.0 Flash & Pro Review: 2 Million Context Tokens Tested',
    snippet: 'We stress-tested Gemini 2.0 with entire codebases, 1,000-page financial PDFs, and video feeds. Here are the multimodal benchmarks.',
    category: 'Chatbots',
    labels: ['Chatbots', 'Dev Tools'],
    date: 'Oct 09, 2026',
    readTime: '6 min read',
    rating: 4.88,
    logoType: 'gemini',
    websiteUrl: 'https://gemini.google.com',
    brandHex: '#4E75F6',
    shortBadge: 'Google DeepMind',
    author: {
      name: 'Priya Patel',
      role: 'AI Research Lead',
    },
    contentHtml: `
      <p class="lead" style="font-size: 1.15em; color: var(--text-2); margin-bottom: 24px;">
        Google DeepMind's Gemini 2.0 series represents a breakthrough in long-context retrieval and real-time multimodal latency. Here is our detailed review.
      </p>
      <h2>1. The 2-Million Token Needle-In-A-Haystack Test</h2>
      <p>
        We loaded 1.8 million tokens of enterprise server logs and buried single-line security anomalies across random intervals. Gemini 2.0 Pro achieved 99.8% retrieval accuracy in under 4 seconds.
      </p>
      <blockquote>
        "The deep integration with Google Workspace (Docs, Gmail, Drive) makes Gemini an unrivaled productivity engine for enterprise teams."
      </blockquote>
      <h2>2. Benchmark Scorecard</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Gemini 2.0 Pro</th>
            <th>GPT-4o</th>
            <th>Claude 3.7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Context Length</td>
            <td>2,000,000</td>
            <td>128,000</td>
            <td>200,000</td>
          </tr>
          <tr>
            <td>Multimodal Video/Audio</td>
            <td>9.9 / 10</td>
            <td>9.2 / 10</td>
            <td>N/A (Text/Vision)</td>
          </tr>
          <tr>
            <td>Ecosystem Integration</td>
            <td>Google Cloud / Workspace</td>
            <td>OpenAI API / Zapier</td>
            <td>MCP / AWS Bedrock</td>
          </tr>
        </tbody>
      </table>
    `,
    comments: [],
  },
  {
    id: '1',
    slug: 'cursor-ai-review-2026',
    title: 'Cursor AI Review: Is It Still the Undisputed Best AI Code Editor?',
    snippet: 'An in-depth hands-on test of Cursor\'s multi-file edits, background composer agent, custom rules, and latency benchmarks compared to rivals.',
    category: 'Dev Tools',
    labels: ['Dev Tools', 'Code Copilots'],
    date: 'Oct 10, 2026',
    readTime: '6 min read',
    rating: 4.9,
    logoType: 'cursor',
    websiteUrl: 'https://cursor.com',
    brandHex: '#0F172A',
    shortBadge: 'Anysphere',
    author: {
      name: 'Aman Sharma',
      role: 'Staff Engineer & Tool Reviewer',
    },
    contentHtml: `
      <p class="lead" style="font-size: 1.15em; color: var(--text-2); margin-bottom: 24px;">
        Over the past year, AI-native IDEs have shifted from novelty auto-complete extensions into autonomous software development companions. Cursor remains the flagship tool everyone compares against. Here is our comprehensive test after 90 days of daily production usage.
      </p>

      <h2>1. The Multi-File Composer Experience</h2>
      <p>
        The standout capability of Cursor is Composer (triggered with <code>Cmd+I</code> or <code>Ctrl+I</code>). Unlike classic single-file chat windows, Composer indexes your codebase using vector embeddings and AST symbols. When you ask it to refactor an API endpoint or add an auth flow, it edits multiple files in parallel and shows clear diffs before applying.
      </p>

      <blockquote>
        "The real superpower is context awareness: Cursor rarely hallucinates non-existent function signatures because it parses the exact types defined across your local workspace."
      </blockquote>

      <h2>2. Key Feature Breakdown & Benchmarks</h2>
      <p>Here is how Cursor stacks up across critical developer workflows:</p>

      <table>
        <thead>
          <tr>
            <th>Workflow Feature</th>
            <th>Cursor Rating</th>
            <th>Performance Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inline Code Completion (Tab)</td>
            <td>9.8 / 10</td>
            <td>Ultra-low latency sub-70ms speculative edits</td>
          </tr>
          <tr>
            <td>Multi-file Edits & Diff Preview</td>
            <td>9.5 / 10</td>
            <td>Clean git-like inline diff preview with reject/accept</td>
          </tr>
          <tr>
            <td>Codebase Indexing (.cursorrules)</td>
            <td>9.2 / 10</td>
            <td>Respects architectural constraints and linters</td>
          </tr>
          <tr>
            <td>Model Flexibility</td>
            <td>9.6 / 10</td>
            <td>Claude 3.7 Sonnet, GPT-4o, and custom local models</td>
          </tr>
        </tbody>
      </table>

      <h2>3. The Secret Weapon: <code>.cursorrules</code></h2>
      <p>By dropping a <code>.cursorrules</code> file into your repository root, you can enforce project standards permanently:</p>

      <pre><code># .cursorrules configuration
always_use_typescript: true
prefer_functional_components: true
css_strategy: "Tailwind CSS v4 with @theme tokens"
error_handling: "Never swallow exceptions in async catch blocks"
tests: "Write Vitest specs alongside implementation files"</code></pre>

      <h2>4. Pricing & Value Verdict</h2>
      <p>
        Cursor offers a generous free tier with 2,000 completions. The Pro tier at $20/month delivers 500 fast requests per month and unlimited slow requests. For any developer spending 20+ hours a week in code, the return on investment is nearly immediate.
      </p>

      <h2>Final Verdict: 4.9 / 5.0 ★</h2>
      <p>
        Cursor remains our top recommendation for frontend and full-stack software engineers in 2026. Its integration speed and ergonomics set the gold standard.
      </p>
    `,
    comments: [
      {
        id: 'c1',
        author: 'Rohan Mehta',
        date: 'Oct 11, 2026 at 14:20',
        content: 'Spot on review! The composer agent saved me at least 15 hours during our migration from React 18 to 19.',
      },
      {
        id: 'c2',
        author: 'Elena Vance',
        date: 'Oct 11, 2026 at 18:45',
        content: 'Have you benchmarked the RAM usage on 16GB MacBooks? Curious if it stays lighter than VS Code with 10 extensions.',
      },
    ],
  },
  {
    id: '2',
    slug: 'claude-3-7-sonnet-reasoning-guide',
    title: 'Claude 3.7 Sonnet & Hybrid Reasoning: The Developer\'s Definitive Guide',
    snippet: 'Everything you need to know about test-time compute, reasoning token budgets, and coding benchmarks in Claude 3.7.',
    category: 'Dev Tools',
    labels: ['Dev Tools', 'Chatbots'],
    date: 'Oct 08, 2026',
    readTime: '8 min read',
    rating: 4.95,
    logoType: 'claude',
    websiteUrl: 'https://claude.ai',
    brandHex: '#D97706',
    shortBadge: 'Anthropic',
    author: {
      name: 'Priya Patel',
      role: 'AI Research Lead',
    },
    contentHtml: `
      <p>
        Anthropic's Claude 3.7 Sonnet introduces hybrid reasoning: the ability to seamlessly switch between lightning-fast standard generation and deep test-time verification. Here is our hands-on evaluation.
      </p>
      <h2>What Makes Hybrid Reasoning Different?</h2>
      <p>
        Previous models forced you to choose between slow "thinking" models (like o1 or R1) and fast chat models. With 3.7 Sonnet, developers can dial the thinking budget anywhere from 0 to 64k tokens per call.
      </p>
      <blockquote>
        "Controlling the reasoning budget programmatically allows apps to keep cost and latency low for easy tasks while spending compute on tricky architectural decisions."
      </blockquote>
      <h2>Practical Code Example</h2>
      <pre><code>const response = await client.messages.create({
  model: "claude-3-7-sonnet",
  max_tokens: 4096,
  thinking: {
    type: "enabled",
    budget_tokens: 2048
  },
  messages: [{ role: "user", content: "Optimize this PostgreSQL join query" }]
});</code></pre>
      <h2>Benchmark Highlights</h2>
      <p>In our tests on full-stack bug finding, Claude 3.7 resolved 74.2% of SWE-bench verified challenges, setting a new frontier milestone.</p>
    `,
    comments: [
      {
        id: 'c3',
        author: 'Marcus Brody',
        date: 'Oct 09, 2026 at 09:12',
        content: 'The ability to set budget_tokens is a huge feature for our cost optimization pipeline.',
      },
    ],
  },
  {
    id: '3',
    slug: 'midjourney-v7-vs-flux-pro',
    title: 'Midjourney v7 vs Flux 1.1 Pro: Which AI Image Generator Reigns Supreme?',
    snippet: 'Side-by-side prompt comparisons for photorealism, typography rendering, fingers, and lighting control.',
    category: 'Image AI',
    labels: ['Image AI', 'Design'],
    date: 'Oct 05, 2026',
    readTime: '5 min read',
    rating: 4.8,
    logoType: 'midjourney',
    websiteUrl: 'https://midjourney.com',
    brandHex: '#4338CA',
    shortBadge: 'Midjourney',
    author: {
      name: 'Sarah Jenkins',
      role: 'Creative Director',
    },
    contentHtml: `
      <p>
        The battle for generative visual dominance is fiercer than ever. Midjourney recently rolled out v7 with their native web editor, while Black Forest Labs dropped Flux 1.1 Pro with API access.
      </p>
      <h2>1. Typography & Text Rendering</h2>
      <p>
        Flux 1.1 Pro wins decisively on short phrases, product branding, and street signs. Midjourney v7 has closed 80% of the gap, but Flux still adheres tighter to exact spelled strings in quotation marks.
      </p>
      <h2>2. Photorealism & Skin Texture</h2>
      <p>
        Midjourney v7 delivers unparalleled cinematic mood, atmospheric grain, and complex lighting bounces. For artistic and advertising concepts, Midjourney still holds the aesthetic crown.
      </p>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Midjourney v7</th>
            <th>Flux 1.1 Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text Accuracy</td>
            <td>9.0 / 10</td>
            <td>9.8 / 10</td>
          </tr>
          <tr>
            <td>Cinematic Lighting</td>
            <td>9.9 / 10</td>
            <td>9.2 / 10</td>
          </tr>
          <tr>
            <td>API Availability</td>
            <td>Closed / Web only</td>
            <td>Full REST API</td>
          </tr>
        </tbody>
      </table>
    `,
    comments: [],
  },
  {
    id: '4',
    slug: 'perplexity-pro-deep-research',
    title: 'Perplexity Pro: Why It Completely Replaced Google for Deep Research',
    snippet: 'From source citation verification to deep research workflows, here is how Perplexity reshaped modern knowledge work.',
    category: 'Chatbots',
    labels: ['Chatbots', 'Productivity'],
    date: 'Sep 29, 2026',
    readTime: '7 min read',
    rating: 4.85,
    logoType: 'perplexity',
    websiteUrl: 'https://perplexity.ai',
    brandHex: '#0D9488',
    shortBadge: 'Perplexity',
    author: {
      name: 'David Chen',
      role: 'Tech Journalist',
    },
    contentHtml: `
      <p>
        Traditional search engines drown in SEO spam and sponsor cards. Perplexity flips the paradigm by synthesizing direct answers backed by inline citations.
      </p>
      <h2>Deep Research Mode Tested</h2>
      <p>
        The recent Deep Research update browses dozens of web pages, compiles data tables, cross-references academic papers, and generates comprehensive multi-page whitepapers within 3 minutes.
      </p>
    `,
    comments: [
      {
        id: 'c4',
        author: 'Liam Wright',
        date: 'Sep 30, 2026',
        content: 'Perplexity Spaces with uploaded PDF libraries has replaced my entire note-taking system.',
      },
    ],
  },
  {
    id: '5',
    slug: 'v0-vs-lovable-ui-builders',
    title: 'v0 by Vercel vs Lovable: Rapid Full-Stack UI Generation Put to the Test',
    snippet: 'We built the same SaaS billing portal in both tools from scratch. Here are the code quality and deployment results.',
    category: 'Dev Tools',
    labels: ['Dev Tools', 'UI Design'],
    date: 'Sep 24, 2026',
    readTime: '6 min read',
    rating: 4.75,
    logoType: 'v0',
    websiteUrl: 'https://v0.dev',
    brandHex: '#18181B',
    shortBadge: 'Vercel',
    author: {
      name: 'Aman Sharma',
      role: 'Staff Engineer & Tool Reviewer',
    },
    contentHtml: `
      <p>
        AI UI generators have evolved far beyond basic component scaffolds. Today they output production React code with Tailwind CSS, Supabase schemas, and responsive layouts.
      </p>
      <h2>The Challenge: Building a Multi-Tier Subscription Portal</h2>
      <p>
        We tasked both v0 and Lovable with generating an interactive billing portal featuring monthly/annual toggles, currency conversions, Stripe webhooks, and invoice history tables.
      </p>
    `,
    comments: [],
  },
  {
    id: '6',
    slug: 'top-free-ai-tools-2026',
    title: 'Top 10 Free AI Tools in 2026 That Feel Like Pure Magic',
    snippet: 'No credit card required. A curated roundup of high-utility open tools, free tiers, and offline local models.',
    category: 'Free Tools',
    labels: ['Free Tools', 'Productivity'],
    date: 'Sep 18, 2026',
    readTime: '5 min read',
    rating: 4.9,
    logoType: 'free-ai',
    websiteUrl: 'https://ollama.com',
    brandHex: '#DB2777',
    shortBadge: 'Open Tools',
    author: {
      name: 'Elena Rostova',
      role: 'Open Source Advocate',
    },
    contentHtml: `
      <p>
        You do not need to pay $20/month for every subscription. Incredible open-source communities and forward-thinking companies offer exceptional free tools right now.
      </p>
      <h2>1. Ollama & OpenWebUI</h2>
      <p>Run Llama 3.3, Mistral, and DeepSeek locally on your laptop with full privacy and zero token fees.</p>
      <h2>2. NotebookLM by Google</h2>
      <p>Upload your research documents, textbooks, or PDFs and get instant synthetic audio podcast discussions and grounded citations.</p>
    `,
    comments: [],
  },
];

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', count: 8 },
  { id: 'AI Tools', name: 'AI Tools', count: 5, icon: 'code', desc: 'AI-native tools, coding copilots, and intelligent assistants' },
  { id: 'Chatbots', name: 'Chatbots', count: 3, icon: 'message-square', desc: 'AI assistants for research, drafting, and problem-solving' },
  { id: 'Image AI', name: 'Image AI', count: 2, icon: 'image', desc: 'Generative art, photo retouching, and visual assets' },
  { id: 'Productivity', name: 'Productivity', count: 4, icon: 'zap', desc: 'Workflow optimizers, voice agents, and note synthesizers' },
  { id: 'Free Tools', name: 'Free Tools', count: 2, icon: 'gift', desc: 'Zero-cost utilities and generous open-source models' },
];
