addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // بررسی نوع درخواست
  if (request.method === 'GET') {
    // URL مورد نظر برای درخواست POST
    const url = 'YOURE_URL'; // input youre url here 
    
    
    // تعریف هدرها
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      'authorization': 'YOUR_AUTH', // input youre auth here
      'content-length': '0',
      'origin': 'https://dev.goatsbot.xyz',
      'priority': 'u=1, i',
      'referer': 'https://dev.goatsbot.xyz/',
      'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
    };
 
    // ارسال درخواست POST
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
    });

    // برگرداندن پاسخ به کاربر
    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    // اگر نوع درخواست GET نبود
    return new Response('Only GET requests are allowed', { status: 405 });
  }
}
