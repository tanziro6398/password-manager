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
      <div className="w-[80%] min-h-[80vh] mx-auto my-10 bg-white rounded-xl shadow-2xl flex overflow-hidden">
        {/* Sidebar -  */}
        <div className="w-1/4 p-6 border-r border-gray-100 flex flex-col bg-white">
          <div className="flex items-center gap-2 text-black text-2xl mb-8">
            <img
              src="https://spng.pngfind.com/pngs/s/56-560150_600-x-600-2-shield-check-icon-png.png"
              className="w-8 h-8"
              alt="icon"
            />
            SecureAI Vault
          </div>

          <nav className="flex-1 flex flex-col gap-1">
            {['vault', 'add', 'generate', 'breach'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`flex items-center gap-3 p-3 rounded-lg text-left ${activeSection === item
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <span className="text-lg">
                  {item === 'vault' ? '🔒' :
                    item === 'add' ? '➕' :
                      item === 'generate' ? '🔄' : '🛡️'}
                </span>
                <span>
                  {item === 'vault' ? 'Vault' :
                    item === 'add' ? 'Add Password' :
                      item === 'generate' ? 'Generate Password' : 'Breach Check'}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
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