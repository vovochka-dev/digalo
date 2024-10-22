// Toggle accordion sections
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    // Toggle the accordion's open state
    this.classList.toggle('active');

    // Toggle the visibility of the associated panel
    const panel = this.nextElementSibling;
    panel.classList.toggle('hidden');
    const [showIcon, hideIcon] = this.querySelectorAll('[data-slot="icon"]');
    showIcon.classList.toggle('hidden');
    hideIcon.classList.toggle('hidden');
  });
});
