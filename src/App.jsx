import React, { useState } from 'react';
import Vault from './Vault';
import AddPassword from './AddPassword';
import GeneratePassword from './GenPass';
import BreachCheck from './BreachCheck';

function App() {
  const [activeSection, setActiveSection] = useState('vault');

  const handleLogout = () => {
    alert('Logout successful!');
  };

  return (
    <div className="flex h-screen bg-[#03193d]">
      <div className="w-full md:w-[80%] min-h-[80vh] mx-auto my-4 md:my-10 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-row md:flex-col bg-white">
          <div className="flex items-center gap-2 text-black text-xl md:text-2xl mb-4 md:mb-8">
            <img
              src="https://spng.pngfind.com/pngs/s/56-560150_600-x-600-2-shield-check-icon-png.png"
              className="w-7 h-7 md:w-8 md:h-8"
              alt="icon"
            />
            SecureAI Vault
          </div>

          <nav className="flex-1 flex flex-row md:flex-col gap-1">
            {['vault', 'add', 'generate', 'breach'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg text-left w-full ${activeSection === item
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <span className="text-base md:text-lg">
                  {item === 'vault' ? '🔒' :
                    item === 'add' ? '➕' :
                      item === 'generate' ? '🔄' : '🛡️'}
                </span>
                <span className="hidden sm:inline">
                  {item === 'vault' ? 'Vault' :
                    item === 'add' ? 'Add Password' :
                      item === 'generate' ? 'Generate Password' : 'Breach Check'}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {activeSection === 'vault' && <Vault handleLogout={handleLogout} />}
          {activeSection === 'add' && <AddPassword />}
          {activeSection === 'generate' && <GeneratePassword />}
          {activeSection === 'breach' && <BreachCheck />}
        </div>
      </div>
    </div>
  );
}

export default App;
