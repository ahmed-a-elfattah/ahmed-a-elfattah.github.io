document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       MOBILE DRAWER MENU
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-btn');

    const toggleMenu = () => {
        mobileToggle.classList.toggle('active');
        mobileDrawer.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    };

    mobileToggle.addEventListener('click', toggleMenu);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    /* ==========================================================================
       COPY TO CLIPBOARD WITH TOAST FEEDBACK
       ========================================================================== */
    const copyableItems = document.querySelectorAll('.copyable');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    copyableItems.forEach(item => {
        item.addEventListener('click', () => {
            const textToCopy = item.getAttribute('data-clipboard');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied "${textToCopy}" to clipboard!`);
            }).catch(err => {
                showToast("Failed to copy automatically.");
            });
        });
    });

    const showToast = (message) => {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    };

    /* ==========================================================================
       INTERACTIVE APP CAROUSEL & SIMULATOR LOGIC
       ========================================================================== */
    const detailsContainer = document.getElementById('showcase-app-details');
    const phoneScreen = document.getElementById('phone-screen-content');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    const dotsContainer = document.getElementById('carousel-dots');

    const projectsList = [
        {
            id: 'mahitab',
            name: 'Mahitab Fabrics',
            logoUrl: 'https://play-lh.googleusercontent.com/99dlW2TdwE4AMz4uqWUqs4D_YUpE5oS749i-4XzdTlI3iOZGELo_BOCqHvInCVUomRoCZkn6Fi28qVeD6Xlx',
            downloads: '500,000+ Downloads',
            rating: '4.7 ★ Rating',
            category: 'E-commerce',
            company: 'Olgor (Mobile App Development Company)',
            brief: 'Built Egypt’s first dedicated fabrics e-commerce app, delivering a high-quality Shopify storefront integration alongside local multi-media features.',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mahitab.onlinefabrics',
            highlights: [
                'Shopify SDK GraphQL client queries',
                'Custom push notifications for real-time promotional offers',
                'Strict SOLID modular component structures',
                'Optimized visual caching for textile images'
            ],
            screenshots: [
                'https://play-lh.googleusercontent.com/WU1HPsQfFMwjsQo0cvz0TsOctPLHKF61uNVLvnJwQQpPd2SlL07TFQ5APX08JS86Te_3_nOtB7Y2jhvPdgVxtw=w600',
                'https://play-lh.googleusercontent.com/uVAnkxCijmqzxCc-mPuVa47LIHX5TUPD9HwNFGznOuX8RjeYinBXQWBwMDE1MBK05qjE2MMF5sYoia9ne5URlMM=w600',
                'https://play-lh.googleusercontent.com/VY8nMyJTRdKn1zYXzc6XZbihVXgd2E8nUlg7iDhjjRvsZqJAzaOkbxlnorFIjFEKsS0lJ0-Mc4otHZtiCT87ow=w600',
                'https://play-lh.googleusercontent.com/mUmieFf965N3HfVY9acKsXshG58cReULDSmqckzAf-MkFyVOnV4z4uAi0bUhtijdbJKuh9WdLRiawvblbjAX=w600'
            ]
        },
        {
            id: 'saaei',
            name: 'Saaei - ساعي',
            logoUrl: 'https://play-lh.googleusercontent.com/huuJgQlV3GK60DjsTAVzepmt0yKZabP-YZc_CTCDlcNeJmzw28jjC-6GyY36XcyFPZg',
            downloads: '1,000+ Downloads',
            rating: '3.8 ★ Rating',
            category: 'PropTech / Real Estate',
            company: 'SAAEI (Technical Real Estate Services)',
            brief: 'Engineered the mobile application for Saudi Arabia’s premier PropTech platform. Integrated Nafath secure SSO identity verification, REGA compliance protocols, and AES local data encryption, while reducing NDR of critical transactions by 30%.',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.saaei',
            highlights: [
                'Nafath SSO & Real Estate General Authority (REGA) integrations',
                'Clean Architecture + MVVM secured via AES local database encryption',
                'Reduced data sync Non-Delivery Rate (NDR) by 30% via offline caching',
                'Interactive real estate map & direct negotiation chat engine'
            ],
            screenshots: [
                'https://play-lh.googleusercontent.com/KLbLO1CU_o6tJ3RFKBqSTr9_IoTkypRI29HJ5TBRnE24qhlETpX8SqvFITBBtoxdXZGd=w600',
                'https://play-lh.googleusercontent.com/r4IVJvWjNqkHN7XLbCj9dbwFTv2q3UrvDdRQ0IFw5xc0If6HGtboOIe45uLFj-Y1tmoe=w600',
                'https://play-lh.googleusercontent.com/0ER_TR8IyetkegfXMw2Sg1y8cozpJVXjqMCvktAWf4iXMPMHrYpbY08R8mrL4WS3iHX7=w600',
                'https://play-lh.googleusercontent.com/K8hkCwXa4G5hB-1vyNVP78gs49YAvipOlRST9lgj4GNthE_3x3v8k4LguTNayJo77g=w600'
            ]
        },
        {
            id: 'metrics',
            name: 'Metrics - ميتركس',
            logoUrl: 'https://play-lh.googleusercontent.com/xcVTxGTxoBBN7ouQNfoddEby4zbDuAq2ADEXJSHzXyyUCiLIijaTskGkKZhAsPWjbp4aJYKpGcjpTEePh9gPAg',
            downloads: '2023 – 2024',
            rating: '100+ Downloads',
            category: 'Cross-Platform App (Flutter)',
            company: 'Metrics (Engineering Consultancy Company)',
            brief: 'Engineered a cross-platform corporate field operations and smart attendance application in Flutter for both Android & iOS. Implemented high-precision GPS geofencing verification to coordinate construction site attendance and progress tracking.',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.abdelfattah.ahmed.metrics',
            appStoreUrl: 'https://apps.apple.com/eg/app/metrics-%D9%85%D9%8A%D8%AA%D8%B1%D9%83%D8%B3/id6759710576',
            highlights: [
                'Cross-platform development in Flutter & Dart for Android & iOS',
                'GPS geofencing for verified site attendance',
                'Construction site progress & daily reporting',
                'Cloud Firestore offline persistence for offline field use'
            ],
            screenshots: [
                'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d1/2c/e5/d12ce5c7-f1a1-b4a1-2e97-0b0a96403dcd/01_home_screen.png/600x1300bb.png',
                'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/b2/7d/7cb27d36-bddd-582a-f61e-4b039a1cb1d9/02_notifications_screen.png/600x1300bb.png',
                'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/51/fa/22/51fa2241-f323-78e8-8c05-b72c4507eedb/03_attendance_screen.png/600x1300bb.png',
                'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fd/a6/0c/fda60c00-22b2-3c44-45a1-97830c5aa276/04_payslips_screen.png/600x1300bb.png',
                'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9c/76/25/9c7625c8-43e6-b408-a529-aa0a85ae1555/05_requests_screen.png/600x1300bb.png'
            ]
        }
    ];

    let currentAppIndex = 0;
    let screenshotInterval = null;

    // Create Navigation Indicator Dots
    const createDots = () => {
        dotsContainer.innerHTML = '';
        projectsList.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === currentAppIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => {
                currentAppIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    };

    const updateCarousel = () => {
        const app = projectsList[currentAppIndex];
        if (!app) return;

        // Fade Out details panel
        detailsContainer.classList.add('fade-out');

        setTimeout(() => {
            // Update details HTML content
            detailsContainer.innerHTML = `
                <div class="app-details-header">
                    <div class="app-details-logo">
                        <img src="${app.logoUrl}" alt="${app.name} Logo">
                    </div>
                    <div>
                        <h3 class="app-details-name">${app.name}</h3>
                        <div class="app-details-company">${app.company}</div>
                    </div>
                </div>
                
                <div class="play-store-stats">
                    ${app.playStoreUrl ? `
                    <a href="${app.playStoreUrl}" target="_blank" rel="noopener" class="badge-playstore">
                        <i class="fa-brands fa-google-play"></i>
                        <div class="playstore-btn-text">
                            <span class="playstore-sub">GET IT ON</span>
                            <span class="playstore-main">Google Play</span>
                        </div>
                    </a>
                    ` : ''}
                    ${app.appStoreUrl ? `
                    <a href="${app.appStoreUrl}" target="_blank" rel="noopener" class="badge-appstore">
                        <i class="fa-brands fa-apple"></i>
                        <div class="appstore-btn-text">
                            <span class="appstore-sub">Download on the</span>
                            <span class="appstore-main">App Store</span>
                        </div>
                    </a>
                    ` : ''}
                    <div class="stat-item">
                        <i class="fa-solid ${app.id === 'metrics' ? 'fa-clock' : 'fa-circle-down'}"></i>
                        <span><strong>${app.downloads}</strong></span>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid ${app.id === 'metrics' ? 'fa-circle-down' : 'fa-star'}"></i>
                        <span><strong>${app.rating}</strong></span>
                    </div>
                </div>
                
                <p class="app-details-desc">${app.brief}</p>
                
                <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:12px; color:var(--text-primary);">Key Contributions:</h4>
                <ul class="app-details-highlights">
                    ${app.highlights.map(hl => `
                        <li>
                            <i class="fa-solid fa-circle-check"></i>
                            <span>${hl}</span>
                        </li>
                    `).join('')}
                </ul>
            `;

            // Clear any existing screenshot interval
            if (screenshotInterval) {
                clearInterval(screenshotInterval);
                screenshotInterval = null;
            }

            // Generate screenshots HTML
            const screenshotsHtml = `
                <div class="phone-screenshots-container">
                    ${app.screenshots.map((src, i) => `
                        <img src="${src}" class="phone-screenshot-img ${i === 0 ? 'active' : ''}" alt="${app.name} screenshot ${i+1}">
                    `).join('')}
                    <div class="phone-screenshot-indicators">
                        ${app.screenshots.map((_, i) => `
                            <span class="phone-screenshot-dot ${i === 0 ? 'active' : ''}"></span>
                        `).join('')}
                    </div>
                </div>
            `;

            // Update simulator screen content
            phoneScreen.innerHTML = screenshotsHtml;

            // Start screenshot slideshow for the phone mockup
            const screenshotImages = phoneScreen.querySelectorAll('.phone-screenshot-img');
            const screenshotDots = phoneScreen.querySelectorAll('.phone-screenshot-dot');
            let activeScreenshotIdx = 0;

            if (screenshotImages.length > 1) {
                screenshotInterval = setInterval(() => {
                    if (screenshotImages[activeScreenshotIdx] && screenshotDots[activeScreenshotIdx]) {
                        screenshotImages[activeScreenshotIdx].classList.remove('active');
                        screenshotDots[activeScreenshotIdx].classList.remove('active');

                        activeScreenshotIdx = (activeScreenshotIdx + 1) % screenshotImages.length;

                        screenshotImages[activeScreenshotIdx].classList.add('active');
                        screenshotDots[activeScreenshotIdx].classList.add('active');
                    }
                }, 3000); // cycle screenshots every 3 seconds
            }

            // Remove fade out class to fade back in
            detailsContainer.classList.remove('fade-out');

            // Update dots active status
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                if (index === currentAppIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

        }, 300); // matches CSS fade-out transition duration
    };

    // Navigation Buttons Event Listeners
    prevBtn.addEventListener('click', () => {
        currentAppIndex = (currentAppIndex - 1 + projectsList.length) % projectsList.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentAppIndex = (currentAppIndex + 1) % projectsList.length;
        updateCarousel();
    });

    // Initialize Showcase
    createDots();
    updateCarousel();

    /* ==========================================================================
       TECHNICAL STACK LIVE SEARCH & FILTER
       ========================================================================== */
    const searchInput = document.getElementById('skills-search-input');
    const filterPills = document.querySelectorAll('.filter-pill');
    const noResults = document.getElementById('skills-no-results');
 
    let currentCategory = 'all';
    let searchQuery = '';
 
    const filterSkills = () => {
        let visibleCardsCount = 0;
        const activeGrid = document.querySelector('.skills-grid.active');
        if (!activeGrid) return;
 
        // Query cards in active grid only
        const categoryCards = activeGrid.querySelectorAll('.skill-category-card');
 
        // Hide all cards in other grids
        document.querySelectorAll('.skills-grid:not(.active) .skill-category-card').forEach(card => {
            card.classList.add('hidden');
        });
 
        categoryCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const skillPills = card.querySelectorAll('.skill-pill');
            let matchingSkillsInCard = 0;
            let totalSkillsInCard = skillPills.length;
 
            skillPills.forEach(pill => {
                const skillName = pill.getAttribute('data-name') || pill.textContent.trim().toLowerCase();
                const matchesSearch = skillName.includes(searchQuery);
 
                if (matchesSearch) {
                    pill.classList.remove('hidden');
                    matchingSkillsInCard++;
                } else {
                    pill.classList.add('hidden');
                }
            });
 
            // Update badge count
            const countBadge = card.querySelector('.category-count-badge');
            if (countBadge) {
                countBadge.textContent = searchQuery ? matchingSkillsInCard : totalSkillsInCard;
            }
 
            // Determine if card should be visible based on Category AND Search Query
            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const hasMatchingSkills = (matchingSkillsInCard > 0);
 
            // If we are searching, we only show cards that have matching skills
            // If we are not searching, we show all cards matching the category filter
            const shouldShowCard = matchesCategory && (!searchQuery || hasMatchingSkills);
 
            if (shouldShowCard) {
                card.classList.remove('hidden');
                visibleCardsCount++;
            } else {
                card.classList.add('hidden');
            }
        });
 
        // Toggle No Results Message
        if (visibleCardsCount === 0) {
            noResults.style.display = 'flex';
        } else {
            noResults.style.display = 'none';
        }
    };
 
    // Technical Stack Segmented Tabs Logic
    const tabButtons = document.querySelectorAll('.skills-tab-btn');
    const skillsTabs = document.querySelector('.skills-tabs');
    const skillsSection = document.getElementById('skills');
    const skillsGrids = document.querySelectorAll('.skills-grid');
 
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedTab = btn.getAttribute('data-tab');
            
            // Toggle active state class on buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
 
            // Update slider positioning data-active attribute
            if (skillsTabs) {
                skillsTabs.setAttribute('data-active', selectedTab);
            }
 
            // Switch themes (Android green vs Flutter blue)
            if (skillsSection) {
                if (selectedTab === 'android') {
                    skillsSection.classList.remove('theme-flutter');
                    skillsSection.classList.add('theme-android');
                } else {
                    skillsSection.classList.remove('theme-android');
                    skillsSection.classList.add('theme-flutter');
                }
            }
 
            // Update search placeholder dynamically
            if (searchInput) {
                if (selectedTab === 'android') {
                    searchInput.placeholder = 'Search skills (e.g. Compose, Hilt)...';
                } else {
                    searchInput.placeholder = 'Search skills (e.g. BLoC, Riverpod)...';
                }
            }
 
            // Toggle active grid
            skillsGrids.forEach(grid => {
                if (grid.getAttribute('data-tab-content') === selectedTab) {
                    grid.classList.add('active');
                    grid.style.display = 'grid';
 
                    // Trigger scroll reveal observer for the newly visible cards
                    const cards = grid.querySelectorAll('.reveal-on-scroll');
                    cards.forEach(card => {
                        revealObserver.observe(card);
                    });
                } else {
                    grid.classList.remove('active');
                    grid.style.display = 'none';
                }
            });
 
            // Re-filter skills for the new active grid
            filterSkills();
        });
    });
 
    // Category Filter Clicks
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active state class
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
 
            currentCategory = pill.getAttribute('data-filter');
            filterSkills();
        });
    });
 
    // Search Query Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterSkills();
        });
    }

    /* ==========================================================================
       SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve if we only want it to animate once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* ==========================================================================
       LIVE STATUS TIME UPDATE FOR PHONE SIMULATOR
       ========================================================================== */
    const timeDisplay = document.getElementById('simulator-time');
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        if (timeDisplay) {
            timeDisplay.textContent = strTime;
        }
    };
    
    // Update immediately and then every minute
    updateTime();
    setInterval(updateTime, 60000);

});
