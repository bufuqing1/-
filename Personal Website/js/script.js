// 简单的JavaScript代码，用于处理页面交互
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, targetId);
    });
});

window.addEventListener('popstate', () => {
    const anchor = document.querySelector(location.hash);
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
    }
});