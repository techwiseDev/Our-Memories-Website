  const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

    function openSidebar() {
      sidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
    }
    function closeSidebar() {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    }

    sidebarToggleBtn.addEventListener('click', openSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarCloseBtn.addEventListener('click', closeSidebar);

      document.querySelector('.sidebar input[type="text"]').addEventListener('input', function() {
      const val = this.value.toLowerCase();
      document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        if (val === "" || link.textContent.toLowerCase().includes(val)) {
            link.closest('.nav-item').style.display = "";
        } else {
            link.closest('.nav-item').style.display = "none";
        }
    });
});




 