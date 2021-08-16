import Api from'./Api'

export default{
    get(params) {
        return new Promise(resolve => {
            Api().get('animal', { params})
                .then(({data}) => {
                    resolve(data)
                })
        })
    }
}