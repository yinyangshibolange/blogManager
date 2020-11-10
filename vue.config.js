module.exports = {
    devServer: {
        proxy: {
            '/api': {                //这里最好有一个 /
                target: 'http://localhost:3100',         // 服务器端接口地址
                // ws: true,            //如果要代理 websockets，配置这个参数
                // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/xauth': {                //这里最好有一个 /
                target: 'http://localhost:3100',         // 服务器端接口地址
                // ws: true,            //如果要代理 websockets，配置这个参数
                // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/xauth': '/xauth'
                }
            },
            '/upload': {
                target: 'http://up.imgapi.com/', // 该接口来自 贴图库 - http://www.tietuku.com/
                changeOrigin: true,
                pathRewrite: {
                    '^/upload': ''
                    //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            },
        }

    }
}