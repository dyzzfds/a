window.onload = function() {
            // 定义需要重定向的 URL 数组
            const urls = [
                'https://1.b.com',
                'https://2.b.com',
                'https://3.b.com'  // 你可以根据需要添加更多的 URL
            ];

            // 从浏览器的本地存储中获取计数值，如果不存在则初始化为 0
            let redirectIndex = localStorage.getItem('redirectIndex');
            if (redirectIndex === null) {
                redirectIndex = 0;
            } else {
                redirectIndex = parseInt(redirectIndex, 10);
            }

            // 获取要重定向的下一个 URL
            const nextUrl = urls[redirectIndex];

            // 更新计数器，如果超过数组长度则重置为 0
            redirectIndex = (redirectIndex + 1) % urls.length;

            // 保存更新后的计数器到本地存储中
            localStorage.setItem('redirectIndex', redirectIndex);

            // 进行重定向
            window.location.href = nextUrl;
        };
