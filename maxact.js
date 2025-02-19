document.addEventListener("DOMContentLoaded", () => {
  renderRecentHabits();
  
  // Lägg till klick-hanterare för menyn
  const menuItems = document.querySelectorAll('#myMenu li a');
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const category = e.target.textContent.trim();
      filterRepostsByCategory(category);
    });
  });

  // Initialisera datum och tid
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0];
  const currentTime = now.toTimeString().slice(0, 5);
  
  document.getElementById("Datum").value = currentDate;
  document.getElementById("Tid").value = currentTime;

  // Sätt upp övriga event listeners och initialisering
  setupFormHandlers();
});

function filterRepostsByCategory(category) {
  const repostContainer = document.getElementById('repostContainer');
  const reposts = repostContainer.getElementsByClassName('repost');

  Array.from(reposts).forEach(repost => {
    const repostCategory = repost.getAttribute('data-category');
    console.log('Comparing:', repostCategory, 'with:', category); // För debugging
    
    if (category === "all" || repostCategory === category) {
      repost.style.display = "flex";
    } else {
      repost.style.display = "none";
    }
  });
}

function filterReposts() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const repostContainer = document.getElementById('repostContainer');
  const reposts = repostContainer.getElementsByClassName('repost');

  Array.from(reposts).forEach(repost => {
    const textContent = repost.textContent.toLowerCase();
    if (textContent.indexOf(filter) > -1) {
      repost.style.display = 'flex';
    } else {
      repost.style.display = 'none';
    }
  });
}
