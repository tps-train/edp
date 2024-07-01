conn = new Mongo();

db = connect("localhost:27017");

db = db.getSiblingDB('IMS');

db.createCollection("products");