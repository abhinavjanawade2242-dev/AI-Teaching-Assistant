# Contributing to EduAI Teaching Assistant

First off, thank you for considering contributing to EduAI! It's people like you that make this project better for everyone. 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by respect and inclusivity. By participating, you are expected to uphold this standard. Please be kind and constructive in your interactions.

## 🎯 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (screenshots, code snippets)
- **Describe the behavior you observed** and what you expected
- **Include browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any similar features** in other applications

### Your First Code Contribution

Unsure where to begin? You can start by looking through issues tagged:
- `good-first-issue` - Simple issues suitable for beginners
- `help-wanted` - Issues that need attention

### Pull Requests

- Fill in the required template
- Follow the coding guidelines
- Include screenshots for UI changes
- Update documentation if needed
- Test your changes thoroughly

## 🛠️ Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork locally**
```bash
git clone https://github.com/yourusername/eduai-teaching-assistant.git
cd eduai-teaching-assistant
```

3. **Set up a local server** (optional but recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using VS Code Live Server extension
```

4. **Create a branch** for your feature
```bash
git checkout -b feature/my-new-feature
```

5. **Make your changes** and test thoroughly

6. **Commit your changes**
```bash
git add .
git commit -m "Add some amazing feature"
```

7. **Push to your fork**
```bash
git push origin feature/my-new-feature
```

8. **Create a Pull Request** on GitHub

## 📝 Coding Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Keep markup clean and well-indented
- Use meaningful class and id names

### CSS
- Use CSS variables for colors and common values
- Follow BEM naming convention where appropriate
- Keep selectors simple and specific
- Comment complex styling logic
- Maintain responsive design principles

### JavaScript
- Use ES6+ features
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use `const` and `let`, avoid `var`
- Follow consistent indentation (4 spaces)

### File Organization
```
- HTML files in root directory
- CSS files in /css directory
- JavaScript files in /js directory
- Keep related code together
```

### Code Style Examples

**Good:**
```javascript
function calculateStudentAverage(scores) {
    if (!scores || scores.length === 0) {
        return 0;
    }
    const total = scores.reduce((sum, score) => sum + score, 0);
    return Math.round(total / scores.length);
}
```

**Avoid:**
```javascript
function calc(s) {
    var t = 0;
    for(var i=0;i<s.length;i++)t+=s[i];
    return t/s.length;
}
```

## 💬 Commit Message Guidelines

Write clear, concise commit messages:

### Format
```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat: Add dark mode toggle to dashboard

Added a toggle button in the navigation bar that switches
between light and dark themes. User preference is saved
in localStorage.

Closes #123
```

```
fix: Correct password visibility toggle in login form

The toggle icon was not changing state properly. Fixed
the JavaScript function to update the icon when clicked.
```

## 🔄 Pull Request Process

1. **Update documentation** if you've changed functionality
2. **Add/update comments** in your code
3. **Test thoroughly** across different browsers
4. **Update the README.md** if needed
5. **Request review** from maintainers
6. **Address feedback** promptly and professionally

### Pull Request Checklist

Before submitting, ensure:
- [ ] Code follows the style guidelines
- [ ] Comments are added where necessary
- [ ] Documentation is updated
- [ ] Changes work in multiple browsers
- [ ] No console errors or warnings
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

## 🎨 Priority Areas for Contribution

We especially welcome contributions in these areas:

1. **AI Integration** - Connect to real AI APIs (OpenAI, Gemini)
2. **Accessibility** - Improve ARIA labels, keyboard navigation
3. **Mobile Responsiveness** - Enhance mobile experience
4. **Testing** - Add automated tests
5. **Documentation** - Improve or translate documentation
6. **Features** - See Roadmap in README.md
7. **Bug Fixes** - Fix reported issues
8. **Performance** - Optimize loading and rendering

## ❓ Questions?

Don't hesitate to ask questions! You can:
- Open an issue with the `question` label
- Reach out to maintainers
- Check existing documentation

## 🙏 Thank You!

Your contributions make this project better for teachers and students everywhere. Every contribution, no matter how small, is valued and appreciated!

Happy coding! 🎓
