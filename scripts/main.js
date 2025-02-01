// Configuration
const algorithms = [
    {
        name: 'Caesar Cipher',
        type: 'classical',
        description: 'Shift-based substitution cipher',
        demo: 'caesar'
    },
    {
        name: 'AES-256',
        type: 'modern',
        description: 'Advanced Encryption Standard',
        demo: 'aes'
    },
    {
        name: 'RSA',
        type: 'asymmetric',
        description: 'Public-key cryptography',
        demo: 'rsa'
    },
    {
        name: 'SHA-256',
        type: 'hash',
        description: 'Secure Hash Algorithm',
        demo: 'sha256'
    },
    {
        name: 'File Crypto',
        type: 'utility',
        description: 'File encryption/decryption',
        demo: 'file'
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    renderAlgorithmCards();
    initTheme();
    registerServiceWorker();
});

// Render Algorithm Cards
function renderAlgorithmCards() {
    const container = document.getElementById('algorithm-cards');
    
    algorithms.forEach(algo => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${algo.name}</h5>
                    <p class="card-text">${algo.description}</p>
                    <button class="btn btn-primary demo-btn" 
                            data-demo="${algo.demo}">
                        Launch Demo
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('click', () => loadDemo(btn.dataset.demo));
    });
}

// Load Demo Section
async function loadDemo(demoName) {
    const container = document.getElementById('demos-container');
    container.innerHTML = await (await fetch(`demos/${demoName}.html`)).text();
    window.scrollTo({ top: container.offsetTop, behavior: 'smooth' });
    initializeDemo(demoName);
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    }
}

// Core Cryptographic Functions
class CryptoOperations {
    static caesarCipher(text, shift, encrypt = true) {
        // Implementation
    }

    static aesEncrypt(text, key) {
        return CryptoJS.AES.encrypt(text, key).toString();
    }

    static aesDecrypt(ciphertext, key) {
        try {
            return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
        } catch (e) {
            return false;
        }
    }

    static generateRSAKeys() {
        const keys = forge.pki.rsa.generateKeyPair({bits: 2048, e: 0x10001});
        return {
            publicKey: forge.pki.publicKeyToPem(keys.publicKey),
            privateKey: forge.pki.privateKeyToPem(keys.privateKey)
        };
    }

    static sha256Hash(input) {
        return CryptoJS.SHA256(input).toString();
    }
}

// File Operations
class FileOperations {
    static async encryptFile(file, key) {
        // Implementation
    }

    static async decryptFile(file, key) {
        // Implementation
    }
}

// Animation Controller
class Animator {
    static animateElement(element, animation) {
        // GSAP animations
    }

    static visualizeProcess(steps) {
        // Step-by-step visualization
    }
}