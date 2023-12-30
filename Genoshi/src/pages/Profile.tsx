import React, {useState} from 'react';
import UserDetails from '../components/UserDetails';
import UsageMetrics from '../components/UsageMetrics';
import ActionButtons from '../components/ActionButtons';
import CreateGraph from '../components/Graph/CreateGraph';
import RecentSection from '../components/RecentSection';
import SavedSection from '../components/SavedSection';
import Modal from 'react-modal';
import FavouriteSection from '../components/FavoriteSection';
import Account from '../components/Profile/Account';

const ProfilePage: React.FC = () => {
  const [isCreateGraphModalOpen, setIsCreateGraphModalOpen] = useState(false);
  const [isAccountSettingsModalOpen, setIsAccountSettingsModalOpen] = useState(false);

  const handleCreateGraphClick = () => {
    setIsCreateGraphModalOpen(true);
  };

  const handleSettingsClick = () => {
    setIsAccountSettingsModalOpen(true);
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
        onSettingsClick={handleSettingsClick}
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
    onManagePapersClick={() => console.log('Manage papers clicked')}
    onViewSharedGraphsClick={() => console.log('View shared graphs clicked')}
  />

  <Modal isOpen={isCreateGraphModalOpen} onRequestClose={() => setIsCreateGraphModalOpen(false)}>
    <CreateGraph onClose={() => setIsCreateGraphModalOpen(false)} />
  </Modal>
  <Modal isOpen={isAccountSettingsModalOpen} onRequestClose={() => setIsAccountSettingsModalOpen(false)}>
          <Account />
        </Modal>
      <RecentSection />
      <SavedSection />
      <FavouriteSection
      onFavouritesClick={() => console.log('Favourites clicked')}
      onCollectionsClick={() => console.log('Collections clicked')}/>
    </div>
    </>
  );
};

export default ProfilePage;



