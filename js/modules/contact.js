/**
 * 联系表单处理模块
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * 处理表单提交
 * @param {Event} event - 表单提交事件
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    
    // 在实际应用中，这里应该发送数据到服务器
    console.log('表单数据:', formValues);
    
    // 模拟发送过程
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = '发送中...';
    
    // 模拟网络请求
    setTimeout(() => {
        // 显示成功消息
        showFormMessage('消息发送成功！我们会尽快回复您。', 'success');
        
        // 重置表单
        event.target.reset();
        
        // 恢复按钮状态
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1500);
}

/**
 * 显示表单提交结果消息
 * @param {string} message - 消息内容
 * @param {string} type - 消息类型 (success/error)
 */
function showFormMessage(message, type) {
    // 检查是否已存在消息元素
    let messageElement = document.querySelector('.form-message');
    
    if (!messageElement) {
        // 创建新的消息元素
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        
        // 添加到表单后面
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(messageElement, form.nextSibling);
    }
    
    // 设置消息内容和样式
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    
    // 添加样式
    const style = document.createElement('style');
    if (!document.querySelector('style#form-message-style')) {
        style.id = 'form-message-style';
        style.textContent = `
            .form-message {
                padding: 12px;
                margin-top: 20px;
                border-radius: 4px;
                text-align: center;
                animation: fadeIn 0.5s ease;
            }
            
            .form-message.success {
                background-color: rgba(39, 174, 96, 0.2);
                color: #2ecc71;
                border: 1px solid #27ae60;
            }
            
            .form-message.error {
                background-color: rgba(231, 76, 60, 0.2);
                color: #e74c3c;
                border: 1px solid #c0392b;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 5秒后自动隐藏消息
    setTimeout(() => {
        messageElement.style.animation = 'fadeOut 0.5s ease forwards';
    }, 5000);
}