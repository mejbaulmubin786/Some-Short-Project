const header = document.getElementById('header');
const footer = document.getElementById('footer');
const content = document.getElementById('content');

// Dummy todo storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Load header, footer, and initial page
loadComponent('header.html', header);
loadComponent('footer.html', footer);
loadPage(location.hash || '#create');

// Listen for hash changes
window.addEventListener('hashchange', () => {
  loadPage(location.hash);
});

// Helper: load HTML component
function loadComponent(url, container) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      container.innerHTML = data;
    });
}

// Helper: load page content
function loadPage(hash) {
  let page = hash.substring(1) || 'create';
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(data => {
      content.innerHTML = data;
      handlePageLoad(page);
    });
}

// Handle logic for each page
function handlePageLoad(page) {
  if (page === 'create') {
    document.getElementById('todoForm').onsubmit = (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const id = Date.now();
      todos.push({ id, title, description });
      localStorage.setItem('todos', JSON.stringify(todos));
      location.hash = '#list';
    };
  }

  if (page === 'list') {
    const tbody = document.querySelector('#todoTable tbody');
    tbody.innerHTML = '';
    todos.forEach(todo => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${todo.title}</td>
        <td>
          <a href="#view?id=${todo.id}">View</a> |
          <a href="#edit?id=${todo.id}">Edit</a>
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  if (page.startsWith('view')) {
    const id = parseInt(new URLSearchParams(location.hash.split('?')[1]).get('id'));
    const todo = todos.find(t => t.id === id);
    if (todo) {
      document.getElementById('todoDetails').innerHTML = `
        <strong>Title:</strong> ${todo.title}<br>
        <strong>Description:</strong> ${todo.description}
      `;
    }
  }

  if (page.startsWith('edit')) {
    const id = parseInt(new URLSearchParams(location.hash.split('?')[1]).get('id'));
    const todo = todos.find(t => t.id === id);
    if (todo) {
      document.getElementById('editTitle').value = todo.title;
      document.getElementById('editDescription').value = todo.description;

      document.getElementById('editForm').onsubmit = (e) => {
        e.preventDefault();
        todo.title = document.getElementById('editTitle').value;
        todo.description = document.getElementById('editDescription').value;
        localStorage.setItem('todos', JSON.stringify(todos));
        location.hash = '#list';
      };
    }
  }
}
