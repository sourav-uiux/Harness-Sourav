/**
 * Waitlist Form Interactivity & Storage Handler
 * Role: Frontend Developer
 */

const STORAGE_KEY = 'leadfinder_waitlist_entries';

export function initWaitlist() {
  const form = document.getElementById('waitlist-form');
  const container = document.getElementById('waitlist-form-container');
  if (!form || !container) return;

  // Check if current user already submitted
  checkExistingSubmission(container);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nicheSelect = document.getElementById('niche');
    const errorAlert = document.getElementById('form-error');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnSpinner = document.getElementById('btn-spinner');

    // Reset error
    errorAlert.classList.add('hidden');
    errorAlert.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const niche = nicheSelect.value;

    // Validate inputs
    if (!name) {
      showError(errorAlert, 'Please enter your name.');
      nameInput.focus();
      return;
    }

    if (!email || !isValidEmail(email)) {
      showError(errorAlert, 'Please provide a valid email address.');
      emailInput.focus();
      return;
    }

    // Set loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Securing your spot...';
    btnSpinner.classList.remove('hidden');

    // Simulate short network delay for realistic experience
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Save to localStorage
    const newEntry = {
      id: 'sub_' + Date.now(),
      name,
      email,
      niche: niche || 'Exploring / Undecided',
      submittedAt: new Date().toISOString()
    };

    saveSubmission(newEntry);

    // Show celebration card
    renderSuccessCard(container, newEntry);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(el, message) {
  el.textContent = message;
  el.classList.remove('hidden');
}

function saveSubmission(entry) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    localStorage.setItem('leadfinder_user_submitted', JSON.stringify(entry));
  } catch (err) {
    console.error('Storage error:', err);
  }
}

function checkExistingSubmission(container) {
  try {
    const cached = localStorage.getItem('leadfinder_user_submitted');
    if (cached) {
      const entry = JSON.parse(cached);
      renderSuccessCard(container, entry, true);
    }
  } catch (e) {
    // Ignore storage parsing issues
  }
}

function renderSuccessCard(container, entry, isExisting = false) {
  container.innerHTML = `
    <div class="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in shadow-sm">
      <div class="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/30">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
        ${isExisting ? 'Welcome Back!' : 'Spot Reserved!'}
      </span>
      <h3 class="text-2xl font-extrabold text-slate-900 mb-2">
        ${isExisting ? `You're already on the priority list, ${escapeHtml(entry.name)}!` : `You're officially on the waitlist, ${escapeHtml(entry.name)}!`}
      </h3>
      <p class="text-slate-600 mb-6 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
        We've locked in your early-bird access with email <strong class="text-slate-900">${escapeHtml(entry.email)}</strong>. We'll send your free <span class="text-emerald-700 font-semibold">First-Client in 14 Days</span> starter roadmap straight to your inbox.
      </p>
      <div class="bg-white rounded-xl p-4 border border-emerald-100 max-w-sm mx-auto text-left flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg flex-shrink-0">
          🎁
        </div>
        <div>
          <div class="text-xs font-bold text-slate-400 uppercase">Selected Focus</div>
          <div class="text-sm font-semibold text-slate-800">${escapeHtml(entry.niche)}</div>
        </div>
      </div>
      <button id="reset-submission-btn" class="text-xs text-slate-400 hover:text-slate-600 underline">
        Submit with a different email
      </button>
    </div>
  `;

  const resetBtn = document.getElementById('reset-submission-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('leadfinder_user_submitted');
      location.reload();
    });
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}
