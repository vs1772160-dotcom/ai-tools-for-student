import { useState } from 'react';
import { X, PlusCircle } from 'lucide-react';
import { Post } from '../data/mockPosts';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: Post) => void;
}

export function AddReviewModal({ isOpen, onClose, onAddPost }: AddReviewModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Dev Tools');
  const [snippet, setSnippet] = useState('');
  const [authorName, setAuthorName] = useState('Editor');
  const [bodyText, setBodyText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !snippet.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: title.trim(),
      snippet: snippet.trim(),
      category: category,
      labels: [category, 'New Release'],
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '4 min read',
      rating: 4.8,
      author: {
        name: authorName.trim() || 'Editor',
        role: 'Verified Reviewer',
      },
      contentHtml: `
        <p class="lead" style="font-size: 1.15em; color: var(--text-2); margin-bottom: 24px;">
          ${snippet}
        </p>
        <h2>Detailed Overview</h2>
        <p>${bodyText.trim() || 'This tool represents the newest generation of generative AI tools. In our benchmark evaluations, it demonstrated impressive latency and high quality output across standard benchmarks.'}</p>
        <blockquote>
          "A welcome addition to the AI ecosystem, delivering reliable performance and seamless integration."
        </blockquote>
        <h2>Pros and Highlights</h2>
        <table>
          <thead>
            <tr>
              <th>Evaluation Factor</th>
              <th>Score</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ease of Setup</td>
              <td>9.5 / 10</td>
              <td>Instant onboarding with clear docs</td>
            </tr>
            <tr>
              <td>Output Accuracy</td>
              <td>9.2 / 10</td>
              <td>Consistent and hallucination-resistant</td>
            </tr>
          </tbody>
        </table>
      `,
      comments: [],
    };

    onAddPost(newPost);
    setTitle('');
    setSnippet('');
    setBodyText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <PlusCircle className="w-5 h-5 text-pink-600" />
            <h3 className="text-base font-bold text-slate-900">Add Test Tool Review</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tool Name / Post Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Bolt.new Review: In-Browser Full Stack Development"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              >
                <option value="Dev Tools">Dev Tools</option>
                <option value="Chatbots">Chatbots</option>
                <option value="Image AI">Image AI</option>
                <option value="Productivity">Productivity</option>
                <option value="Free Tools">Free Tools</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Author
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Snippet / Summary
            </label>
            <textarea
              required
              rows={2}
              placeholder="Short 2-sentence teaser for the card grid..."
              value={snippet}
              onChange={(e) => setSnippet(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Detailed Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Paragraph for the single article view..."
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 resize-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors shadow-xs"
            >
              Publish to Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
