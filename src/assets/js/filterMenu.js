// Toggle filter menu
const filterIcon = document.querySelector('.filter-icon'); // Assume this is your filter button
const filterMenu = document.querySelector('.filter-menu'); // The right-side filter menu
const filterMenuClose = document.querySelector('.filter-close'); // The right-side filter close button
const filterScrim = document.querySelector('.filter-scrim'); // The right-side filter close button

filterIcon.addEventListener('click', () => {
  filterMenu.classList.toggle('hidden'); // Toggle the hidden class to show/hide the menu
});
filterMenuClose.addEventListener('click', () => {
  filterMenu.classList.toggle('hidden'); // Toggle the hidden class to show/hide the menu
});
filterScrim.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-scrim'))
    filterMenu.classList.add('hidden'); // Toggle the hidden class to show/hide the menu
});
