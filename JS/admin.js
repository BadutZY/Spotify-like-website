// Admin Panel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Global variables for cropper and edit profile pic
    let cropper = null;
    let finalEditProfilePic = '';
    
    // Check if user is logged in as admin
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};
    if (!currentUser.isAdmin) {
        // Redirect to login page if not admin
        window.location.href = 'login.html';
        return;
    }
    
    // Set admin username in header
    document.getElementById('adminUsername').textContent = currentUser.username || 'Admin';
    
    // Menu navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    const sectionTitle = document.getElementById('sectionTitle');
    
    menuItems.forEach(item => {
        if (!item.getAttribute('data-section')) return; // Skip if no data-section attribute
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Update menu active state
            menuItems.forEach(mi => mi.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(`${targetSection}-section`).classList.add('active');
            
            // Update section title
            sectionTitle.textContent = this.querySelector('span').textContent;
        });
    });
    
    // Logout functionality
    const logoutButton = document.getElementById('logoutButton');
    const logoutConfirmModal = document.getElementById('logoutConfirmModal');
    const closeLogoutModal = document.getElementById('closeLogoutModal');
    const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
    const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
    
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        logoutConfirmModal.classList.add('show');
    });
    
    closeLogoutModal.addEventListener('click', function() {
        logoutConfirmModal.classList.remove('show');
    });
    
    cancelLogoutBtn.addEventListener('click', function() {
        logoutConfirmModal.classList.remove('show');
    });
    
    confirmLogoutBtn.addEventListener('click', function() {
        // Clear session storage
        sessionStorage.removeItem('currentUser');
        // Redirect to login page
        window.location.href = 'login.html';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === logoutConfirmModal) {
            logoutConfirmModal.classList.remove('show');
        } else if (e.target === document.getElementById('editUserModal')) {
            document.getElementById('editUserModal').classList.remove('show');
        } else if (e.target === document.getElementById('confirmDeleteModal')) {
            document.getElementById('confirmDeleteModal').classList.remove('show');
        } else if (e.target === document.getElementById('cropImageModal')) {
            document.getElementById('cropImageModal').classList.remove('show');
            if (cropper) {
                cropper.destroy();
                cropper = null;
            }
        }
    });
    
    // Load dashboard data
    loadDashboard();
    
    // Load users data
    loadUsers();
    
    // Setup user editing functionality
    setupUserEditing();
    
    // Password toggle functionality globally defined
    window.togglePassword = function(inputId, toggleBtn) {
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
    };
});

// Load dashboard data
function loadDashboard() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Update total users count
    document.getElementById('totalUsers').textContent = users.length;
    
    // Calculate new users (for demo purposes, we'll consider users added in the last 24 hours)
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    // In real app, you'd store creation timestamp for each user
    // Here we'll just set a random number for demonstration
    const newUsersCount = Math.min(Math.floor(Math.random() * users.length), users.length);
    document.getElementById('newUsers').textContent = newUsersCount;
    
    // Set last login time (for demo)
    document.getElementById('lastLogin').textContent = now.toLocaleString();
    
    // Add some fake activities to activity list
    const activityList = document.getElementById('activityList');
    const activities = [
        { action: 'Admin logged in', time: 'Just now', icon: 'fa-sign-in-alt' },
        { action: 'User account updated', time: '10 minutes ago', icon: 'fa-user-edit' },
        { action: 'New user registered', time: '1 hour ago', icon: 'fa-user-plus' },
        { action: 'Password reset request', time: '2 hours ago', icon: 'fa-key' }
    ];
    
    activityList.innerHTML = '';
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-details">
                <p>${activity.action}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}

