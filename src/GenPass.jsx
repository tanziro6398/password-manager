import React, { useState } from "react";

export default function GeneratePassword() {
    const [password, setPassword] = useState("Ab#12xY!9q");

    const generateNewPassword = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let newPass = "";
        for (let i = 0; i < 12; i++) {
            newPass += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(newPass);
    };

    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Generate Password</h2>
            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 flex flex-col items-center gap-5">
                <p className="text-gray-700 font-medium">Generated Password</p>
                <div className="bg-gray-100 px-6 py-3 rounded-xl w-full text-center text-lg font-mono text-gray-800 tracking-wide">
                    {password}
                </div>
                <button
                    onClick={generateNewPassword}
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Generate Again
                </button>
            </div>
        </div>
    );
}