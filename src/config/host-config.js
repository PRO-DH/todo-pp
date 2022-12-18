
// 브라우저가 현재의 클라이언트 호스트 이름을 얻어오는 방법
const hostname = window && window.location && window.location.hostname;
// window = 브라우저창 , window.location = 브라우저 이동, window.location.hostname = 브라우저가 이동할 때의 이름

console.log(hostname);

let backendHost;    // 백앤드 호스트 이름
if (hostname === 'localhost'){
    backendHost = 'http://localhost:8181';
}

export const API_BASE_URL = `${backendHost}`;