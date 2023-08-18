CREATE DATABASE market;
-- // /////////////////////////////////////////////////////////////////////////////////////
-- USER TABLE
CREATE TABLE users(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_email VARCHAR(64) NOT NULL,
    user_username VARCHAR(64) NOT NULL,
    user_password VARCHAR(200) NOT NULL,
    user_lastname VARCHAR(64) NOT NULL,
    user_phonenumber VARCHAR(15) NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- // /////////////////////////////////////////////////////////////////////////////////////
-- CATEGORY TABLE
CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(64)
);
-- // /////////////////////////////////////////////////////////////////////////////////////
-- SUB_CATEGORY TABLE
CREATE TABLE sub_category(
    id SERIAL PRIMARY KEY,
    sub_category_name VARCHAR(64),
    category_id INT REFERENCES category(id) NOT NULL
);
-- // /////////////////////////////////////////////////////////////////////////////////////
-- PRODUCTS TABLE
CREATE TABLE products(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_img VARCHAR(64) NOT NULL,
    product_price VARCHAR(64) NOT NULL, 
    product_title VARCHAR(64) NOT NULL,
    product_sub_title VARCHAR(200) NOT NULL,
    sub_category_id INT REFERENCES sub_category(id) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL
);
-- // /////////////////////////////////////////////////////////////////////////////////////
-- ORDERS TABLE
CREATE TABLE orders(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES users(id) NOT NULL, 
    product_id uuid REFERENCES products(id) NOT NULL
);
-- // /////////////////////////////////////////////////////////////////////////////////////