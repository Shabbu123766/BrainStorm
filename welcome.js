// DOM elements
const startQuizBtn = document.getElementById('start-quiz-btn');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');

// Selected difficulty
let selectedDifficulty = 'medium'; // Default to medium

// Initialize welcome page
function initWelcome() {
    // Set default difficulty selection (medium is already highlighted with pulse-glow)
    difficultyButtons[1].classList.add('bg-white/30', 'scale-105');
    difficultyButtons[1].classList.remove('bg-white/20');
    
    // Add click listeners to difficulty buttons
    difficultyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active state from all buttons
            difficultyButtons.forEach(btn => {
                btn.classList.remove('bg-white/30', 'scale-105', 'pulse-glow');
                btn.classList.add('bg-white/10');
            });
            
            // Add active state to clicked button
            button.classList.add('bg-white/30', 'scale-105');
            button.classList.remove('bg-white/10');
            
            // Add pulse glow to medium difficulty
            if (index === 1) {
                button.classList.add('pulse-glow');
            }
            
            // Set selected difficulty
            const difficulties = ['easy', 'medium', 'hard'];
            selectedDifficulty = difficulties[index];
        });
    });
}

// Start quiz
function startQuiz() {
    // Store selected difficulty in localStorage
    localStorage.setItem('selectedDifficulty', selectedDifficulty);
    
    // Clear any previous quiz results
    localStorage.removeItem('quizResults');
    
    // Navigate to quiz page
    window.location.href = 'quiz.html';
}

// Event listeners
startQuizBtn.addEventListener('click', startQuiz);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initWelcome);
