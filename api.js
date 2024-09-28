window.onload = function() {
            
            const urls = [
                'https://1.b.com',
                'https://2.b.com',
                'https://3.b.com' 
            ];

          
            let redirectIndex = localStorage.getItem('redirectIndex');
            if (redirectIndex === null) {
                redirectIndex = 0;
            } else {
                redirectIndex = parseInt(redirectIndex, 10);
            }

           
            const nextUrl = urls[redirectIndex];

            
            redirectIndex = (redirectIndex + 1) % urls.length;

           
            localStorage.setItem('redirectIndex', redirectIndex);

           
            window.location.replace(nextUrl);
        };
