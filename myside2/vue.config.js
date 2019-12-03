module.exports = {
    devServer: {
　　　　　// 后期因为报错会加个配置
        // lintOnSave:false,
        // mock模拟数据
        before(app, server) {
            // 接口
            app.get('/api/carList', (req, res) => {
                res.json({
                    result: [
                        {id: 1, title: 'Vue实战开发', price: 188, active: true, count: 1},
                        {id: 2, title: 'python实战开发', price: 189, active: true, count: 1}
                    ]
                })
            })
        }
    }
};