# 🎓 EduAI - AI Teaching Assistant

An AI-powered teaching assistant web application designed for multi-grade classrooms. Built with pure HTML, CSS, and JavaScript - no backend required!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange.svg)
![CSS](https://img.shields.io/badge/CSS-3-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)

## ✨ Features

### 👩‍🏫 For Teachers
- **Student Management** - Add, view, and remove students
- **Student Progress Tracking** - Monitor individual student performance with detailed analytics
- **Resource Management** - Create and manage learning resources with notes and document attachments
- **Quiz Creation** - Design custom quizzes for different subjects and grade levels
- **Dashboard Analytics** - View class-wide statistics and activity

### 👨‍🎓 For Students
- **Interactive Dashboard** - Track progress across all subjects
- **AI Tutor Chat** - Get help with homework and questions
- **Take Quizzes** - Practice with subject-specific quizzes
- **Browse Resources** - Access lesson plans, worksheets, activities, and notes
- **Activity Timeline** - View recent learning activities

### 📚 Resources System
- **4 Resource Types**: Lesson Plans, Worksheets, Videos, Activities
- **Grade Levels**: Primary (K-5), Middle (6-8), High School (9-12)
- **Subjects**: Mathematics, Science, English, History
- **Attachments**: Notes and downloadable documents (PDF/Word)

### 📊 Progress Tracking
- Subject-wise progress bars
- Quiz performance analytics
- Activity streak tracking
- Comprehensive student reports

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone or Download the Repository**
```bash
git clone https://github.com/yourusername/eduai-teaching-assistant.git
cd eduai-teaching-assistant
```

2. **Open in Browser**
   - **Option A**: Simply open `index.html` in your browser
   - **Option B**: Use a local server (recommended):
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server -p 8000
   
   # Then visit: http://localhost:8000
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html` → "Open with Live Server"

### Default Login Credentials

**Teacher/Admin Account:**
- Username: `teacher`
- Password: `teacher123`

**Student Account:**
- Username: `student`
- Password: `student123`

*Note: Select the appropriate role tab (Student/Teacher) before logging in.*

## 📁 Project Structure

```
ai-teaching-assistant/
├── index.html              # Landing page
├── login.html              # Login/Registration page
├── dashboard.html          # User dashboard
├── chat.html              # AI Tutor chat interface
├── quiz.html              # Quiz taking interface
├── resources.html         # Learning resources page
├── manage-students.html   # Student management (teachers only)
├── student-progress.html  # Student analytics (teachers only)
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── main.js           # Core functionality
│   ├── auth.js           # Authentication system
│   └── dashboard.js      # Dashboard logic
└── README.md             # This file
```

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling with custom properties (CSS variables)
- **JavaScript (ES6)** - Interactive functionality
- **LocalStorage** - Client-side data persistence

## 💾 Data Storage

This application uses browser LocalStorage for data persistence. All data is stored locally in the user's browser:

- User accounts and authentication
- Student records
- Learning resources
- Quiz results
- Progress data

**Note:** Data is not synchronized across devices or browsers. Clearing browser data will remove all stored information.

## 🎨 Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary: #4F46E5;      /* Primary color */
    --secondary: #F59E0B;    /* Secondary color */
    --accent: #10B981;       /* Accent color */
    --bg: #F8FAFC;          /* Background */
    /* ... more variables */
}
```

### Adding New Subjects
1. Update subject options in HTML forms
2. Add corresponding CSS for progress bars in `styles.css`
3. Update JavaScript arrays in respective pages

### Adding New Resource Types
1. Add option in `resources.html` form
2. Add CSS styling for the new type
3. Update filtering logic if needed

## 🔒 Security Notes

⚠️ **Important:** This is a client-side only application designed for educational purposes and small classroom use. It is **NOT** suitable for production environments with sensitive data because:

- Passwords are stored in plain text in LocalStorage
- No server-side validation
- No data encryption
- Anyone with browser access can view/modify data

For production use, implement:
- Server-side authentication
- Database storage
- Password hashing
- HTTPS
- Session management
- Input validation and sanitization

## 📱 Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Ideas for Contributions
- Add more subjects
- Implement actual AI chat functionality (integrate with AI API)
- Add data export/import features
- Create a dark mode
- Add more quiz types
- Implement printable reports
- Add multi-language support
- Create mobile app version

## 🐛 Known Issues

- LocalStorage has a 5-10MB limit (sufficient for typical classroom use)
- No real-time collaboration features
- No data backup/restore functionality
- Password visibility toggle uses emoji icons (may vary by system)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created as an educational project for multi-grade classroom management.

## 🙏 Acknowledgments

- Icon emojis from Unicode
- Design inspired by modern educational platforms
- Built with ❤️ for teachers and students

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Submit a pull request
- Contact the maintainer

## 🗺️ Roadmap

- [ ] Add real AI integration (OpenAI, Gemini, etc.)
- [ ] Implement actual quiz generation
- [ ] Add calendar/scheduling features
- [ ] Create assignment submission system
- [ ] Add parent portal
- [ ] Implement grade book
- [ ] Add attendance tracking
- [ ] Create mobile-responsive improvements
- [ ] Add data export (CSV, PDF)
- [ ] Implement class announcements

---

**Made with 🎓 for education | Start teaching smarter today!**
