// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const formContainers = document.querySelectorAll('.form-container');
let cropper;

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and forms
        tabs.forEach(t => t.classList.remove('active'));
        formContainers.forEach(form => form.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding form
        tab.classList.add('active');
        document.getElementById(`${target}-form`).classList.add('active');
        
        // Clear any error/success messages
        document.querySelectorAll('.error-message, .success-message').forEach(msg => {
            msg.style.display = 'none';
        });
    });
});

// Password toggle functionality
function togglePassword(inputId, toggleBtn) {
    const passwordInput = document.getElementById(inputId);
    const icon = toggleBtn.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Profile picture preview and cropping
const profilePicInput = document.getElementById('profilePicInput');
const profilePicPreview = document.getElementById('profilePicPreview');
let finalProfilePic = '';

profilePicInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Open crop modal
            const cropModal = document.getElementById('cropImageModal');
            const imageElement = document.getElementById('cropImage');
            imageElement.src = e.target.result;
            cropModal.classList.add('show');
            
            // Initialize cropper
            if (cropper) {
                cropper.destroy();
            }
            
            // Wait for image to load before initializing cropper
            imageElement.onload = function() {
                cropper = new Cropper(imageElement, {
                    aspectRatio: 1,
                    viewMode: 1,
                    dragMode: 'move',
                    autoCropArea: 0.9,
                    guides: true,
                    background: false,
                    cropBoxMovable: true,
                    cropBoxResizable: true,
                    toggleDragModeOnDblclick: false
                });
            };
        }
        reader.readAsDataURL(file);
    }
});

// Crop Image Confirmation
document.getElementById('cropImageBtn').addEventListener('click', function() {
    if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas({
            width: 200,
            height: 200
        });
        
        finalProfilePic = croppedCanvas.toDataURL("image/png");
        
        // Display cropped image in profile preview
        profilePicPreview.innerHTML = `
            <img src="${finalProfilePic}" alt="Profile Picture">
            <div class="profile-pic-overlay">
                <i class="fas fa-camera" style="color: white;"></i>
            </div>
        `;
        
        // Close the crop modal
        document.getElementById('cropImageModal').classList.remove('show');
        
        // Destroy cropper
        cropper.destroy();
        cropper = null;
    }
});

// Close crop modal
document.getElementById('closeCropModal').addEventListener('click', function() {
    document.getElementById('cropImageModal').classList.remove('show');
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    profilePicInput.value = '';
});

// Open and Close Reset Password Modal
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const resetPasswordModal = document.getElementById('resetPasswordModal');
const closeResetModal = document.getElementById('closeResetModal');

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    resetPasswordModal.classList.add('show');
});

closeResetModal.addEventListener('click', function() {
    resetPasswordModal.classList.remove('show');
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === resetPasswordModal) {
        resetPasswordModal.classList.remove('show');
    } else if (e.target === document.getElementById('cropImageModal')) {
        document.getElementById('cropImageModal').classList.remove('show');
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
        profilePicInput.value = '';
    }
});

// Form submissions
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const resetForm = document.getElementById('sendResetLink');

// Add this code to your login.js file, before the "Login form submission" event listener

// Create admin account if it doesn't exist
function initializeAdminAccount() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if admin account already exists
    const adminExists = users.some(user => user.isAdmin === true);
    
    if (!adminExists) {
        // Create default admin account
        users.push({
            username: 'BadutZY',
            email: 'badutzy@gmail.com',
            password: 'Amanda123',
            profilePic: '',
            isAdmin: true
        });
        
        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Admin account created');
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminAccount();

    // Get admin status from session
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};
    const isAdmin = currentUser.isAdmin || false;
    
    // Update username display
    const usernameElement = document.getElementById('username');
    const mobileUsernameElement = document.getElementById('mobile-username');
    
    if (currentUser.username) {
        if (usernameElement) usernameElement.textContent = currentUser.username;
        if (mobileUsernameElement) mobileUsernameElement.textContent = currentUser.username;
    }
    
    // Show admin badge if user is admin
    const adminBadge = document.getElementById('admin-badge');
    const mobileAdminBadge = document.getElementById('mobile-admin-badge');
    
    if (isAdmin) {
        if (adminBadge) adminBadge.style.display = 'block';
        if (mobileAdminBadge) mobileAdminBadge.style.display = 'block';
    }
    
    // Show admin panel link if user is admin
    const adminPanelLink = document.getElementById('admin-panel-link');
    const mobileAdminPanelLink = document.getElementById('mobile-admin-panel-link');
    
    if (isAdmin) {
        if (adminPanelLink) {
            adminPanelLink.style.display = 'block';
            adminPanelLink.addEventListener('click', function() {
                window.location.href = 'admin.html';
            });
        }
        
        if (mobileAdminPanelLink) {
            mobileAdminPanelLink.style.display = 'block';
            mobileAdminPanelLink.addEventListener('click', function() {
                window.location.href = 'admin.html';
            });
        }
    }
});

