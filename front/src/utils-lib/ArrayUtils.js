let ArrayUtils = {
    
    shuffle: function(array) {
        let source = [].concat(array)
        let result = []
        while(source.length) {
            let index = Math.floor(Math.random() * (source.length))
            console.log(index)
            result.push(source.splice(index, 1)[0])
        }
        return result
    }
}



export default ArrayUtils