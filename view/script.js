const BLOG_URL = 'http://localhost:8520/blog/blogPosts';

async function fetchBlogPosts() {
    const response = await fetch(BLOG_URL);
        const posts = await response.json();
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deleteBlogPost('${post._id}')">Delete</button>
                <button onclick="editBlogPost('${post._id}')">Edit</button>
            `;
            postsContainer.appendChild(postElement);
        });
}

let id = document.cookie;
let userId = id.split("=")[1];
if (!userId) {
    window.location.href = "http://127.0.0.1:5500/view/login.html";
}

async function createBlogPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch(BLOG_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        alert('Post created successfully');
        fetchBlogPosts();
    } else {
        alert('Error creating post');
    }
}

async function deleteBlogPost(id) {
    const response = await fetch(`${BLOG_URL}/${id}`, {
        method: 'DELETE'
    });


        alert('Post deleted successfully');
        fetchBlogPosts();

}

async function editBlogPost(id) {
    alert('Edit functionality not implemented yet.');
}

document.getElementById('createPostForm').addEventListener('submit', createBlogPost);

fetchBlogPosts();
