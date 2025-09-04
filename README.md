# BrainStorm Academy

A cutting-edge, interactive quiz platform that challenges your intellect with mind-bending questions and real-time performance tracking. Experience the future of learning with our modern glassmorphism design and intelligent difficulty scaling.

## 🌟 Features

### Core Experience
- **🎯 Dynamic Difficulty Levels**: Beginner (45s), Expert (30s), Master (15s) per question
- **⏱️ Intelligent Timer System**: Per-question persistent timers with visual warnings
- **🧠 Smart Navigation**: Skip, Next, and Previous with timeout enforcement
- **📊 Real-time Analytics**: Live scoring and comprehensive performance insights
- **🎨 Modern UI**: Glassmorphism design with smooth animations and gradient backgrounds

### Advanced Functionality
- **🔄 Persistent State**: Timer and answers preserved across navigation
- **🚨 Timeout Management**: Automatic input locking when time expires
- **📱 Responsive Design**: Seamless experience across all devices
- **💾 Local Storage**: Profile and results saved automatically
- **🌐 API Integration**: Dynamic question loading with offline fallback

## 🏗️ Project Architecture

```
BrainStormAcademy/
├── index.html              # Welcome & Challenge Selection
├── welcome.js              # Welcome page logic
├── quiz.html               # Main Challenge Interface
├── quiz.js                 # Challenge logic & timer management
├── results.html            # Performance Analysis
├── results.js              # Results processing & display
├── profile.html            # Scholar Profile Management
├── questions.json          # Offline question database
└── src/                    # React Implementation (Alternative)
    ├── components/
    │   ├── Welcome.js
    │   ├── Quiz.js
    │   └── Results.js
    ├── data/quizData.js
    ├── App.js
    ├── index.js
    └── index.css
```

## 🚀 Quick Start

### Option 1: Direct Browser Access
1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd BrainStormAcademy
   ```

2. **Open in Browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   ```

### Option 2: React Development
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Access Application**: `http://localhost:3000`

## 🎮 How to Play

1. **Select Your Challenge**: Choose from Beginner, Expert, or Master difficulty
2. **Answer Questions**: Each question has a time limit based on difficulty
3. **Navigate Freely**: Use Previous, Skip, or Next buttons as needed
4. **Review Performance**: Analyze your answers and see detailed statistics
5. **Track Progress**: Monitor your improvement over time

## 🧠 Challenge Mechanics

### Timer System
- **Per-Question Tracking**: Each question maintains its own timer
- **Persistent State**: Revisiting questions preserves remaining time
- **Visual Warnings**: 
  - 🟡 Yellow warning at 20 seconds remaining
  - 🔴 Red danger at 10 seconds remaining
- **Timeout Handling**: Inputs lock automatically when time expires

### Scoring System
- **Real-time Updates**: Score updates immediately upon correct answers
- **Accuracy Calculation**: Based on attempted questions (skipped questions excluded)
- **Performance Analytics**: Detailed breakdown of correct/incorrect answers

## 🎨 Design Philosophy

### Visual Identity
- **Color Palette**: Purple-blue gradient (`#667eea` to `#764ba2`)
- **Typography**: Inter font family for modern readability
- **Effects**: Glassmorphism with backdrop blur and transparency
- **Animations**: Smooth transitions and floating elements

### User Experience
- **Intuitive Navigation**: Clear visual hierarchy and logical flow
- **Accessibility**: High contrast ratios and keyboard navigation
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Lightweight animations and efficient rendering

## 🔧 Customization

### Adding New Questions
Edit `questions.json` to expand the question database:

```json
{
  "easy": [
    {
      "question": "Your question here?",
      "correct_answer": "Correct Answer",
      "incorrect_answers": ["Wrong 1", "Wrong 2", "Wrong 3"]
    }
  ]
}
```

### Modifying Difficulty Settings
Update timer limits in `quiz.js`:

```javascript
function getTimeLimit(difficulty) {
    if (difficulty === 'easy') return 45;    // Beginner
    if (difficulty === 'hard') return 15;    // Master
    return 30;                               // Expert (default)
}
```

### Styling Customization
Modify CSS variables in each HTML file:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --glass-opacity: rgba(255, 255, 255, 0.1);
    --border-opacity: rgba(255, 255, 255, 0.2);
}
```

## 🚀 Production Deployment

### React Build
```bash
npm run build
```
Creates optimized production build in `build/` directory.

### Static Hosting
Upload all files to any static hosting service:
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable in repository settings

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Heroicons SVG library
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Storage**: LocalStorage API
- **API**: OpenTDB for dynamic questions

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

© 2024 BrainStorm Academy. All rights reserved.

---

**Ready to challenge your intellect?** 🧠✨

Start your journey at BrainStorm Academy and discover the limits of your knowledge!