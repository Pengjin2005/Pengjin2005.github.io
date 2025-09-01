// 导入模块
import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';

// 当DOM加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化导航
    initNavigation();
    
    // 初始化动画效果
    initAnimations();
    
    console.log('网站初始化完成');
});