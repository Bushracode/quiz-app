# Quiz App

An interactive quiz application built with vanilla JavaScript. Test your knowledge with an engaging, responsive interface.

## Overview

The Quiz App is a lightweight, feature-rich application for creating and taking quizzes. Perfect for educational purposes, interviews prep, or knowledge testing.

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Framework** | Vanilla JS (No dependencies) |
| **Styling** | CSS3 with Flexbox/Grid |
| **Deployment** | Vercel |
| **Storage** | Browser LocalStorage |

## Features

- 📝 Multiple question types (MCQ, True/False, Multiple Answer)
- ⏱️ Timed quizzes
- 📊 Instant score calculation
- 💾 Progress tracking
- 🎨 Beautiful UI with animations
- 📱 Fully responsive design
- ⌨️ Keyboard navigation support
- 🎯 Question shuffle option
- 📈 Performance analytics

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for customization

### Installation

```bash
git clone https://github.com/Bushracode/quiz-app.git
cd quiz-app
```

### Running Locally

```bash
# Using Python
python -m http.server 8000

# Using Node http-server
npx http-server
```

Open `http://localhost:8000` in your browser.

## How to Use

1. **Start Quiz**: Click "Begin Quiz" button
2. **Answer Questions**: Select your answer(s)
3. **Navigate**: Use Next/Previous buttons
4. **Submit**: Review answers and submit
5. **View Results**: See your score and detailed review

## Adding Custom Questions

### JSON Format

```json
{
  "quizzes": [
    {
      "id": 1,
      "title": "Web Development Basics",
      "description": "Test your HTML, CSS, JS knowledge",
      "questions": [
        {
          "id": 1,
          "question": "What does HTML stand for?",
          "type": "multiple-choice",
          "options": ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
          "correct": 0,
          "explanation": "HTML stands for HyperText Markup Language"
        }
      ]
    }
  ]
}
```

## Project Structure

```
quiz-app/
├── index.html          # Quiz interface
├── style.css           # Styling
├── script.js           # Quiz logic
├── data.json           # Quiz questions (optional)
└── README.md
```

## Customization

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
  --primary-color: #2D4F3E;
  --secondary-color: #DEDBD2;
  --text-color: #1A1A1A;
  --success-color: #4CAF50;
  --error-color: #F44336;
}
```

### Question Types

- **Multiple Choice**: Single correct answer
- **True/False**: Boolean questions
- **Multiple Select**: Multiple correct answers

## Live Demo

Try the app: [Quiz App](https://quiz-app-zubu2.vercel.app)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- Zero external dependencies
- Fast load time (<100ms)
- Lightweight bundle (~50KB)
- Mobile optimized

## Accessibility

- ARIA labels
- Keyboard navigation (Tab, Enter, Arrow keys)
- High contrast colors
- Screen reader friendly

## Future Enhancements

- [ ] User authentication
- [ ] Quiz sharing via URL
- [ ] Multiplayer mode
- [ ] Question difficulty levels
- [ ] Leaderboard
- [ ] Certificate generation
- [ ] Backend integration

## Troubleshooting

### Questions not loading
- Check JSON file path in `script.js`
- Verify JSON syntax with JSONLint
- Check browser console for errors

### Timer not working
- Ensure JavaScript is enabled
- Clear browser cache
- Try different browser

## Best Practices

- Keep questions clear and concise
- Use balanced difficulty levels
- Provide explanations for answers
- Test quiz before publishing
- Get user feedback

## License

MIT License - Feel free to use and modify

---

**Built with ❤️ by Bushracode | Making Learning Interactive**