// Replace both existing login form submission handlers with this one:
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store current user data in session
        sessionStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            email: user.email,
            profilePic: user.profilePic,
            isAdmin: user.isAdmin || false
        }));
        
        // Show success message
        const successMsg = document.getElementById('login-success');
        successMsg.textContent = 'Login successful! Redirecting...';
        successMsg.style.display = 'block';
        
        // Redirect based on user type
        setTimeout(() => {
            if (user.isAdmin) {
                window.location.href = 'music.html';
            } else {
                window.location.href = 'music.html';
            }
        }, 1000);
    } else {
        // Show error message
        const errorMsg = document.getElementById('login-error');
        errorMsg.textContent = 'Invalid username or password!';
        errorMsg.style.display = 'block';
    }
});

// Register form submission
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Get profile picture
    let profilePic = finalProfilePic || '';
    
    // Form validation
    const errorMsg = document.getElementById('register-error');
    
    if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match!';
        errorMsg.style.display = 'block';
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username or email already exists
    if (users.some(user => user.username === username)) {
        errorMsg.textContent = 'Username already exists!';
        errorMsg.style.display = 'block';
        return;
    }
    
    if (users.some(user => user.email === email)) {
        errorMsg.textContent = 'Email already registered!';
        errorMsg.style.display = 'block';
        return;
    }
    
    // Add new user
    users.push({
        username,
        email,
        password,
        profilePic
    });
    
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Show success message
    const successMsg = document.getElementById('register-success');
    successMsg.textContent = 'Registration successful! You can now login.';
    successMsg.style.display = 'block';
    
    // Clear form
    registerForm.reset();
    profilePicPreview.innerHTML = `
        <i class="fas fa-user fa-2x" style="color: var(--light-grey);"></i>
        <div class="profile-pic-overlay">
            <i class="fas fa-camera" style="color: white;"></i>
        </div>
    `;
    finalProfilePic = '';
    
    // Switch to login tab after 2 seconds
    setTimeout(() => {
        document.querySelector('.tab[data-tab="login"]').click();
    }, 2000);
});

// Reset password functionality
resetForm.addEventListener('click', function() {
    const email = document.getElementById('resetEmail').value;
    const errorMsg = document.getElementById('reset-error');
    const successMsg = document.getElementById('reset-success');
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email exists
    if (!users.some(user => user.email === email)) {
        errorMsg.textContent = 'Email not found!';
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        return;
    }
    
    // In a real application, this would send an email with a reset link
    // For this example, we'll just show a success message
    errorMsg.style.display = 'none';
    successMsg.textContent = 'Password reset link has been sent to your email!';
    successMsg.style.display = 'block';
    
    // Close modal after 3 seconds
    setTimeout(() => {
        resetPasswordModal.classList.remove('show');
        document.getElementById('resetEmail').value = '';
    }, 3000);
});

// Add this function at the end of your login.js file
function checkAndDisplayAdminStatus() {
    // This function will be called when musik.js loads
    
    // Check if user is logged in and is admin
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};
    const isAdmin = currentUser.isAdmin || false;
    
    // Let musik.js know about admin status by setting it in localStorage
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
    
    // Return admin status
    return isAdmin;
}

// Make the function accessible globally
window.checkAndDisplayAdminStatus = checkAndDisplayAdminStatus;

