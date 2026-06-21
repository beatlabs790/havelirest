const fs = require('fs');
const path = require('path');

const dirs = [
    'assets/images/exterior',
    'assets/images/interior',
    'assets/images/menu'
];

// Create directories if they don't exist
dirs.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Created directory: ${dir}`);
    }
});

const fileGroups = {
    'assets/images/exterior': [
        'unnamed (10).jpg',
        'unnamed (12).jpg'
    ],
    'assets/images/interior': [
        'unnamed (11).jpg',
        'unnamed (13).jpg',
        'unnamed (14).jpg'
    ],
    'assets/images/menu': [
        'unnamed.jpg',
        'unnamed.png',
        'unnamed (1).jpg',
        'unnamed (1).png',
        'unnamed (2).jpg',
        'unnamed (2).png',
        'unnamed (3).jpg',
        'unnamed (4).jpg',
        'unnamed (5).jpg',
        'unnamed (7).jpg',
        'unnamed (9).jpg'
    ]
};

// Copy files
Object.entries(fileGroups).forEach(([targetDir, files]) => {
    files.forEach(file => {
        const srcPath = path.join(__dirname, file);
        const destPath = path.join(__dirname, targetDir, file);
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to ${targetDir}`);
        } else {
            console.warn(`File not found: ${file}`);
        }
    });
});

console.log('Image organization completed!');
