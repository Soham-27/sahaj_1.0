// JavaScript for Accordion Functionality
document.querySelectorAll('.info-card h2').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.maxHeight;

        // Close other open sections
        document.querySelectorAll('.info-card div').forEach((div) => {
            div.style.maxHeight = null;
        });

        // Toggle the clicked section
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
