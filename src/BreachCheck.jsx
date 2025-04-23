import React from "react";

export default function BreachCheck() {
    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Breach Check</h2>

            <div className="bg-white rounded-2xl shadow border p-6">
                <p className="text-gray-700 mb-4 text-sm">
                    Enter your email to check if it's been involved in any data breaches.
                </p>

                <input
                    type="email"
                    placeholder="e.g. user@example.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-5 text-gray-800 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />

                <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-xl hover:bg-red-700 transition">
                    Check Now
                </button>
            </div>
        </div>
    );
}
