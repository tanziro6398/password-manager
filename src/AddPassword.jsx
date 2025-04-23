import React from "react";

export default function AddPassword() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Password</h2>

            <div className="bg-white rounded-2xl shadow border p-6 max-w-xl mx-auto">
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Facebook"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email / Username</label>
                    <input
                        type="email"
                        placeholder="e.g. user@example.com"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition">
                    Save Password
                </button>
            </div>
        </div>
    );
}
