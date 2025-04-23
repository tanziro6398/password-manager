import React from "react";

function Vault({ handleLogout }) {
    const VaultItem = ({ logo, name, email, strength, color }) => {
        const colorClass = {
            green: "bg-green-100 text-green-700",
            yellow: "bg-yellow-100 text-yellow-800",
            red: "bg-red-100 text-red-600",
        }[color] || "bg-gray-100 text-gray-600";

        return (
            <div className="grid grid-cols-3 items-center px-4 py-3 hover:bg-gray-50 rounded-xl transition">
                <div className="flex items-center gap-3">
                    <img src={logo} className="w-8 h-8 rounded-full" alt={name} />
                    <div>
                        <p className="font-medium text-gray-800">{name}</p>
                        <p className="text-sm text-gray-500">{email}</p>
                    </div>
                </div>
                <p className="text-lg text-gray-600">••••••••••</p>
                <div className="flex items-center gap-2">
                    <span className={`${colorClass} text-xs font-semibold px-3 py-1 rounded-full`}>
                        {strength}
                    </span>
                    <img
                        src="/vault.png"
                        className="w-5 h-5 cursor-pointer hover:scale-105 transition"
                        alt="Copy"
                        title="Copy Password"
                    />
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Vault</h2>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLogout}
                        className="bg-blue-600 text-white font-medium hover:bg-blue-700 p-2 rounded-md"
                    >
                        Log out
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <img src="/profile.png" alt="Profile" className="w-6 h-6 rounded-full" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 border">
                <div className="grid grid-cols-3 font-semibold text-gray-500 border-b pb-3 mb-4">
                    <span>Username</span>
                    <span>Password</span>
                    <span>Status</span>
                </div>

                <VaultItem
                    logo="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg"
                    name="Gmail"
                    email="user12@example.com"
                    strength="Strong"
                    color="green"
                />
                <VaultItem
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAX_FfM5u0EdC0j5EOWZCT726NG4sI_Sqsg&s"
                    name="Facebook"
                    email="user12@example.com"
                    strength="Moderate"
                    color="yellow"
                />
                <VaultItem
                    logo="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    name="GitHub"
                    email="user12@example.com"
                    strength="Strong"
                    color="green"
                />
            </div>
        </div>
    );
}

export default Vault;
