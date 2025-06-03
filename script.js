// Sample data for meal plans
const mealPlans = [
    {
        id: 1,
        title: "Balanced Weekly Plan",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        tags: ["quick", "budget"],
        prepTime: "45 min",
        meals: "5",
        calories: "1800-2200"
    },
    {
        id: 2,
        title: "Keto Power Meals",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        tags: ["keto"],
        prepTime: "1 hr",
        meals: "7",
        calories: "2000-2400"
    },
    {
        id: 3,
        title: "Plant-Based Prep",
        image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f",
        tags: ["vegan", "quick"],
        prepTime: "30 min",
        meals: "5",
        calories: "1600-2000"
    },
    {
        id: 4,
        title: "High-Protein Budget",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        tags: ["budget"],
        prepTime: "1 hr 15 min",
        meals: "7",
        calories: "2200-2600"
    },
    {
        id: 5,
        title: "Mediterranean Flavors",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        tags: [],
        prepTime: "50 min",
        meals: "5",
        calories: "1800-2100"
    },
    {
        id: 6,
        title: "Quick Vegan Lunchbox",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        tags: ["vegan", "quick"],
        prepTime: "25 min",
        meals: "5",
        calories: "1400-1700"
    }
];

// Sample data for community gallery
const communityPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554",
        user: "@mealprep_pro",
        likes: 124
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
        user: "@healthy_eats",
        likes: 89
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        user: "@fitfoodie",
        likes: 156
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        user: "@clean_eating",
        likes: 201
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        user: "@prep_life",
        likes: 76
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        user: "@mealplan_master",
        likes: 112
    }
];

// DOM Elements
const plansGrid = document.querySelector('.plans-grid');
const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderMealPlans(mealPlans);
    renderCommunityGallery(communityPosts);
    setupEventListeners();
});

// Render meal plans
function renderMealPlans(plans) {
    plansGrid.innerHTML = '';
    
    plans.forEach(plan => {
        const tagsHTML = plan.tags.map(tag => 
            `<span class="plan-tag ${tag}">${tag}</span>`
        ).join('');
        
        const planCard = document.createElement('div');
        planCard.className = 'plan-card';
        planCard.innerHTML = `
            <div class="plan-image">
                <img src="${plan.image}" alt="${plan.title}">
            </div>
            <div class="plan-content">
                <div class="plan-tags">${tagsHTML}</div>
                <h3>${plan.title}</h3>
                <div class="plan-meta">
                    <span><i class="fas fa-clock"></i> ${plan.prepTime}</span>
                    <span><i class="fas fa-utensils"></i> ${plan.meals} meals</span>
                    <span><i class="fas fa-fire"></i> ${plan.calories} cal/day</span>
                </div>
            </div>
        `;
        
        plansGrid.appendChild(planCard);
    });
}

// Render community gallery
function renderCommunityGallery(posts) {
    galleryGrid.innerHTML = '';
    
    posts.forEach(post => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${post.image}" alt="Community meal prep">
            <div class="gallery-overlay">
                <p>${post.user}</p>
                <small><i class="fas fa-heart"></i> ${post.likes}</small>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter meal plans
function filterPlans(filter) {
    if (filter === 'all') {
        renderMealPlans(mealPlans);
        return;
    }
    
    const filteredPlans = mealPlans.filter(plan => 
        plan.tags.includes(filter)
    );
    
    renderMealPlans(filteredPlans);
}

// Toggle dark mode
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update icon
    const icon = darkModeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPlans(button.dataset.filter);
        });
    });
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set correct icon for saved theme
    const icon = darkModeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Form submission
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signupForm.querySelector('input').value;
            alert(`Thanks for signing up! We've sent a confirmation to ${email}`);
            signupForm.reset();
        });
    }
}
// Mobile Menu Toggle - Fixed version
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const dropdownMenu = document.getElementById('sidebar'); // Use your menu id here
  const overlay = document.getElementById('overlay');

  function toggleDropdown() {
    dropdownMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }

  hamburger.addEventListener('click', toggleDropdown);
  overlay.addEventListener('click', toggleDropdown);
});
