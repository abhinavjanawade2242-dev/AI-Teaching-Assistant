// ===== Authentication System (localStorage) =====

// Initialize default accounts if none exist
function initAuth() {
    if (!localStorage.getItem('eduai_users')) {
        const defaultUsers = [
            { id: 1, username: 'teacher', password: 'teacher123', name: 'Ms. Johnson', role: 'teacher', email: 'teacher@eduai.com' },
            { id: 2, username: 'student', password: 'student123', name: 'Alex Smith', role: 'student', email: 'student@eduai.com', grade: '5' }
        ];
        localStorage.setItem('eduai_users', JSON.stringify(defaultUsers));
    }
    if (!localStorage.getItem('eduai_next_id')) {
        localStorage.setItem('eduai_next_id', '3');
    }
}

// Get all users
function getUsers() {
    initAuth();
    return JSON.parse(localStorage.getItem('eduai_users') || '[]');
}

// Save users
function saveUsers(users) {
    localStorage.setItem('eduai_users', JSON.stringify(users));
}

// Get next unique ID
function getNextId() {
    const id = parseInt(localStorage.getItem('eduai_next_id') || '1');
    localStorage.setItem('eduai_next_id', String(id + 1));
    return id;
}

// Login
function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const session = { id: user.id, username: user.username, name: user.name, role: user.role, email: user.email };
        localStorage.setItem('eduai_session', JSON.stringify(session));
        return { success: true, user: session };
    }
    return { success: false, message: 'Invalid username or password' };
}

// Register a new user (teachers register themselves, students are added by teachers)
function registerTeacher(username, password, name, email) {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Username already exists' };
    }
    const newUser = { id: getNextId(), username, password, name, role: 'teacher', email };
    users.push(newUser);
    saveUsers(users);
    return { success: true };
}

// Add student (teacher only)
function addStudent(username, password, name, email, grade) {
    const session = getSession();
    if (!session || session.role !== 'teacher') {
        return { success: false, message: 'Only teachers can add students' };
    }
    const users = getUsers();
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Username already exists' };
    }
    const newUser = { id: getNextId(), username, password, name, role: 'student', email, grade };
    users.push(newUser);
    saveUsers(users);
    return { success: true };
}

// Remove student (teacher only)
function removeStudent(studentId) {
    const session = getSession();
    if (!session || session.role !== 'teacher') {
        return { success: false, message: 'Only teachers can remove students' };
    }
    let users = getUsers();
    users = users.filter(u => !(u.id === studentId && u.role === 'student'));
    saveUsers(users);
    return { success: true };
}

// Get all students
function getStudents() {
    return getUsers().filter(u => u.role === 'student');
}

// Get current session
function getSession() {
    const session = localStorage.getItem('eduai_session');
    return session ? JSON.parse(session) : null;
}

// Check if logged in
function isLoggedIn() {
    return getSession() !== null;
}

// Check if current user is a teacher
function isTeacher() {
    const session = getSession();
    return session && session.role === 'teacher';
}

// Logout
function logout() {
    localStorage.removeItem('eduai_session');
    window.location.href = 'login.html';
}

// Require login - redirect to login page if not authenticated
function requireLogin() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Require teacher role
function requireTeacher() {
    if (!requireLogin()) return false;
    if (!isTeacher()) {
        alert('Access denied. Teacher account required.');
        window.location.href = 'dashboard.html';
        return false;
    }
    return true;
}

// Update navigation based on auth state
function updateNavAuth() {
    const session = getSession();
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;

    // Remove existing auth items
    navLinks.querySelectorAll('.nav-auth').forEach(el => el.remove());

    if (session) {
        // Add teacher-only links
        if (session.role === 'teacher') {
            const manageLink = document.createElement('a');
            manageLink.href = 'manage-students.html';
            manageLink.textContent = 'Manage Students';
            manageLink.className = 'nav-auth';
            if (window.location.pathname.includes('manage-students')) manageLink.classList.add('active');
            navLinks.appendChild(manageLink);
        }

        // Add user info and logout
        const userSpan = document.createElement('span');
        userSpan.className = 'nav-auth nav-user-info';
        userSpan.innerHTML = `<span class="nav-role-badge ${session.role}">${session.role === 'teacher' ? '👩‍🏫' : '👨‍🎓'} ${session.name}</span>`;
        navLinks.appendChild(userSpan);

        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'Logout';
        logoutLink.className = 'nav-auth nav-logout-btn';
        logoutLink.onclick = (e) => { e.preventDefault(); logout(); };
        navLinks.appendChild(logoutLink);
    } else {
        const loginLink = document.createElement('a');
        loginLink.href = 'login.html';
        loginLink.textContent = 'Login';
        loginLink.className = 'nav-auth nav-login-btn';
        navLinks.appendChild(loginLink);
    }
}

// Run on every page load
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    updateNavAuth();
});
