import Api from'./Api'

export default{
    get(params) {
        return new Promise(resolve => {
            Api().get('cliente', { params})
                .then(({data}) => {
                    resolve(data)
                })
        })
    }
}