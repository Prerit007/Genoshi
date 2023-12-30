import React, { useState } from 'react';

interface AccountSettingsItem {
  label: string;
  icon: string;
  expanded: boolean;
  children: React.ReactNode;
}

const Account: React.FC = () => {
  const [settingsItems, setSettingsItems] = useState<AccountSettingsItem[]>([
    {
      label: 'Update Profile',
      icon: 'user-edit-icon',
      expanded: true,
      children: (
        <div className="p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
        Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
        EMail
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="EMail"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
        Bio
          </label>
          <textarea placeholder="Bio" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3" />
        </div>
      ),
    },
    {
      label: 'Change Password',
      icon: 'lock-icon',
      expanded: false,
      children: (
        <div className="p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
        Old Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Old Password"/>
          
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
        New Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="New Password"/>
          
          <button className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Change Password
      </button>
        </div>
      ),
    },
    {
      label: 'Manage Subscription',
      icon: 'credit-card-icon',
      expanded: false,
      children: (
        <div className="p-4">
          <p className="mb-2">Current plan: Pro</p>
          <button className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <a className="inline-block align-baseline font-bold text-sm text-white" href="/pricing">
        Upgrade Plan
      </a>
          </button>
        </div>
      ),
    },
    {
      label: 'Link Accounts',
      icon: 'link-icon',
      expanded: false,
      children: (
        <div className="p-6 x-gap-4">
          <button className="text-white bg-red-500 px-4 py-2 rounded m-4 hover:bg-red-400">
            <i className="fab fa-google mr-2" /> Google
          </button>
          <button className="text-white bg-slate-500 px-4 py-2 rounded m-4 hover:bg-slate-400">
            <i className="fab fa-github mr-2" /> GitHub
          </button>
          <button className="text-white bg-blue-500 px-4 py-2 rounded m-4 hover:bg-blue-400">
            <i className="fab fa-linkedin mr-2" /> LinkedIn
          </button>
        </div>
      ),
    },
    {
      label: 'Usage Statistics',
      icon: 'chart-bar-icon',
      expanded: false,
      children: (
        <div className="p-4">
          <p className="mb-2">Graphs left: 5</p>
          <p>Queries left: 100</p>
        </div>
      ),
    },
  ]);

  const handleExpandClick = (index: number) => {
    setSettingsItems((prevItems) =>
      prevItems.map((item, i) => ({ ...item, expanded: i === index }))
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-blue-50 rounded-lg shadow-md p-4 mb-4 w-full">
        <h2 className="text-lg font-medium text-blue-700 mb-4">Account Settings</h2>
        {settingsItems[0].children}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {settingsItems.slice(1).map((item, index) => (
          <div key={item.label} className="bg-white rounded-lg shadow-md p-4">
            <div
              className={`flex items-center justify-between mb-4 cursor-pointer ${
                item.expanded ? 'border-blue-500 border-b-2' : ''
              }`}
              onClick={() => handleExpandClick(index + 1)}
            >
              <div className="flex items-center">
                <i className={`fas fa-${item.icon} text-blue-500 mr-2`} />
                <span className="text-lg font-medium">{item.label}</span>
              </div>
              <i
                className={`fas fa-chevron-${item.expanded ? 'down' : 'right'} text-blue-500`}
              />
            </div>
            {item.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
