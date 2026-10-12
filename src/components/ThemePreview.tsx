import { useState, useMemo } from 'react';
import { Post, CATEGORIES } from '../data/mockPosts';
import { ViewType } from './NavbarControls';
import { Search, ArrowLeft, MessageSquare, Star, Send, ExternalLink, Sparkles } from 'lucide-react';
import { AiToolLogo } from './AiToolLogo';

interface ThemePreviewProps {
  posts: Post[];
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  selectedPost: Post;
  onSelectPost: (post: Post) => void;
  brandColor: string;
  onAddComment: (postId: string, author: string, content: string) => void;
}

export function ThemePreview({
  posts,
  currentView,
  onViewChange,
  selectedPost,
  onSelectPost,
  brandColor,
  onAddComment,
}: ThemePreviewProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Comment form state
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Newsletter subscribe feedback
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let result = posts;
    if (selectedCategory && selectedCategory !== 'all') {
      const catLower = selectedCategory.toLowerCase();
      result = result.filter(
        (p) =>
          p.category.toLowerCase() === catLower ||
          p.labels.some((l) => l.toLowerCase() === catLower) ||
          (catLower === 'ai tools' && (p.category.toLowerCase() === 'dev tools' || p.labels.some((l) => l.toLowerCase() === 'dev tools')))
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.snippet.toLowerCase().includes(q) ||
          p.labels.some((l) => l.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat === 'all' ? null : cat);
    onViewChange('home');
    const target = document.getElementById('ai-tools');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onViewChange('home');
    const target = document.getElementById('ai-tools');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePostClick = (post: Post) => {
    if (post.websiteUrl) {
      window.open(post.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    onAddComment(selectedPost.id, commentName.trim(), commentText.trim());
    setCommentName('');
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail.trim()) return;
    setSubscribeSuccess(true);
    setTimeout(() => {
      setSubscribedEmail('');
      setSubscribeSuccess(false);
    }, 4000);
  };

  // Dynamic CSS variables reflecting brand color
  const dynamicStyles = {
    '--brand': brandColor,
    '--brand-dark': brandColor === '#DB2777' ? '#BE185D' : `${brandColor}dd`,
    '--brand-soft': `${brandColor}15`,
  } as React.CSSProperties;

  return (
    <div className="blogger-theme-root min-h-screen bg-white text-slate-900 font-sans" style={dynamicStyles}>
      <style>{`
        .blogger-theme-root {
          --brand: ${brandColor};
          --brand-dark: #BE185D;
          --brand-soft: #FDF2F8;
          --bg: #FFFFFF;
          --bg-subtle: #F8FAFC;
          --bg-inverse: #0F172A;
          --text: #0F172A;
          --text-2: #475569;
          --text-inv: #FFFFFF;
          --text-inv-2: #CBD5E1;
          --border: #E2E8F0;
          --radius: 20px;
          --wrap: 1280px;
        }
        .blogger-theme-root a {
          color: var(--brand);
          text-decoration: none;
        }
        .blogger-theme-root a:hover {
          color: var(--brand-dark);
        }
        .blogger-theme-root .wrap {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: 0 40px;
        }
        .blogger-theme-root .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          line-height: 1;
          border: 1px solid transparent;
          cursor: pointer;
          font-family: inherit;
          transition: background .15s, transform .15s;
        }
        .blogger-theme-root .btn-primary {
          background: var(--brand);
          color: #fff !important;
        }
        .blogger-theme-root .btn-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .blogger-theme-root .btn-secondary {
          background: #fff;
          color: var(--text) !important;
          border-color: var(--border);
        }
        .blogger-theme-root .btn-secondary:hover {
          background: var(--bg-subtle);
        }
        .blogger-theme-root .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .blogger-theme-root .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-top: 18px;
          padding-bottom: 18px;
        }
        .blogger-theme-root .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text) !important;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -.3px;
        }
        .blogger-theme-root .brand-mark {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--brand);
          display: inline-block;
          flex-shrink: 0;
        }
        .blogger-theme-root .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .blogger-theme-root .nav-links {
          display: flex;
          gap: 32px;
        }
        .blogger-theme-root .nav-links a, .blogger-theme-root .nav-links button {
          color: var(--text-2);
          font-weight: 500;
          font-size: 16px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .blogger-theme-root .nav-links a:hover, .blogger-theme-root .nav-links button:hover {
          color: var(--brand);
        }
        .blogger-theme-root .nav-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 20px;
          cursor: pointer;
          color: var(--text);
        }
        .blogger-theme-root .hero {
          background: linear-gradient(180deg, var(--brand-soft) 0%, #fff 100%);
          padding: 96px 0 72px;
          text-align: center;
        }
        .blogger-theme-root .badge {
          display: inline-block;
          background: #fff;
          color: var(--brand);
          border: 1px solid #FBCFE8;
          font-size: 14px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 999px;
        }
        .blogger-theme-root .hero h1 {
          font-size: clamp(38px,6vw,68px);
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 800;
          margin: 28px auto 20px;
          max-width: 900px;
          color: var(--text);
        }
        .blogger-theme-root .hero h1 span {
          color: var(--brand);
        }
        .blogger-theme-root .hero p.lead {
          font-size: 20px;
          color: var(--text-2);
          max-width: 660px;
          margin: 0 auto 36px;
        }
        .blogger-theme-root .search {
          display: flex;
          gap: 10px;
          max-width: 620px;
          margin: 0 auto 28px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(219,39,119,.08);
        }
        .blogger-theme-root .search input {
          flex: 1;
          border: 0;
          outline: 0;
          font-size: 16px;
          padding: 10px 14px;
          font-family: inherit;
          background: transparent;
          color: var(--text);
          min-width: 0;
        }
        .blogger-theme-root .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .blogger-theme-root .chips button, .blogger-theme-root .chips a {
          background: #fff;
          border: 1px solid var(--border);
          color: var(--text-2);
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: border-color .15s, color .15s;
        }
        .blogger-theme-root .chips button:hover, .blogger-theme-root .chips button.active {
          border-color: var(--brand);
          color: var(--brand);
        }
        .blogger-theme-root .block {
          padding: 96px 0;
        }
        .blogger-theme-root .block.subtle {
          background: var(--bg-subtle);
        }
        .blogger-theme-root .sec-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
        }
        .blogger-theme-root .overline {
          color: var(--brand);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .blogger-theme-root .sec-title {
          font-size: clamp(30px,4vw,40px);
          line-height: 1.15;
          letter-spacing: -.8px;
          font-weight: 800;
          margin: 12px 0 14px;
          color: var(--text);
        }
        .blogger-theme-root .sec-sub {
          color: var(--text-2);
          font-size: 18px;
          margin: 0;
        }
        .blogger-theme-root .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .blogger-theme-root .card {
          display: block;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          color: var(--text) !important;
          transition: transform .15s, box-shadow .15s, border-color .15s;
          cursor: pointer;
          text-align: left;
        }
        .blogger-theme-root .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(15,23,42,.08);
          border-color: #FBCFE8;
        }
        .blogger-theme-root .tile {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--brand-soft);
          color: var(--brand);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          font-size: 18px;
        }
        .blogger-theme-root .card h3 {
          font-size: 20px;
          margin: 0 0 10px;
          font-weight: 600;
          color: var(--text);
        }
        .blogger-theme-root .card p {
          margin: 0;
          color: var(--text-2);
          font-size: 15px;
          line-height: 1.5;
        }
        .blogger-theme-root .labels-bar {
          margin-bottom: 36px;
        }
        .blogger-theme-root .labels-bar ul {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .blogger-theme-root .labels-bar button {
          background: #fff;
          border: 1px solid var(--border);
          color: var(--text-2);
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all .15s;
        }
        .blogger-theme-root .labels-bar button:hover, .blogger-theme-root .labels-bar button.active {
          border-color: var(--brand);
          color: var(--brand);
          background: var(--brand-soft);
        }
        .blogger-theme-root .main-area {
          padding: 80px 0;
          background: var(--bg-subtle);
        }
        .blogger-theme-root .list-title {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -.5px;
          margin: 0 0 28px;
          color: var(--text);
        }
        .blogger-theme-root .post-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .blogger-theme-root .post-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .15s, box-shadow .15s;
          cursor: pointer;
        }
        .blogger-theme-root .post-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(15,23,42,.08);
        }
        .blogger-theme-root .post-card .thumb {
          display: block;
          aspect-ratio: 16/9;
          background: var(--brand-soft);
          overflow: hidden;
        }
        .blogger-theme-root .post-card .thumb.empty {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          font-weight: 700;
          font-size: 34px;
          letter-spacing: -1px;
        }
        .blogger-theme-root .post-card .body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .blogger-theme-root .tag {
          display: inline-block;
          background: var(--brand-soft);
          color: var(--brand);
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          margin-right: 6px;
        }
        .blogger-theme-root .post-card h2 {
          font-size: 20px;
          line-height: 1.3;
          margin: 0;
          font-weight: 700;
          color: var(--text);
        }
        .blogger-theme-root .post-card h2 a {
          color: var(--text) !important;
        }
        .blogger-theme-root .post-card:hover h2 a {
          color: var(--brand) !important;
        }
        .blogger-theme-root .post-card .snippet {
          color: var(--text-2);
          font-size: 15px;
          margin: 0;
          line-height: 1.5;
        }
        .blogger-theme-root .meta {
          color: var(--text-2);
          font-size: 13px;
          margin-top: auto;
        }
        .blogger-theme-root .pager {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 48px;
        }
        .blogger-theme-root .article {
          max-width: 780px;
          margin: 0 auto;
        }
        .blogger-theme-root .crumbs {
          font-size: 14px;
          color: var(--text-2);
          margin-bottom: 18px;
        }
        .blogger-theme-root .article h1 {
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.12;
          letter-spacing: -1px;
          font-weight: 800;
          margin: 0 0 16px;
          color: var(--text);
        }
        .blogger-theme-root .article .meta {
          margin: 0 0 32px;
          font-size: 15px;
        }
        .blogger-theme-root .post-body {
          font-size: 18px;
          color: #1E293B;
          line-height: 1.75;
          overflow-wrap: break-word;
        }
        .blogger-theme-root .post-body h2, .blogger-theme-root .post-body h3 {
          letter-spacing: -.4px;
          line-height: 1.25;
          margin: 40px 0 14px;
          color: var(--text);
          font-weight: 700;
        }
        .blogger-theme-root .post-body blockquote {
          margin: 28px 0;
          padding: 14px 22px;
          border-left: 4px solid var(--brand);
          background: var(--brand-soft);
          border-radius: 0 12px 12px 0;
          color: var(--text);
          font-style: italic;
        }
        .blogger-theme-root .post-body code {
          background: var(--brand-soft);
          color: var(--brand-dark);
          padding: 2px 7px;
          border-radius: 6px;
          font-size: .9em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        .blogger-theme-root .post-body pre {
          background: var(--bg-inverse);
          color: #E2E8F0;
          padding: 20px 22px;
          border-radius: 14px;
          overflow: auto;
          font-size: 14.5px;
          line-height: 1.6;
        }
        .blogger-theme-root .post-body pre code {
          background: none;
          color: inherit;
          padding: 0;
          font-size: inherit;
        }
        .blogger-theme-root .post-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
          font-size: 16px;
        }
        .blogger-theme-root .post-body th, .blogger-theme-root .post-body td {
          border: 1px solid var(--border);
          padding: 10px 14px;
          text-align: left;
        }
        .blogger-theme-root .post-body th {
          background: var(--bg-subtle);
          font-weight: 600;
        }
        .blogger-theme-root .post-tags {
          margin: 36px 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .blogger-theme-root .comments {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .blogger-theme-root .comments h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .blogger-theme-root .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          text-align: center;
        }
        .blogger-theme-root .stats b {
          display: block;
          font-size: 56px;
          line-height: 1;
          letter-spacing: -1px;
          color: var(--brand);
          font-weight: 800;
          margin-bottom: 8px;
        }
        .blogger-theme-root .stats span {
          color: var(--text-2);
          font-weight: 500;
          font-size: 16px;
        }
        .blogger-theme-root .cta {
          background: var(--bg-inverse);
          color: var(--text-inv);
          border-radius: 32px;
          padding: 80px 40px;
          text-align: center;
        }
        .blogger-theme-root .cta h2 {
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.12;
          letter-spacing: -1px;
          font-weight: 800;
          margin: 0 0 16px;
          color: #fff;
        }
        .blogger-theme-root .cta p {
          color: var(--text-inv-2);
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto 32px;
        }
        .blogger-theme-root .cta .row {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .blogger-theme-root .site-footer {
          background: var(--bg-subtle);
          padding: 64px 0 32px;
          border-top: 1px solid var(--border);
        }
        .blogger-theme-root .foot-top {
          display: flex;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
        }
        .blogger-theme-root .foot-brand {
          max-width: 340px;
        }
        .blogger-theme-root .foot-brand p {
          color: var(--text-2);
          font-size: 15px;
          margin: 16px 0 0;
          line-height: 1.6;
        }
        .blogger-theme-root .foot-cols {
          display: flex;
          gap: 80px;
          flex-wrap: wrap;
        }
        .blogger-theme-root .foot-cols h4 {
          font-size: 14px;
          font-weight: 700;
          margin: 0 0 14px;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blogger-theme-root .foot-cols a, .blogger-theme-root .foot-cols button {
          display: block;
          color: var(--text-2) !important;
          font-size: 15px;
          margin-bottom: 10px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }
        .blogger-theme-root .foot-cols a:hover, .blogger-theme-root .foot-cols button:hover {
          color: var(--brand) !important;
        }
        .blogger-theme-root .foot-bottom {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
          margin-top: 48px;
          padding-top: 24px;
          color: var(--text-2);
          font-size: 14px;
        }

        /* Responsive Media Queries */
        @media (max-width: 980px) {
          .blogger-theme-root .cards, .blogger-theme-root .post-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blogger-theme-root .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 860px) {
          .blogger-theme-root .wrap {
            padding: 0 20px;
          }
          .blogger-theme-root .nav-toggle {
            display: block;
          }
          .blogger-theme-root .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #fff;
            border-bottom: 1px solid var(--border);
            padding: 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          }
          .blogger-theme-root .nav-menu.open {
            display: flex;
          }
          .blogger-theme-root .nav-links {
            flex-direction: column;
            gap: 16px;
          }
          .blogger-theme-root .hero {
            padding: 64px 0 48px;
          }
          .blogger-theme-root .block {
            padding: 64px 0;
          }
          .blogger-theme-root .main-area {
            padding: 56px 0;
          }
        }
        @media (max-width: 620px) {
          .blogger-theme-root .cards, .blogger-theme-root .post-grid {
            grid-template-columns: 1fr;
          }
          .blogger-theme-root .search {
            flex-direction: column;
          }
          .blogger-theme-root .cta {
            padding: 56px 24px;
            border-radius: 24px;
          }
          .blogger-theme-root .foot-cols {
            gap: 40px;
          }
        }
      `}</style>

      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="wrap nav relative">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchQuery('');
              onViewChange('home');
            }}
            className="brand cursor-pointer"
          >
            <span className="brand-mark" />
            <span className="brand-text">AI Tools Hub</span>
          </button>

          <button
            aria-label="Menu"
            className="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            &#9776;
          </button>

          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="site-nav">
            <nav className="nav-links">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  onViewChange('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className={currentView === 'home' ? 'text-pink-600 font-semibold' : ''}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onViewChange('home');
                  const target = document.getElementById('ai-tools');
                  target?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="hover:text-pink-600 transition-colors"
              >
                AI Tools
              </button>
              <button
                onClick={() => {
                  onViewChange('about');
                  setMobileMenuOpen(false);
                }}
                className={currentView === 'about' ? 'text-pink-600 font-semibold' : ''}
              >
                About
              </button>
            </nav>
            <button
              className="btn btn-primary"
              onClick={() => {
                onViewChange('home');
                const target = document.getElementById('ai-tools');
                target?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Explore tools
            </button>
          </div>
        </div>
      </header>

      {/* ================= HOMEPAGE HERO & CATEGORIES ================= */}
      {currentView === 'home' && (
        <>
          <section className="hero">
            <div className="wrap">
              <span className="badge">New AI tools reviewed every week</span>
              <h1>
                Discover the best <span>AI tools</span> for work and code
              </h1>
              <p className="lead">
                Honest reviews, tutorials and comparisons of the AI tools that actually save you time. Find your next favorite tool in minutes.
              </p>

              <form onSubmit={handleSearchSubmit} className="search">
                <input
                  aria-label="Search AI tools"
                  name="q"
                  placeholder="Search AI tools, tutorials, prompts..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  <Search className="w-4 h-4 mr-1 hidden sm:inline" />
                  Search
                </button>
              </form>
            </div>
          </section>

          <section className="block" id="ai-tools">
            <div className="wrap">
              <div className="sec-head">
                <div className="overline">Flagship AI Tools &amp; Models</div>
                <h2 className="sec-title">ChatGPT, Claude, Gemini &amp; More</h2>
                <p className="sec-sub">
                  In-depth benchmarks, pricing comparisons, and verified reviews for the world&apos;s leading AI platforms.
                </p>
              </div>

              <div className="cards">
                {/* 01: ChatGPT */}
                <div
                  className="card group flex flex-col justify-between"
                  onClick={() => {
                    const post = posts.find((p) => p.slug === 'chatgpt-4o-o3-review');
                    if (post) handlePostClick(post);
                    else handleCategoryClick('Chatbots');
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="tile !mb-0 text-white shadow-xs rounded-xl" style={{ background: '#10A37F' }}>
                        <AiToolLogo type="chatgpt" className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        OpenAI
                      </span>
                    </div>
                    <h3>ChatGPT (OpenAI)</h3>
                    <p>GPT-4o, o3-mini reasoning, real-time voice mode, custom GPTs, and Canvas collaborative workspace.</p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Official Web App</span>
                    <a
                      href="https://chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold transition-colors py-1 px-2.5 rounded-lg hover:bg-pink-50"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 02: Claude */}
                <div
                  className="card group flex flex-col justify-between"
                  onClick={() => {
                    window.open('https://claude.ai', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="tile !mb-0 text-white shadow-xs rounded-xl" style={{ background: '#D97706' }}>
                        <AiToolLogo type="claude" className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Anthropic
                      </span>
                    </div>
                    <h3>Claude (Anthropic)</h3>
                    <p>Claude 3.7 Sonnet with hybrid reasoning, 200k context window, Artifacts, and top-tier coding intelligence.</p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Official Web App</span>
                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold transition-colors py-1 px-2.5 rounded-lg hover:bg-pink-50"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 03: Google Gemini */}
                <div
                  className="card group flex flex-col justify-between"
                  onClick={() => {
                    window.open('https://gemini.google.com', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="tile !mb-0 text-white shadow-xs rounded-xl" style={{ background: 'linear-gradient(135deg, #1A73E8, #7C3AED)' }}>
                        <AiToolLogo type="gemini" className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Google DeepMind
                      </span>
                    </div>
                    <h3>Google Gemini</h3>
                    <p>Gemini 2.0 Flash &amp; Pro with 2M token context, native multimodal video/audio, and Workspace integration.</p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Official Web App</span>
                    <a
                      href="https://gemini.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold transition-colors py-1 px-2.5 rounded-lg hover:bg-pink-50"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 04: Cursor */}
                <div
                  className="card group flex flex-col justify-between"
                  onClick={() => {
                    window.open('https://cursor.com', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="tile !mb-0 text-white shadow-xs rounded-xl" style={{ background: '#0F172A' }}>
                        <AiToolLogo type="cursor" className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                        Anysphere
                      </span>
                    </div>
                    <h3>Cursor AI Editor</h3>
                    <p>Autonomous multi-file Composer agent, background indexing, custom .cursorrules, and fast inline diffs.</p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Official Web App</span>
                    <a
                      href="https://cursor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold transition-colors py-1 px-2.5 rounded-lg hover:bg-pink-50"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 05: Perplexity */}
                <div
                  className="card group flex flex-col justify-between"
                  onClick={() => {
                    window.open('https://perplexity.ai', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="tile !mb-0 text-white shadow-xs rounded-xl" style={{ background: '#0D9488' }}>
                        <AiToolLogo type="perplexity" className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                        Perplexity
                      </span>
                    </div>
                    <h3>Perplexity AI</h3>
                    <p>Deep Research synthesis across dozens of web sources, verified citations, and instant report generation.</p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Official Web App</span>
                    <a
                      href="https://perplexity.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold transition-colors py-1 px-2.5 rounded-lg hover:bg-pink-50"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 06: Midjourney */}
                <div
                  className="card group flex flex-col justify-between"
                  onClick={() => {
                    window.open('https://midjourney.com', '_blank', 'noopener,noreferrer');
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="tile !mb-0 text-white shadow-xs rounded-xl" style={{ background: '#4338CA' }}>
                        <AiToolLogo type="midjourney" className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        Midjourney
                      </span>
                    </div>
                    <h3>Midjourney &amp; Flux</h3>
                    <p>State-of-the-art visual generation, photorealistic cinematic lighting, typography precision, and web editor.</p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Official Web App</span>
                    <a
                      href="https://midjourney.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold transition-colors py-1 px-2.5 rounded-lg hover:bg-pink-50"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ================= MAIN CONTENT AREA (About & Error Views) ================= */}
      {(currentView === 'about' || currentView === 'error') && (
        <main className="main-area" id="explore-posts">
          <div className="wrap">
            {/* About Page View */}
            {currentView === 'about' && (
              <article className="article">
                <div className="crumbs">
                  <button onClick={() => onViewChange('home')} className="hover:underline text-slate-500">
                    Home
                  </button>
                  {' / '}
                  <span className="text-slate-800 font-medium">About AI Tools Hub</span>
                </div>
                <h1>About AI Tools Hub</h1>
                <div className="meta">Published by AI Tools Hub Editorial Board</div>
                <div className="post-body">
                  <p className="lead" style={{ fontSize: '1.2em', color: 'var(--text-2)' }}>
                    AI Tools Hub is an independent testing laboratory and online publication focused on discovering, evaluating, and benchmarking modern artificial intelligence tools.
                  </p>
                  <h2>Our Editorial Standards</h2>
                  <p>
                    We believe most AI directory websites today are low-effort link farms funded by sponsored slots. AI Tools Hub is built differently:
                  </p>
                  <blockquote>
                    &quot;Every tool we feature must undergo hands-on evaluation by a practicing developer, designer, or researcher for a minimum of two weeks.&quot;
                  </blockquote>
                  <h2>Review Criteria</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Pillar</th>
                        <th>Weight</th>
                        <th>Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Utility &amp; Time Saved</td>
                        <td>40%</td>
                        <td>Does it solve a genuine bottleneck or just look neat in a demo?</td>
                      </tr>
                      <tr>
                        <td>Output Quality &amp; Hallucination Resistance</td>
                        <td>30%</td>
                        <td>Accuracy, adherence to user prompts, and reasoning depth.</td>
                      </tr>
                      <tr>
                        <td>Ergonomics &amp; Integration</td>
                        <td>20%</td>
                        <td>API ease, keyboard shortcuts, latency, and IDE support.</td>
                      </tr>
                      <tr>
                        <td>Pricing Transparency</td>
                        <td>10%</td>
                        <td>Fair token billing, no dark patterns, and generous trials.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            )}

            {/* 404 Error Page View */}
            {currentView === 'error' && (
              <div className="article text-center py-16">
                <h1 className="text-7xl font-extrabold text-pink-600 mb-2">404</h1>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h2>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  The AI tool review or page you are looking for has been moved, renamed, or does not exist.
                </p>
                <button onClick={() => onViewChange('home')} className="btn btn-primary">
                  Return to Homepage
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* ================= STATS SECTION ================= */}
      {currentView === 'home' && (
        <section className="block">
          <div className="wrap">
            <div className="stats">
              <div>
                <b>500+</b>
                <span>Curated AI tools</span>
              </div>
              <div>
                <b>120k+</b>
                <span>Monthly engineers</span>
              </div>
              <div>
                <b>4.9</b>
                <span>Average review score</span>
              </div>
              <div>
                <b>100%</b>
                <span>Unbiased benchmarks</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA SECTION ================= */}
      {currentView === 'home' && (
        <section className="block subtle">
          <div className="wrap">
            <div className="cta">
              <h2>Stay ahead of the AI curve</h2>
              <p>
                Get our weekly breakdown of new AI tools, hidden developer gems, and workflow automation guides directly in your inbox.
              </p>
              {subscribeSuccess ? (
                <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-xl p-4 max-w-md mx-auto text-sm font-semibold">
                  Thank you! You are now subscribed to the AI Tools Hub briefing.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="row">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-pink-500 min-w-[280px] text-sm"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ background: '#fff', color: 'var(--text)' }}
                  >
                    Subscribe to newsletter
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <button
                onClick={() => onViewChange('home')}
                className="brand text-left cursor-pointer"
              >
                <span className="brand-mark" />
                <span className="brand-text">AI Tools Hub</span>
              </button>
              <p>
                AI Tools Hub is an independent testing lab and publication dedicated to reviewing modern generative AI tools and developer utilities.
              </p>
            </div>
            <div className="foot-cols">
              <div>
                <h4>Categories</h4>
                <button onClick={() => handleCategoryClick('AI Tools')}>AI Tools</button>
                <button onClick={() => handleCategoryClick('Chatbots')}>Chatbots</button>
                <button onClick={() => handleCategoryClick('Image AI')}>Image AI</button>
                <button onClick={() => handleCategoryClick('Productivity')}>Productivity</button>
                <button onClick={() => handleCategoryClick('Free Tools')}>Free Tools</button>
              </div>
              <div>
                <h4>Editorial</h4>
                <button onClick={() => handleCategoryClick('AI Tools')}>Latest Reviews</button>
                <button onClick={() => onViewChange('about')}>Benchmarks</button>
                <button onClick={() => onViewChange('about')}>Review Criteria</button>
                <button onClick={() => onViewChange('about')}>Methodology</button>
              </div>
              <div>
                <h4>Company</h4>
                <button onClick={() => onViewChange('about')}>About Us</button>
                <button onClick={() => onViewChange('about')}>Contact</button>
                <button onClick={() => onViewChange('error')}>Privacy Policy</button>
                <button onClick={() => onViewChange('error')}>Terms of Service</button>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>&copy; {new Date().getFullYear()} AI Tools Hub &mdash; Powered by Blogger.</span>
            <div className="flex gap-4">
              <button onClick={() => onViewChange('home')} className="hover:text-pink-600">
                RSS Feed
              </button>
              <span>&middot;</span>
              <button onClick={() => onViewChange('about')} className="hover:text-pink-600">
                Privacy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
