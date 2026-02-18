// Placeholder Image Generator for Documentation
// Creates unique placeholder images for each section of the walkthrough

const sections = [
    {
        name: 'login_page.png',
        title: 'Login Page',
        bgColor: '#0d968b',
        textColor: '#ffffff',
        icon: 'login'
    },
    {
        name: 'admin_dashboard.png',
        title: 'Admin Dashboard',
        bgColor: '#1e3b8a',
        textColor: '#ffffff',
        icon: 'dashboard'
    },
    {
        name: 'society_fund.png',
        title: 'Society Fund Management',
        bgColor: '#059669',
        textColor: '#ffffff',
        icon: 'account_balance'
    },
    {
        name: 'buildings.png',
        title: 'Buildings Management',
        bgColor: '#7c3aed',
        textColor: '#ffffff',
        icon: 'apartment'
    },
    {
        name: 'users_management.png',
        title: 'Users Management',
        bgColor: '#dc2626',
        textColor: '#ffffff',
        icon: 'people'
    },
    {
        name: 'pramukh_dashboard.png',
        title: 'Pramukh Dashboard',
        bgColor: '#0891b2',
        textColor: '#ffffff',
        icon: 'stars'
    },
    {
        name: 'building_admin_dashboard.png',
        title: 'Building Admin Dashboard',
        bgColor: '#ea580c',
        textColor: '#ffffff',
        icon: 'domain'
    },
    {
        name: 'member_dashboard.png',
        title: 'Member Dashboard',
        bgColor: '#65a30d',
        textColor: '#ffffff',
        icon: 'person'
    },
    {
        name: 'maintenance.png',
        title: 'Maintenance Management',
        bgColor: '#b91c1c',
        textColor: '#ffffff',
        icon: 'build'
    },
    {
        name: 'meetings.png',
        title: 'Meeting Management',
        bgColor: '#4338ca',
        textColor: '#ffffff',
        icon: 'event'
    }
];

// Generate canvas-based placeholder images
function generatePlaceholderImages() {
    sections.forEach(section => {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext('2d');
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, section.bgColor);
        gradient.addColorStop(1, adjustColor(section.bgColor, -20));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Glass morphism effect
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);
        
        // Title
        ctx.fillStyle = section.textColor;
        ctx.font = 'bold 48px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(section.title, canvas.width / 2, canvas.height / 2 - 50);
        
        // Subtitle
        ctx.font = '24px Inter';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText('Society Management System', canvas.width / 2, canvas.height / 2 + 20);
        
        // Decorative elements
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(100, 100, canvas.width - 200, canvas.height - 200);
        
        // Download the image
        const link = document.createElement('a');
        link.download = section.name;
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Instructions for manual generation
console.log('Placeholder Image Generator');
console.log('To generate unique placeholder images:');
console.log('1. Open this script in a browser console');
console.log('2. Run: generatePlaceholderImages()');
console.log('3. Save each generated image to the screenshots folder');

export { generatePlaceholderImages, sections };
