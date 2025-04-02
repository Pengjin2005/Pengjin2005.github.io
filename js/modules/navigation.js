/**
 * 导航功能模块
 */
export function initNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果链接指向页内锚点
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 平滑滚动到目标位置
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                    
                    // 更新URL，但不刷新页面
                    history.pushState(null, '', targetId);
                }
            }
        });
    });
    
    // 添加滚动监听，高亮当前所在部分的导航链接
    window.addEventListener('scroll', highlightCurrentSection);
}

/**
 * 根据当前滚动位置高亮相应的导航链接
 */
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
        
        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
}

/**
 * 导航功能模块
 */
export function initNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果链接指向页内锚点
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 平滑滚动到目标位置
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                    
                    // 更新URL，但不刷新页面
                    history.pushState(null, '', targetId);
                }
            }
            // 外部链接不需要特殊处理，浏览器会自动处理跳转
        });
    });
    
    // 高亮当前活动的导航链接
    highlightCurrentNavLink();
    
    // 添加滚动监听，高亮当前所在部分的导航链接
    window.addEventListener('scroll', highlightCurrentSection);
}

/**
 * 高亮当前页面的导航链接
 */
function highlightCurrentNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // 如果是当前页面，添加active类
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref.startsWith('#'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 根据当前滚动位置高亮相应的导航链接
 */
function highlightCurrentSection() {
    // 只在主页执行此功能
    if (window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('/')) {
        
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
            
            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        });
    }
}