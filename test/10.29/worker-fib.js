var f = (n) => {
    if (n <= 2) return 1;
    return f(n - 1) + f(n - 2);
};

// 接收来自主线程的消息
onmessage = function (e) {
    console.log(e.data);
    var res = f(e.data);
    postMessage(res);
};
