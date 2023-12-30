import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/' || location.pathname === '/profile';

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <Link to="https://www.genoshi.io/" className="text-2xl font-bold pl-1">
              <svg width="215" height="60" viewBox="0 0 215 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0_5_46" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="3" width="214" height="55">
        <rect y="3" width="55" height="55" fill="url(#pattern0)"/>
        <path d="M84.956 48.65C82.5226 48.65 80.256 48.175 78.156 47.225C76.0726 46.275 74.2476 44.9667 72.681 43.3C71.131 41.6167 69.9226 39.675 69.056 37.475C68.1893 35.275 67.756 32.9333 67.756 30.45C67.756 27.7833 68.231 25.35 69.181 23.15C70.131 20.95 71.4226 19.05 73.056 17.45C74.6893 15.8333 76.5393 14.5917 78.606 13.725C80.6893 12.8417 82.856 12.4 85.106 12.4C87.5726 12.4 89.9893 12.975 92.356 14.125C94.7226 15.275 96.8393 17.1 98.706 19.6L92.556 22.9C91.4893 21.6667 90.2976 20.75 88.981 20.15C87.681 19.55 86.356 19.25 85.006 19.25C83.656 19.25 82.356 19.525 81.106 20.075C79.8726 20.625 78.7726 21.4083 77.806 22.425C76.8393 23.4417 76.0726 24.6417 75.506 26.025C74.9393 27.4083 74.656 28.9333 74.656 30.6C74.656 32.15 74.9226 33.6 75.456 34.95C76.006 36.3 76.756 37.4833 77.706 38.5C78.656 39.5167 79.756 40.3167 81.006 40.9C82.2726 41.4667 83.6226 41.75 85.056 41.75C85.9393 41.75 86.806 41.625 87.656 41.375C88.5226 41.1083 89.3476 40.725 90.131 40.225C90.9143 39.725 91.631 39.1 92.281 38.35C92.9476 37.6 93.531 36.7333 94.031 35.75H88.606V29.75H102.156C102.256 32.3333 101.881 34.7667 101.031 37.05C100.181 39.3333 98.9643 41.35 97.381 43.1C95.7976 44.8333 93.9476 46.1917 91.831 47.175C89.7143 48.1583 87.4226 48.65 84.956 48.65ZM105.598 48V13H119.498C121.398 13 123.114 13.4833 124.648 14.45C126.198 15.4 127.423 16.6833 128.323 18.3C129.239 19.9 129.698 21.675 129.698 23.625C129.698 25.1583 129.431 26.5833 128.898 27.9C128.364 29.2 127.614 30.3417 126.648 31.325C125.681 32.3083 124.556 33.075 123.273 33.625L131.598 48H123.648L115.673 34.25H112.498V48H105.598ZM112.498 27.35H118.673C119.423 27.35 120.106 27.1667 120.723 26.8C121.356 26.4167 121.856 25.9083 122.223 25.275C122.606 24.625 122.798 23.9083 122.798 23.125C122.798 22.3583 122.606 21.6583 122.223 21.025C121.856 20.375 121.356 19.8583 120.723 19.475C120.106 19.0917 119.423 18.9 118.673 18.9H112.498V27.35ZM145.79 13H153.64L166.34 48H159.015L156.915 42.2H142.515L140.415 48H133.09L145.79 13ZM145.04 35.3H154.39L149.69 22.475L145.04 35.3ZM169.418 48V13H190.168V19.9H176.318V25.8H187.768V32.7H176.318V48H169.418ZM192.734 48V13H213.484V19.9H199.634V25.8H211.084V32.7H199.634V48H192.734Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_5_46)">
        <path d="M-35 -6H282V68H-35V-6Z" fill="white"/>
        <ellipse cx="210.07" cy="32.8629" rx="84.6085" ry="61.5853" fill="white"/>
        <ellipse cx="20.1596" cy="79.9316" rx="92.7288" ry="62.905" fill="white"/>
        <g filter="url(#filter0_b_5_46)">
        <rect x="-35" y="-21" width="317" height="106" fill="white"/>
        </g>
        </g>
        </svg>

      </Link>
      {isProfilePage ? (
        <Link to="/pricing" className="text-xl px-4">
          Pricing
        </Link>
      ) : (
        <Link to="/" className="text-xl">
          <i className="fas fa-user-circle"></i>
          <svg className="w-14 h-14" fill="#10cb9c" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.161 402.161" stroke="#10cb9c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151 c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151 C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616 c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355 C256.436,151.824,230.372,192.029,201.08,192.029z"></path> <path d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292 s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052 c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099 c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512 C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64 c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01 c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15 c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z"></path> <path d="M302.806,352.372H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5 C310.307,355.73,306.948,352.372,302.806,352.372z"></path> <path d="M302.806,387.161H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5 C310.307,390.519,306.948,387.161,302.806,387.161z"></path> </g> </g> </g> </g></svg>
        </Link>
      )}
    </header>
  );
};

export default Header;