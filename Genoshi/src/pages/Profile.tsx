import React, {useState} from 'react';
import UserDetails from '../components/UserDetails';
import UsageMetrics from '../components/UsageMetrics';
import ActionButtons from '../components/ActionButtons';
import FavoriteSection from '../components/FavoriteSection';
import CreateGraph from '../components/Graph/CreateGraph';
import RecentSection from '../components/RecentSection';
import SavedSection from '../components/SavedSection';
import Modal from 'react-modal';

const ProfilePage: React.FC = () => {
  const [isCreateGraphModalOpen, setIsCreateGraphModalOpen] = useState(false);
  const handleCreateGraphClick = () => {
    setIsCreateGraphModalOpen(true);
  };
  return (
    <>
    <div className="container mx-auto px-4 bg-[#0C0C1C]">
      <UserDetails
        userData={{
          name: 'John Doe',
          email: 'johndoe@example.com',
          photoUrl: 'Image',
          bio: 'Graph enthusiast and data scientist.',
          plan: 'pro',
          status: {
            graphsUsed: '5/10',
            chatQueriesUsed: '50/100',
          },
        }}
        onSettingsClick={() => console.log('Settings clicked')}
      />
      <UsageMetrics
        metrics={{
          graphsCreated: 25,
          graphsShared: 10,
          papersUploaded: 5,
          favorites: 8,
        }}
      />
      <ActionButtons
    onCreateGraphClick={handleCreateGraphClick}
  />

  <Modal isOpen={isCreateGraphModalOpen} onRequestClose={() => setIsCreateGraphModalOpen(false)}>
    <CreateGraph onClose={() => setIsCreateGraphModalOpen(false)} />
  </Modal>
      <RecentSection />
      <SavedSection />
      <FavoriteSection />
    </div>
    </>
  );
};

export default ProfilePage;



