import { useState } from 'react';
import { SAMPLE_POSTS, Post } from './data/mockPosts';
import { ViewType } from './components/NavbarControls';
import { ThemePreview } from './components/ThemePreview';
import { XmlCodeModal } from './components/XmlCodeModal';
import { InstallGuideModal } from './components/InstallGuideModal';
import { AddReviewModal } from './components/AddReviewModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [brandColor] = useState<string>('#DB2777');
  const [posts, setPosts] = useState<Post[]>(SAMPLE_POSTS);
  const [selectedPost, setSelectedPost] = useState<Post>(SAMPLE_POSTS[0]);

  // Modals
  const [isXmlModalOpen, setIsXmlModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Add new post handler
  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
    setSelectedPost(newPost);
    setCurrentView('post');
  };

  // Add comment handler
  const handleAddComment = (postId: string, author: string, content: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === postId) {
          const updated = {
            ...p,
            comments: [
              ...p.comments,
              {
                id: `c-${Date.now()}`,
                author,
                date: 'Just now',
                content,
              },
            ],
          };
          if (selectedPost.id === postId) {
            setSelectedPost(updated);
          }
          return updated;
        }
        return p;
      })
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased">
      <main className="flex-1 w-full">
        <ThemePreview
          posts={posts}
          currentView={currentView}
          onViewChange={setCurrentView}
          selectedPost={selectedPost}
          onSelectPost={setSelectedPost}
          brandColor={brandColor}
          onAddComment={handleAddComment}
        />
      </main>

      {/* Modals available if needed */}
      <XmlCodeModal
        isOpen={isXmlModalOpen}
        onClose={() => setIsXmlModalOpen(false)}
        brandColor={brandColor}
      />
      <InstallGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        onOpenXml={() => setIsXmlModalOpen(true)}
      />
      <AddReviewModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
}
