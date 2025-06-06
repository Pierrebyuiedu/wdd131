const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
  // Check if input is not empty (ignoring whitespace)
  if (input.value.trim() !== '') {
    // Create li and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set li content and delete button content
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append delete button to li
    li.append(deleteButton);

    // Append li to the list
    list.append(li);

    // Add delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear the input field
    input.value = '';
  }

  // Always refocus the input
  input.focus();
});