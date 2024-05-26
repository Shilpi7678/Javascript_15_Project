
// javascript.js

document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.question-btn');

    btns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const question = e.currentTarget.closest('.question');
            question.classList.toggle('show-text');
            
            // Close other open questions
            btns.forEach(function(otherBtn) {
                const otherQuestion = otherBtn.closest('.question');
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('show-text');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded')