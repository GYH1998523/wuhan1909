// vue cli 脚手架的配置文件
module.exports = {
    // 打包dist  需要设置  基路径 公共路径
    publicPath: "",
    devServer: {
        host: "localhost",
        port: 8081,
        // 自动打开浏览器
        open: true,
        inline: true,
        // 反向代理
        proxy: {
            "/vue": {
                target: "http://localhost:1911",
                changeOrigin: true,
            }
        }
    }
}