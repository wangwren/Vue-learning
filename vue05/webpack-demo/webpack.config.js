const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行,"vue-loader": "^15.7.0",15之后的版本需要指定
module.exports={
    //配置入口文件
    entry:'./main.js',
    //配置入口文件输出位置
    output:{
        path:__dirname, //项目根路径，两个下划线__
        filename:'build.js' //输出的文件名称
    },
    mode:'development',
    plugins : [
        new VueLoaderPlugin() //"vue-loader": "^15.7.0", 15之后的版本需要指定，配合上面的注释使用
    ],
    //配置模块加载器
    module:{
        rules:[
            {
                test:/\.vue$/, //所有以 .vue 结尾的文件都由vue-loader加载
                loader:'vue-loader'
            },
            {
                test:/\.js$/, //所有以 .js 结尾的文件都由babel-loader加载
                loader:'babel-loader',
                exclude:/node_modules/  //除了node_modules下的js文件
            },
            {
                //需要加上对css的loader
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
        ]
    }
}