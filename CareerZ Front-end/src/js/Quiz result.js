let progress = 30;
const bar = document.getElementById('progressBar');
const val = document.getElementById('progressValue');

function setProgress(p){
  const clamped = Math.max(0, Math.min(100, p));
  bar.style.width = clamped + '%';
  val.textContent = clamped + '%';
}
setProgress(progress);

// Steps elements
const steps = document.querySelectorAll('.steps .step');
const startButtons = document.querySelectorAll('.btn-outline');

let currentStep = 0; // البداية على step 0 (Foundations)

// تحديث حالة الخطوات
function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.remove('done', 'current');
    if (index < currentStep) {
      step.classList.add('done');
    } else if (index === currentStep) {
      step.classList.add('current');
    }
  });
}

// أول تحديث
updateSteps();

// لما ندوس Start في أي box
startButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // نزود progress
    progress = Math.min(100, progress + 25);
    setProgress(progress);

    // خلصنا Step = نروح للي بعده
    if (currentStep < steps.length) {
      currentStep++;
      updateSteps();
    }

    // لو خلصت كل حاجة
    if (currentStep === steps.length) {
      alert("🎉 Congrats! You completed the roadmap.");
    }
  });
});

// Demo: main CTA + course btn
document.getElementById('ctaBtn').addEventListener('click', ()=>{
  alert('Great! Keep going—complete the roadmap to unlock job opportunities.');
});
document.getElementById('viewCourseBtn').addEventListener('click', ()=>{
  alert('Opening the UI/UX Design course…');
});
