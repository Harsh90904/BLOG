const handleData = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById('title').value,
        userId: userId
    };
    postData(data);
};

document.getElementById("createPostForm").addEventListener("submit", handleData);
async function fetchBlogPosts() {
    const response = await fetch("http://localhost:8520/blogs/blogp");
        const posts = await response.json();
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = '';

        posts.map((ele) => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <p>${ele.createdAt}</p>
                <h3>${ele.title}</h3>
                <p>${ele.content}</p>
                <button onclick="deleteBlogPost('${ele._id}')">Delete</button>
                <button onclick="editBlogPost('${ele._id}')">Edit</button>
            `;
            document.getElementById('postsContainer').appendChild(postElement);
        });
}

let id = document.cookie;
let userId = id.split("=")[1];
if (!userId) {
    window.location.href = "http://127.0.0.1:5500/BLOG/view/login.html";
}

async function createBlogPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch("http://localhost:8520/blogs/blogp", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    }); 
        fetchBlogPosts();
}

async function deleteBlogPost(id) {
    const response = await fetch(`http://localhost:8520/blogs/blogp/${id}`, {
        method: 'DELETE'
    });
        fetchBlogPosts();
}

async function editBlogPost(id) {
    let title = prompt("Enter new title");
    let content = prompt("Enter new content");
    const response = await fetch(`http://localhost:8520/blogs/blogp/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });
}

document.getElementById('createPostForm').addEventListener('submit', createBlogPost);

fetchBlogPosts();
