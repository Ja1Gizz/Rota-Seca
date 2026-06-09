const menuToggle = document.getElementById('menuToggle');
const menuNav = document.getElementById('menuNav');

if (menuToggle && menuNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuNav.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const faqContainer = document.querySelector('.faq');
const faqTriggers = document.querySelectorAll('.faq__trigger');

if (faqContainer) {
  faqContainer.addEventListener('click', (event) => {
    const trigger = event.target.closest('.faq__trigger');
    if (!trigger) return;

    const item = trigger.closest('.faq__item');
    const expanded = trigger.getAttribute('aria-expanded') === 'true';

    faqTriggers.forEach((other) => {
      const parent = other.closest('.faq__item');
      if (parent && parent !== item) {
        parent.classList.remove('active');
        other.setAttribute('aria-expanded', 'false');
      }
    });

    if (item) {
      item.classList.toggle('active');
      trigger.setAttribute('aria-expanded', String(!expanded));
    }
  });
}

const contatoForm = document.getElementById('contatoForm');
const formSucesso = document.getElementById('formSucesso');

if (contatoForm && formSucesso) {
  contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = contatoForm.nome.value.trim();
    const email = contatoForm.email.value.trim();
    const telefone = contatoForm.telefone.value.trim();
    const mensagem = contatoForm.mensagem.value.trim();

    if (!nome || !email || !telefone || !mensagem) {
      formSucesso.textContent = 'Preencha todos os campos antes de enviar.';
      return;
    }

    formSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    contatoForm.reset();
  });
}
