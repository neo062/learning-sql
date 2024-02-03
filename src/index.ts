// Write a funtion that create user table in db

import { Client } from 'pg'

const client = new Client({
    connectionString: 'postgresql://navinkumar241999:bM7HoEWjgv4C@ep-shrill-frost-a5205jhc-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
})




async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertUserData() {
    await client.connect()
    const result = await client.query(`
    INSERT INTO users (username, email, password) 
    VALUES ('Navin Kumar', 'codernavin@gmail.com', 'Password@123');
        `)
    console.log(result)
}

async function getAllUsers() {
    await client.connect()
    const result = await client.query(`
    SELECT * FROM users `)
    console.log(result);
}

// createUsersTable();
// insertUserData()
getAllUsers()