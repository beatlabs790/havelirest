/* 
   HAVELI RESTAURANT - Menu Rendering & Filtering
   Dynamic Menu Renderer with Search and Type Filters
   Built by BeatLabs
*/

document.addEventListener('DOMContentLoaded', () => {
    // Make sure menuData is available
    if (typeof menuData === 'undefined') {
        console.error('menuData is not loaded. Please include menu-data.js');
        return;
    }

    const menuContainer = document.getElementById('menu-container');
    const searchInput = document.getElementById('menu-search');
    const typeFilters = document.querySelectorAll('.type-filter-btn');
    const tabContainer = document.getElementById('menu-tabs');
    const scannedToggle = document.getElementById('toggle-scanned-btn');
    const scannedGallery = document.getElementById('scanned-menu-gallery');

    let currentCategory = 'all';
    let currentSearch = '';
    let currentType = 'all'; // 'all', 'veg', 'non-veg'

    // 1. Generate Category Tabs Dynamically
    function renderCategoryTabs() {
        tabContainer.innerHTML = '';
        
        // Add "All Categories" Tab
        const allTab = document.createElement('button');
        allTab.className = 'menu-tab active';
        allTab.dataset.cat = 'all';
        allTab.innerHTML = `🍽️ <span>All Items</span>`;
        tabContainer.appendChild(allTab);

        // Add Category-specific Tabs
        Object.entries(menuData).forEach(([key, category]) => {
            const tab = document.createElement('button');
            tab.className = 'menu-tab';
            tab.dataset.cat = key;
            tab.innerHTML = `${category.icon} <span>${category.title.split(' (')[0]}</span>`;
            tabContainer.appendChild(tab);
        });

        // Tab click listeners
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const target = e.currentTarget;
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                target.classList.add('active');
                currentCategory = target.dataset.cat;
                
                filterAndRenderMenu();
                
                // Scroll category into view if 'all' is not selected
                if (currentCategory !== 'all') {
                    const sectionEl = document.getElementById(`cat-sec-${currentCategory}`);
                    if (sectionEl) {
                        const headerOffset = 140;
                        const elementPosition = sectionEl.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // 2. Filter and Render Menu Items
    function filterAndRenderMenu() {
        menuContainer.innerHTML = '';
        let matchCount = 0;

        Object.entries(menuData).forEach(([catKey, category]) => {
            // Check if we should render this category based on category tab
            if (currentCategory !== 'all' && currentCategory !== catKey) {
                return;
            }

            // Filter items in this category
            const filteredItems = category.items.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                     (item.description && item.description.toLowerCase().includes(currentSearch.toLowerCase()));
                const matchesType = currentType === 'all' || item.type === currentType;
                return matchesSearch && matchesType;
            });

            // If no items match, don't show the category section
            if (filteredItems.length === 0) {
                return;
            }

            matchCount += filteredItems.length;

            // Create Section Element
            const section = document.createElement('div');
            section.className = 'menu-sub-section reveal reveal-up active';
            section.id = `cat-sec-${catKey}`;
            
            section.innerHTML = `
                <h3 class="menu-sub-section-title brand-font">
                    <span>${category.icon}</span> ${category.title}
                </h3>
                <div class="menu-list-grid"></div>
            `;

            const grid = section.querySelector('.menu-list-grid');

            // Render matching items
            filteredItems.forEach((item, index) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'menu-list-item glass reveal reveal-scale active';
                itemEl.style.transitionDelay = `${index * 0.05}s`;
                
                const badgeHtml = item.type === 'veg' ? 
                    '<span class="menu-item-badge veg">Veg</span>' : 
                    '<span class="menu-item-badge non-veg">Non-Veg</span>';
                
                const pcsHtml = item.pcs ? `<span class="menu-item-badge pcs">${item.pcs}</span>` : '';

                itemEl.innerHTML = `
                    <div class="menu-item-content">
                        <div class="menu-item-heading">
                            <h4 class="menu-item-name">${item.name}</h4>
                            <div class="menu-item-dots"></div>
                            <span class="menu-item-price">₹${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.description || 'Delicately cooked with special house spices.'}</p>
                        <div class="menu-item-meta">
                            ${badgeHtml}
                            ${pcsHtml}
                        </div>
                    </div>
                `;
                grid.appendChild(itemEl);
            });

            menuContainer.appendChild(section);
        });

        // Show "No items found" if empty
        if (matchCount === 0) {
            menuContainer.innerHTML = `
                <div class="glass" style="padding: 4rem; text-align: center; max-width: 500px; margin: 0 auto;">
                    <span style="font-size: 3rem;">🔍</span>
                    <h3 style="margin-top: 1rem; color: var(--primary);" class="brand-font">No Delicacies Found</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">Try adjusting your search keywords or checking another category filter.</p>
                </div>
            `;
        }
    }

    // 3. Search Bar Event Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            filterAndRenderMenu();
        });
    }

    // 4. Veg/Non-Veg Filter Event Listeners
    typeFilters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            typeFilters.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentType = e.currentTarget.dataset.type;
            filterAndRenderMenu();
        });
    });

    // 5. Original Scanned Cards Toggle
    if (scannedToggle && scannedGallery) {
        scannedToggle.addEventListener('click', () => {
            const isHidden = scannedGallery.classList.contains('hidden') || scannedGallery.style.display === 'none';
            if (isHidden || scannedGallery.style.display === '') {
                scannedGallery.style.display = 'block';
                scannedGallery.classList.remove('hidden');
                scannedToggle.textContent = "Hide Scanned Menu Cards 📑";
                // Smooth scroll to gallery
                setTimeout(() => {
                    scannedGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                scannedGallery.style.display = 'none';
                scannedGallery.classList.add('hidden');
                scannedToggle.textContent = "View Scanned Menu Cards 📑";
            }
        });
    }

    // 6. Support URL Query Parameters for navigation
    function checkURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        if (catParam && menuData[catParam]) {
            setTimeout(() => {
                const targetTab = document.querySelector(`.menu-tab[data-cat="${catParam}"]`);
                if (targetTab) {
                    targetTab.click();
                }
            }, 500); // Small timeout to ensure tabs are rendered
        }
    }

    // Initialization
    renderCategoryTabs();
    filterAndRenderMenu();
    checkURLParameters();
});
