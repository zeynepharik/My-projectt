let comments = [];

function addComment() {
  const commentText = prompt("Yorumunuzu girin:");
  if (commentText) {
    comments.push(commentText);
    displayComments();
  }
}

function displayComments() {
  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = ""; // Clear the list first
  comments.forEach((comment, index) => {
    const listItem = document.createElement("li");
    listItem.className = "comment_item";
    listItem.innerHTML = `<a href="#">Yorum ${index + 1}: ${comment}</a>`;
    commentsList.appendChild(listItem);
  });
}