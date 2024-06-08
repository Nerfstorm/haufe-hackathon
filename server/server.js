const { MongoClient } = require('mongodb');

const mongoURI = "mongodb+srv://sharpcword2:Belgia03@firsttry.xughnvy.mongodb.net/";
const dbName = "sample_mflix"; // Change to your actual database name
const collectionName = "refferences"; // Change to your actual collection name

async function printDocuments() {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const documents = await collection.find().toArray();

        console.log("Documents in the collection:");
        documents.forEach(doc => console.log(JSON.stringify(doc, null, 2)));
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}

printDocuments();