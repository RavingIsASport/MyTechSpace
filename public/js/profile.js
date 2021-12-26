const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#titleCon').value.trim();
  const content = document.querySelector('#contentDesc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/Contents`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('No content entered');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/content/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete content');
    }
  }
};

document
  .querySelector('.new-content-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.content-list')
  .addEventListener('click', delButtonHandler);
