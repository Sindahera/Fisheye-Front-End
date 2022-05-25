function displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
  }
  function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
  }
  async function displayName() {
    const title = document.querySelector('.modal h2');
    // eslint-disable-next-line no-undef
    const photographer = await getPhotographer(id);
    title.insertAdjacentHTML(
      'beforeend',
      `</br>${photographer.photographer.name}`
    );
  }
  
  // Get user input from form
  const contactBtn = document.querySelector('#contact-form .contact_button');
  const inputEls = Array.from(
    document.querySelectorAll('#contact-form input, #contact-form textarea')
  );
  const formData = {};
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputEls.forEach((el) => {
      formData[el.name] = el.value;
    });
    console.log(formData);
    closeModal();
  });
  
  function init() {
    displayName();
  }
  
  init();