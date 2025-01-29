import mysql from 'mysql2/promise';
import {config} from 'dotenv';
config()

// Create a connection pool for the database        
const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  

  const getUsers = async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getProducts = async ()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}


console.log(await getUsers());

console.log(await getProducts());

// Function to retrieve all data from the 'products' table  
const deleteProduct = async () => {
    const [rows] = await pool.query("DELETE FROM products WHERE product_code = 'baro1'");
    return rows;
}
console.log(await deleteProduct());
// 
const updateProduct = async () => {
    const [rows] = await pool.query("INSERT INTO products (product_code, product_name, product_price, product_quantity) VALUES ('gats1', 'Gatsby', '100.00', '3')");
    return rows;
}
console.log(await updateProduct());
// 
const insertProduct = async () => {
    const [rows] = await pool.query("UPDATE products SET product_price = '200.00' WHERE product_code = 'byoil1'");
    return rows;
}
console.log(await insertProduct());






