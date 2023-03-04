  // Get the create blog button, blog form container, cancel button, blog post container,
    // publish button, title input, and content input
    const createBlogBtn = document.querySelector('.create-blog-btn');
    const blogFormContainer = document.querySelector('.blog-form-container');
    const cancelBtn = document.querySelector('.cancel-btn');
    const blogPostContainer = document.querySelector('.blog-post');
    const publishBtn = document.querySelector('.publish-btn');
    const titleInput = document.querySelector('#title-input');
    const contentInput = document.querySelector('#content-input');
    
   


    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      blogFormContainer.style.display = 'none';
    });
    // Function to show the blog form container
    const showBlogForm = () => {
      blogFormContainer.style.display = 'block';
    };

    // Function to hide the blog form container
    const hideBlogForm = () => {
      blogFormContainer.style.display = 'none';
    };

    // Event listener for the create blog button to show the blog form container
    createBlogBtn.addEventListener('click', showBlogForm);

    // Event listener for the cancel button to hide the blog form container
    cancelBtn.addEventListener('click', hideBlogForm);

    // Event listener for the publish button to create a new blog post
    
    
    publishBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Get the title and content values from the form
      const titleValue = titleInput.value;
      const contentValue = contentInput.value;

      // Check if the title and content inputs are not empty
      if (titleValue === '' || contentValue === '') {
        alert('Please fill in all fields!');
      } else {
        // Create a new post element and add it to the blog post container
        const postElement = document.createElement('div');
       
        postElement.classList.add('post');
        postElement.innerHTML = `
      <h2>${titleValue}</h2>
      <p>${contentValue}</p>
      <div class="post-buttons">
        <button class="edit-btn">Edit post</button>
        <button class="delete-btn">Delete post</button>
      </div>
    `;
    
        blogPostContainer.appendChild(postElement);

        // Hide the blog form container
        hideBlogForm();

        // Reset the form inputs
        titleInput.value = '';
        contentInput.value = '';

        // Add event listeners to the edit and delete buttons
        const editBtn = postElement.querySelector('.edit-btn');
        const deleteBtn = postElement.querySelector('.delete-btn');
        editBtn.addEventListener('click', () => {
          // Make the title and content inputs editable
          titleInput.removeAttribute('readonly');
          contentInput.removeAttribute('readonly');
        });
         
        editBtn.style.cursor="pointer";
        deleteBtn.style.cursor="pointer";


        deleteBtn.addEventListener('click', () => {
          // Remove the post element from the blog post container
          postElement.remove();
        });
      }
    });