const formData = {
  email: '',
  message: '',
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const loadFormData = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
};
loadFormData();
form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log('Submitted form data:', formData);
  form.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(LOCAL_STORAGE_KEY);
});
