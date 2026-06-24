document.addEventListener('DOMContentLoaded', () => {
  const blogGrid = document.getElementById('blog-grid');
  const postContent = document.getElementById('post-content');

  // Determine which page we are on based on DOM elements
  if (blogGrid) {
    initBlogListing();
  } else if (postContent) {
    initPostReader();
  }
});

// --- Blog Listing Page Logic ---
function initBlogListing() {
  const blogGrid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search');
  const filterTagsContainer = document.getElementById('blog-filter-tags');

  let allPosts = [];
  let selectedTag = 'all';
  let searchQuery = '';

  // Fetch the blog posts registry
  fetch('blog/posts.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load posts registry');
      return response.json();
    })
    .then(data => {
      allPosts = data;
      
      // Populate unique tags in filter bar
      generateTagFilters(allPosts);
      
      // Initial render of all posts
      renderPosts(allPosts);
      
      // Set up search listener
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          searchQuery = e.target.value.toLowerCase().trim();
          filterAndRender();
        });
      }
    })
    .catch(error => {
      console.error('Error initializing blog listing:', error);
      blogGrid.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-triangle-exclamation" style="color: var(--accent-primary);"></i>
          <p>Failed to load articles. Please try reloading the page.</p>
        </div>
      `;
    });

  // Extract all tags from posts and render filter buttons
  function generateTagFilters(posts) {
    const tags = new Set();
    posts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });

    tags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'blog-tag-btn';
      btn.textContent = tag;
      btn.setAttribute('data-tag', tag);
      btn.addEventListener('click', () => {
        // Toggle active class among tag buttons
        document.querySelectorAll('.blog-tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        selectedTag = tag;
        filterAndRender();
      });
      filterTagsContainer.appendChild(btn);
    });

    // Add listener to the default "All Topics" button
    const allBtn = filterTagsContainer.querySelector('[data-tag="all"]');
    if (allBtn) {
      allBtn.addEventListener('click', () => {
        document.querySelectorAll('.blog-tag-btn').forEach(b => b.classList.remove('active'));
        allBtn.classList.add('active');
        selectedTag = 'all';
        filterAndRender();
      });
    }
  }

  // Filter posts based on search query and selected tag, then render
  function filterAndRender() {
    const filtered = allPosts.filter(post => {
      const matchesTag = selectedTag === 'all' || (post.tags && post.tags.includes(selectedTag));
      
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery) ||
        post.summary.toLowerCase().includes(searchQuery) ||
        (post.tags && post.tags.some(t => t.toLowerCase().includes(searchQuery)));
        
      return matchesTag && matchesSearch;
    });

    renderPosts(filtered);
  }

  // Render the list of posts inside the grid
  function renderPosts(posts) {
    blogGrid.innerHTML = '';

    if (posts.length === 0) {
      blogGrid.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-magnifying-glass-minus"></i>
          <h3>No articles found</h3>
          <p style="margin-top: 0.5rem;">We couldn't find any articles matching your search criteria.</p>
        </div>
      `;
      return;
    }

    posts.forEach((post, index) => {
      const card = document.createElement('a');
      card.href = `post.html?id=${post.id}`;
      card.className = 'blog-card';
      
      // Build tag HTML strings
      const tagsHTML = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');

      card.innerHTML = `
        <div class="blog-card-content">
          <div>
            <div class="blog-meta">
              <span class="blog-date"><i class="fa-solid fa-calendar-days"></i> ${post.date}</span>
            </div>
            <h2 class="blog-card-title">${post.title}</h2>
            <p class="blog-card-excerpt">${post.summary}</p>
          </div>
          <div class="blog-tags-row">
            ${tagsHTML}
          </div>
        </div>
      `;

      // Premium animation fade-in entrance
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      
      blogGrid.appendChild(card);

      // Staggered entry animation
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 80);
    });
  }
}

// --- Blog Post Detail Reader Logic ---
function initPostReader() {
  const postTitle = document.getElementById('post-title');
  const postDate = document.getElementById('post-date');
  const postReadTime = document.getElementById('post-read-time');
  const postContent = document.getElementById('post-content');

  // Parse post ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  if (!postId) {
    showError('No article ID was specified. Returning to blog...');
    setTimeout(() => { window.location.href = 'blog.html'; }, 3000);
    return;
  }

  // Fetch the registry first to find the post details
  fetch('blog/posts.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch posts registry');
      return response.json();
    })
    .then(posts => {
      const post = posts.find(p => p.id === postId);
      if (!post) {
        throw new Error('Article not found in registry');
      }
      
      // Update metadata on page
      document.title = `${post.title} | Chase Struse`;
      postTitle.textContent = post.title;
      postDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${post.date}`;

      // Fetch actual markdown file content
      return fetch(post.filePath);
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to retrieve article content');
      return response.text();
    })
    .then(markdown => {
      // Configure marked.js options for safer, custom parsing if needed
      marked.setOptions({
        gfm: true,
        breaks: true
      });

      // Compute word count and reading time
      const wordCount = markdown.split(/\s+/).length;
      const readingTime = Math.max(1, Math.round(wordCount / 225)); // avg 225 words per min
      postReadTime.innerHTML = `<i class="fa-solid fa-clock"></i> ${readingTime} Min Read`;

      // Parse and inject markdown
      postContent.style.opacity = '0';
      postContent.style.transition = 'opacity 0.4s ease';
      postContent.innerHTML = marked.parse(markdown);
      
      // Perform code block syntax highlighting via highlight.js
      if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
      }

      // Smooth fade-in of rendered content
      setTimeout(() => {
        postContent.style.opacity = '1';
      }, 50);
    })
    .catch(error => {
      console.error('Error loading article:', error);
      showError('Sorry, we couldn\'t load this article. The file might have been moved or does not exist.');
    });

  function showError(message) {
    postContent.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--accent-primary); margin-bottom: 1.5rem;"></i>
        <h3>Article Unreachable</h3>
        <p style="margin-top: 0.5rem; color: var(--text-secondary); max-width: 400px; margin-left: auto; margin-right: auto;">${message}</p>
        <a href="blog.html" class="btn btn-secondary" style="margin-top: 2rem;">
          <i class="fa-solid fa-arrow-left"></i> Back to Blog
        </a>
      </div>
    `;
  }
}
