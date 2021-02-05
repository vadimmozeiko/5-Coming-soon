const allProgressBars = document.querySelectorAll('.bar-overlay');

addEventListener('scroll', () => {
    const screenBottom = innerHeight + scrollY;

    for (let bar of allProgressBars) {
        const barBottom = bar.offsetHeight + bar.offsetTop;
        if (screenBottom >= barBottom) {
            bar.classList.add('animate');
        }
    }
})