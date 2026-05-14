(function() {
  // Horum Booking Widget Loader
  const scriptTag = document.currentScript;
  const branchId = scriptTag.getAttribute('data-branch-id');
  const baseUrl = scriptTag.getAttribute('data-base-url') || 'https://horum-booking.vercel.app';

  if (!branchId) {
    console.error('Horum Widget: data-branch-id is required');
    return;
  }

  const containerId = 'horum-booking-container';
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    scriptTag.parentNode.insertBefore(container, scriptTag);
  }

  const iframe = document.createElement('iframe');
  iframe.src = `${baseUrl}/booking/${branchId}?embed=true`;
  iframe.style.width = '100%';
  iframe.style.height = '700px';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '1.5rem';
  iframe.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
  iframe.setAttribute('scrolling', 'no');

  container.appendChild(iframe);
})();
