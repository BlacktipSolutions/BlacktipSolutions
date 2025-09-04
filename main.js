document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  navToggle?.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});

function downloadCapabilityStatement() {
  const link = document.createElement('a');
  link.href = 'blacktip-site-starter/assets/Blacktip_Capability_Statement.pdf';
  link.download = 'Blacktip_Capability_Statement.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
