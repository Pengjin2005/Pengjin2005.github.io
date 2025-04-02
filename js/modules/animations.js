/**
 * 页面动画效果模块
 */
export function initAnimations() {
    // 添加页面加载动画
    addLoadingAnimation();
    
    // 添加滚动显示动画
    addScrollRevealAnimation();
}

/**
 * 页面加载时的动画效果
 */
function addLoadingAnimation() {
    const profileSection = document.querySelector('.profile');
    const contentSections = document.querySelectorAll('.content-section');
    
    // 为个人资料部分添加淡入效果
    if (profileSection) {
        profileSection.style.opacity = '0';
        setTimeout(() => {
            profileSection.style.transition = 'opacity 1s ease';
            profileSection.style.opacity = '1';
        }, 300);
    }
    
    // 为内容部分添加淡入效果，依次延迟显示
    contentSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translate3d(0, 20px, 0)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translate3d(0, 0, 0)';
        }, 500 + (index * 200));
    });
}

/**
 * 滚动时的显示动画
 */
function addScrollRevealAnimation() {
    // 获取所有需要动画的元素
    const animElements = document.querySelectorAll('.content-section h2, .content-section p, .research-links');
    
    // 创建Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // 元素显示后，不再观察
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 为每个元素添加初始样式并开始观察
    animElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translate3d(0, 30px, 0)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // 添加CSS类用于动画
        element.addEventListener('transitionend', function() {
            this.style.transform = '';
            this.style.opacity = '';
        }, { once: true });
        
        // 开始观察元素
        observer.observe(element);
    });
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translate3d(0, 0, 0) !important;
        }
    `;
    document.head.appendChild(style);
}