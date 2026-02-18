// Script to replace all placeholder images with CSS-based divs
const imageReplacements = [
    {
        selector: 'img[src*="Admin+Dashboard"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">dashboard</span>
                Admin Dashboard
            </div>
        </div>`
    },
    {
        selector: 'img[src*="User+Management"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">people</span>
                User Management
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Fund+Overview"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">account_balance</span>
                Fund Overview
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Transactions"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">receipt_long</span>
                Transactions
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Charts"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">bar_chart</span>
                Financial Charts
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Buildings+List"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-purple-700 to-purple-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">apartment</span>
                Buildings List
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Building+Details"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">domain</span>
                Building Details
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Users+Table"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">table_view</span>
                Users Table
            </div>
        </div>`
    },
    {
        selector: 'img[src*="User+Profile"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">person</span>
                User Profile
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Pramukh+Dashboard"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-cyan-700 to-cyan-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">stars</span>
                Pramukh Dashboard
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Society+Fund"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">account_balance</span>
                Society Fund
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Building+Admin"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-orange-700 to-orange-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">domain</span>
                Building Admin
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Residents+List"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">groups</span>
                Residents List
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Member+Dashboard"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-lime-600 to-lime-700 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">person</span>
                Member Dashboard
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Profile+Settings"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">settings</span>
                Profile Settings
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Maintenance+Overview"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">build</span>
                Maintenance Overview
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Payment+Tracking"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">payments</span>
                Payment Tracking
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Maintenance+Charts"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-red-300 to-red-400 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">analytics</span>
                Maintenance Charts
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Meetings+Overview"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-indigo-700 to-indigo-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">event</span>
                Meetings Overview
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Meeting+Details"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">calendar_month</span>
                Meeting Details
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Residents+Overview"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">groups</span>
                Residents Overview
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Resident+Filters"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">filter_list</span>
                Resident Filters
            </div>
        </div>`
    },
    {
        selector: 'img[src*="Resident+Charts"]',
        replacement: `<div class="w-full h-64 rounded-lg shadow-lg bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center text-white font-bold text-xl mb-2">
            <div class="text-center">
                <span class="material-symbols-outlined text-4xl mb-2 block">pie_chart</span>
                Resident Charts
            </div>
        </div>`
    }
];

console.log('Image replacement script loaded. Run replaceAllImages() to fix all placeholder images.');
