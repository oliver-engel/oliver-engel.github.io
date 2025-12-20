// Theme Management - Initialize before DOM loads to prevent flash
(function () {
  const savedTheme = localStorage.getItem('theme');
  // Set light mode as default, only use dark if explicitly saved
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    console.log('Theme toggle found and listener attached');
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Theme toggle clicked');

      const isDark = document.documentElement.hasAttribute('data-theme');
      const newTheme = isDark ? 'light' : 'dark';
      console.log('Switching from', isDark ? 'dark' : 'light', 'to', newTheme);

      if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }

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




  // const myCanvas = document.createElement('div');
  // document.body.appendChild(myCanvas);
  // myCanvas.style.width = '600px';
  // myCanvas.style.height = '400px';

  // const shaderParams = {
  // u_color1: getShaderColorFromString('#283BFC'),
  // u_color2: getShaderColorFromString('#FF2828'),
  // u_color3: getShaderColorFromString('#dddddd'),
  // u_color4: getShaderColorFromString('#800080'),
  // };

  // const speed = 0.25;
  // const meshGradient = new ShaderMount(myCanvas, meshGradientFragmentShader, shaderParams, undefined, speed);

  // Photo lightbox functionality
  const photoItems = document.querySelectorAll('.photo-item img[data-photo-src]');
  const lightbox = document.querySelector('.photo-lightbox');
  const lightboxImage = document.querySelector('.photo-lightbox-image');
  const lightboxContent = document.querySelector('.photo-lightbox-content');
  const lightboxBackdrop = document.querySelector('.photo-lightbox-backdrop');
  let isLightboxOpen = false;
  let lastScrollY = window.scrollY;
  let lastScrollX = window.scrollX;
  let currentPhotoItem = null;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  if (photoItems.length > 0 && lightbox && lightboxImage && lightboxContent) {
    // Open lightbox on photo click
    photoItems.forEach((img) => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        const photoSrc = img.getAttribute('data-photo-src');

        if (photoSrc) {
          // Set the image source
          lightboxImage.src = photoSrc;

          // Show lightbox (CSS handles centering and transition)
          lightbox.classList.add('active');
          document.body.classList.add('lightbox-active');
          isLightboxOpen = true;
          // specific scroll position at open
          lastScrollY = window.scrollY;
          lastScrollX = window.scrollX;
          // document.body.style.overflow = 'hidden'; // Allow scrolling to trigger close
        }
      });
    });

    // Close lightbox on backdrop click
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        // Close if clicking on backdrop or lightbox container (but not on content)
        if (e.target === lightbox || e.target === lightboxBackdrop) {
          closeLightbox();
        }
      });
    }

    // Prevent closing when clicking on the image or content
    if (lightboxContent) {
      lightboxContent.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Close lightbox function
    function closeLightbox() {
      // Remove active class and body class
      lightbox.classList.remove('active');
      document.body.classList.remove('lightbox-active');

      // Wait for fade out transition (matching CSS 0.15s)
      setTimeout(() => {
        isLightboxOpen = false;
        // document.body.style.overflow = ''; // No need to reset overflow
        lightboxImage.src = ''; // Clear src to prevent flash of old image next time
      }, 150);
    }

    // Close on scroll (any direction)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (isLightboxOpen) {
        const currentScrollY = window.scrollY;
        const currentScrollX = window.scrollX;
        // Compare against the position when it was OPENED (lastScrollY set at open)
        const scrollDeltaY = Math.abs(currentScrollY - lastScrollY);
        const scrollDeltaX = Math.abs(currentScrollX - lastScrollX);

        // Close if scrolling in any direction
        if (scrollDeltaY > 10 || scrollDeltaX > 10) {
          closeLightbox();
        }
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    });
  }

});