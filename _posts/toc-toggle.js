<script>
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toc-toggle');
    const tocContent = document.getElementById('toc-content');
    
    toggleButton.addEventListener('click', () => {
      if (tocContent.classList.contains('hidden')) {
        tocContent.classList.remove('hidden');
        toggleButton.textContent = 'Hide';
      } else {
        tocContent.classList.add('hidden');
        toggleButton.textContent = 'Show';
      }
    });
  });
</script>
