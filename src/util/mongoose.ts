module.exports = {
    multipleMongooseToObject: function (mongoose: any) {
        return mongoose.map((mongoose: { toObject: () => any }) => mongoose.toObject())
    },
    mongooseToObject: function (mongoose: any ){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}
