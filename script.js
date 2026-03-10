function postMessage() {

    // Get user input
    var name = document.getElementById("username").value;
    var message = document.getElementById("message").value;

    // Check if fields are empty
    if(name === "" || message === ""){
        alert("Please enter your name and message!");
        return;
    }

    // Get posts area
    var posts = document.getElementById("posts");

    // Create new message element
    var newPost = document.createElement("p");

    // Add content
    newPost.innerHTML = "<strong>" + name + ":</strong> " + message;

    // Add message to page
    posts.appendChild(newPost);

    // Clear input fields
    document.getElementById("username").value = "";
    document.getElementById("message").value = "";
}