// Load users
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.getElementById('usersTableBody');
    
    // Clear table body
    tableBody.innerHTML = '';
    
    // Add user rows
    users.forEach(user => {
        const row = document.createElement('tr');
        
        let profilePicHTML;
        if (user.profilePic) {
            profilePicHTML = `<img src="${user.profilePic}" alt="${user.username}" class="user-avatar">`;
        } else {
            profilePicHTML = `<div class="user-avatar-placeholder"><i class="fas fa-user"></i></div>`;
        }
        
        row.innerHTML = `
            <td>
                <div class="user-profile">
                    ${profilePicHTML}
                </div>
            </td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button class="action-btn edit-btn" data-username="${user.username}">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Add click event for edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            openEditUserModal(username);
        });
    });
}

// Open edit user modal
function openEditUserModal(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username);
    
    if (!user) return;
    
    const modal = document.getElementById('editUserModal');
    const editUserId = document.getElementById('editUserId');
    const editUsername = document.getElementById('editUsername');
    const editEmail = document.getElementById('editEmail');
    const editProfilePicPreview = document.getElementById('editProfilePicPreview');
    
    // Clear previous error/success messages
    document.getElementById('edit-error').style.display = 'none';
    document.getElementById('edit-success').style.display = 'none';
    
    // Reset password fields
    document.getElementById('editPassword').value = '';
    document.getElementById('editConfirmPassword').value = '';
    
    // Set form values
    editUserId.value = username; // Store original username for reference
    editUsername.value = user.username;
    editEmail.value = user.email;
    
    // Set profile pic preview
    if (user.profilePic) {
        editProfilePicPreview.innerHTML = `
            <img src="${user.profilePic}" alt="Profile Picture">
            <div class="profile-pic-overlay">
                <i class="fas fa-camera" style="color: white;"></i>
            </div>
        `;
    } else {
        editProfilePicPreview.innerHTML = `
            <i class="fas fa-user fa-2x" style="color: var(--light-grey);"></i>
            <div class="profile-pic-overlay">
                <i class="fas fa-camera" style="color: white;"></i>
            </div>
        `;
    }
    
    // Show modal
    modal.classList.add('show');
}

// Setup user editing functionality
function setupUserEditing() {
    // Variables in wider scope for better access
    let cropper = null;
    let finalEditProfilePic = '';
    let userToDelete = null;
    
    // Edit profile picture functionality
    const editProfilePicInput = document.getElementById('editProfilePicInput');
    const editProfilePicPreview = document.getElementById('editProfilePicPreview');
    
    editProfilePicInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                // Open crop modal
                const cropModal = document.getElementById('cropImageModal');
                const imageElement = document.getElementById('cropImage');
                
                // Set the src after destroying any existing cropper
                if (cropper) {
                    cropper.destroy();
                    cropper = null;
                }
                
                imageElement.src = e.target.result;
                cropModal.classList.add('show');
                
                // Initialize cropper AFTER the image is loaded
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
            };
            
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
            
            finalEditProfilePic = croppedCanvas.toDataURL("image/png");
            
            // Display cropped image in profile preview
            editProfilePicPreview.innerHTML = `
                <img src="${finalEditProfilePic}" alt="Profile Picture">
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
        // Don't reset the input here to avoid issues with same file selection
    });
    
    // Form submission
    const editUserForm = document.getElementById('editUserForm');
    editUserForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const originalUsername = document.getElementById('editUserId').value;
        const newUsername = document.getElementById('editUsername').value;
        const email = document.getElementById('editEmail').value;
        const password = document.getElementById('editPassword').value;
        const confirmPassword = document.getElementById('editConfirmPassword').value;
        
        const errorMsg = document.getElementById('edit-error');
        const successMsg = document.getElementById('edit-success');
        
        // Reset display
        errorMsg.style.display = 'none';
        successMsg.style.display = 'none';
        
        // Validate inputs
        if (!newUsername || !email) {
            errorMsg.textContent = 'Username and email are required!';
            errorMsg.style.display = 'block';
            return;
        }
        
        // Validate password (only if attempting to change it)
        if (password && password !== confirmPassword) {
            errorMsg.textContent = 'Passwords do not match!';
            errorMsg.style.display = 'block';
            return;
        }
        
        // Get users
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find current user
        const currentUser = users.find(u => u.username === originalUsername);
        if (!currentUser) {
            errorMsg.textContent = 'User not found!';
            errorMsg.style.display = 'block';
            return;
        }
        
        // Check if new username already exists (and it's not the same user)
        if (newUsername !== originalUsername && users.some(u => u.username === newUsername)) {
            errorMsg.textContent = 'Username already exists!';
            errorMsg.style.display = 'block';
            return;
        }
        
        // Check if new email already exists (and it's not the same user)
        if (email !== currentUser.email && users.some(u => u.email === email && u.username !== originalUsername)) {
            errorMsg.textContent = 'Email already registered to another user!';
            errorMsg.style.display = 'block';
            return;
        }
        
        // Update user
        const updatedUsers = users.map(user => {
            if (user.username === originalUsername) {
                const updatedUser = {
                    ...user,
                    username: newUsername,
                    email: email
                };
                
                // Update password if provided
                if (password) {
                    updatedUser.password = password;
                }
                
                // Update profile pic if changed
                if (finalEditProfilePic) {
                    updatedUser.profilePic = finalEditProfilePic;
                }
                
                return updatedUser;
            }

            return user;
        });
        
        // Save updated users
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        // Also update the current user in session storage if it's the same user
        const sessionUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (sessionUser && sessionUser.username === originalUsername) {
            sessionUser.username = newUsername;
            sessionUser.email = email;
            if (finalEditProfilePic) {
                sessionUser.profilePic = finalEditProfilePic;
            }
            sessionStorage.setItem('currentUser', JSON.stringify(sessionUser));
        }
        
        // Show success message
        successMsg.textContent = 'User updated successfully!';
        successMsg.style.display = 'block';

        Swal.fire({
            title: `User ${originalUsername} has been updated successfully! 
            ${newUsername !== originalUsername ? '\n- Username changed to: ' + newUsername : ''}
            ${email !== currentUser.email ? '\n- Email changed to: ' + email : ''}
            ${password ? '\n- Password has been changed' : ''}
            ${finalEditProfilePic ? '\n- Profile picture has been updated' : ''}`,
            icon: "info",
        });
        
        // Reset profile pic variable
        finalEditProfilePic = '';
        
        // Reload users table
        loadUsers();
        
        // Close modal after delay
        setTimeout(() => {
            document.getElementById('editUserModal').classList.remove('show');
        }, 1500);
    });
    
    // Delete user functionality
    const deleteUserBtn = document.getElementById('deleteUserBtn');
    const confirmDeleteModal = document.getElementById('confirmDeleteModal');
    const closeConfirmDeleteModal = document.getElementById('closeConfirmDeleteModal');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    
    deleteUserBtn.addEventListener('click', function(e) {
        e.preventDefault();
        userToDelete = document.getElementById('editUserId').value;
        document.getElementById('editUserModal').classList.remove('show');
        confirmDeleteModal.classList.add('show');
    });
    
    closeConfirmDeleteModal.addEventListener('click', function() {
        confirmDeleteModal.classList.remove('show');
        userToDelete = null;
    });
    
    cancelDeleteBtn.addEventListener('click', function() {
        confirmDeleteModal.classList.remove('show');
        userToDelete = null;
    });
    
    confirmDeleteBtn.addEventListener('click', function() {
        if (!userToDelete) return;
        
        // Get users
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Filter out the user to delete
        const updatedUsers = users.filter(user => user.username !== userToDelete);
        
        // Save updated users
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        // Close modals
        confirmDeleteModal.classList.remove('show');
        
        // Add activity
        const activityList = document.getElementById('activityList');
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="fas fa-user-minus"></i>
            </div>
            <div class="activity-details">
                <p>User "${userToDelete}" deleted</p>
                <span class="activity-time">Just now</span>
            </div>
        `;
        activityList.insertBefore(activityItem, activityList.firstChild);
        
        // Update dashboard stats
        document.getElementById('totalUsers').textContent = updatedUsers.length;
        
        // Reset userToDelete
        userToDelete = null;
        
        // Reload users table
        loadUsers();
    });
    
    // Close edit modal
    document.getElementById('closeEditModal').addEventListener('click', function() {
        document.getElementById('editUserModal').classList.remove('show');
        finalEditProfilePic = '';
    });
}