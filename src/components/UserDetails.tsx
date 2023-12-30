import React from "react";

interface UserDetailsProps {
  userData: {
    name: string;
    email: string;
    photoUrl: string;
    bio: string;
    plan: string;
    status: {
      graphsUsed: string;
      chatQueriesUsed: string;
    };
  };
  onSettingsClick: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  userData,
  onSettingsClick,
}) => {
  return (
    <div className="item-center justify-center">
      <div className="container p-10 pl-16 max-w-7xl">
      <div className="relative bg-gray-500 p-12 rounded-lg shadow-md flex items-center">
        <div className="flex flex-col items-center w-64">
          <img
            src={userData.photoUrl}
            alt={userData.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="px-8 py-2 text-bold text-center rounded-lg uppercase bg-yellow-600">
            {userData.plan}
          </p>
        </div>
        <div className="ml-8 pl-4">
          <div className="items-center">
            <h2 className="text-2xl font-bold text-white mb-4">{userData.name}</h2>
            <p className="text-lg text-gray-300 mb-4">{userData.email}</p>
            <p className="text-xl text-black">{userData.bio}</p>
          </div>
        </div>

        <div className="absolute top-20 right-12 pr-24 pb-6 justify-end">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-2 rounded-lg text-sm font-semibold">
            <svg className="w-6 h-6 ml-10 mb-2" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 56 56" >
<path d="M47.533,0H8.467C3.798,0,0,3.798,0,8.467v39.066C0,52.202,3.798,56,8.467,56h39.066C52.202,56,56,52.202,56,47.533V8.467
	C56,3.798,52.202,0,47.533,0z M54,47.533C54,51.099,51.099,54,47.533,54H8.467C4.901,54,2,51.099,2,47.533V30.414l6.247-6.247
	C9.038,24.691,9.983,25,11,25s1.962-0.309,2.753-0.833l10.08,10.08C23.309,35.038,23,35.983,23,37c0,2.757,2.243,5,5,5s5-2.243,5-5
	c0-1.017-0.309-1.962-0.833-2.753L46,20.414V27c0,0.553,0.447,1,1,1s1-0.447,1-1V17H38c-0.553,0-1,0.447-1,1s0.447,1,1,1h6.586
	L30.753,32.833C29.962,32.309,29.017,32,28,32s-1.962,0.309-2.753,0.833l-10.08-10.08C15.691,21.962,16,21.017,16,20
	c0-2.757-2.243-5-5-5s-5,2.243-5,5c0,1.017,0.309,1.962,0.833,2.753L2,27.586V8.467C2,4.901,4.901,2,8.467,2h39.066
	C51.099,2,54,4.901,54,8.467V47.533z M11,23c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S12.654,23,11,23z M31,37
	c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3S31,35.346,31,37z"/>
</svg>
              Graphs Left: {userData.status.graphsUsed}
              <img className=" mt-2 w-6 h-6 ml-10 mb-2" src={`../assets/question-sign.png`} alt="" />
              Queries Left: {userData.status.chatQueriesUsed}
            </div>
        </div>
      </div>
      <div className="absolute top-3 right-4">
            <button
              className="p-2 bg-blue-400 text-white rounded-full hover:bg-gray-700"
              onClick={onSettingsClick}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /> 
  </svg>
            </button>
          </div>
      </div>
    </div>
    </div>
    
  );
};

export default UserDetails;
