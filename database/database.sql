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
    sub_category_id INT REFERENCES sub_category(id) NOT NULL
);
-- // /////////////////////////////////////////////////////////////////////////////////////
-- ORDERS TABLE
CREATE TABLE orders(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES users(id) NOT NULL, 
    product_id uuid REFERENCES products(id) NOT NULL
);
-- // /////////////////////////////////////////////////////////////////////////////////////
-- STATIC PRODUCTS
INSERT INTO products(product_img,product_price,product_title,product_sub_title,sub_category_id) VALUES('nikekepka.jpg','150.000','nike kepka xxl','zor oli kiyila kayp qilib yurila',1);
INSERT INTO products(product_img,product_price,product_title,product_sub_title,sub_category_id) VALUES('iphone14promax.jpg','15.000.000','iphone 14 pro max','zor oli kiyila kayp qilib yurila',2);
INSERT INTO products(product_img,product_price,product_title,product_sub_title,sub_category_id) VALUES('bmwm5.jpg','2.598.000.000','bmw m5 2023','zor oli kiyila kayp qilib yurila',3);
INSERT INTO products(product_img,product_price,product_title,product_sub_title,sub_category_id) VALUES('stolstulxittoy.jpg','990.000','xittoy stoo stul','zor oli kiyila kayp qilib yurila',4);
INSERT INTO orders(user_id,product_id) VALUES('e83b191b-fd15-430d-82ed-df0e31fce62b','1d4fe1db-6979-4d89-9aee-d09cf18d27bd');