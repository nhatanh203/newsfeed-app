import mongoose from "mongoose"

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/node_training_dev')
        console.log('Connect successfully !!!')
    } catch (error) {
        console.log('Connect false !!!')
    }
}

export default { connect };