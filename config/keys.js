module.exports = {
    MongoURI: 'mongodb://red:<AZYosYWqnt9vNxjn>@cluster0-shard-00-00-eaovm.mongodb.net:27017,cluster0-shard-00-01-eaovm.mongodb.net:27017,cluster0-shard-00-02-eaovm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
    
}

dbPassword = 'mongodb+srv://red:'+ encodeURIComponent('AZYosYWqnt9vNxjn') + '@cluster0-shard-00-02-eaovm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};