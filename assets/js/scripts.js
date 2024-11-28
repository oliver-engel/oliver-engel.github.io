document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // Initialize MicroModal
  if (typeof MicroModal !== 'undefined') {
    MicroModal.init({
      openTrigger: 'data-micromodal-trigger',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: false,
      awaitOpenAnimation: false,
      awaitCloseAnimation: false
    });
  }

  // Optional: Add copy functionality for the email button
  const copyButton = document.getElementById('copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText('oliverengel6@gmail.com');
      const tooltip = copyButton.querySelector('.tooltiptext');
      if (tooltip) {
        tooltip.textContent = 'Copied!';
        setTimeout(() => {
          tooltip.textContent = 'Click to copy';
        }, 2000);
      }
    });
  }
});