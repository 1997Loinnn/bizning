export default {
    // Note: I skipped the components here (again)
      methods: {
        scrollMeTo(id) {
        let element = document.getElementById(id)
        // Calculate position to scroll to
        const y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
    };