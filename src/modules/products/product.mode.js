const { fetch } = require("../../postgres");
// /////////////////////////////////////////////////////////////////////////////////////
// GET ALL PRODUCTS
const GET_ALL_PRODUCTS = `
    SELECT * FROM products
`;
// /////////////////////////////////////////////////////////////////////////////////////
// CREATE PRODUCTS
const CREATE_PRODUCTS = `
    INSERT INTO products(product_img,product_price,product_title,product_sub_title) VALUES($1,$2,$3,$4)
`;
// /////////////////////////////////////////////////////////////////////////////////////
// UPDATE PRODUCTS
const UPDATE_PRODUCTS = `
    UPDATE products SET product_img = $1, product_price = $2, product_title = $3, product_sub_title = $4 WHERE id = $5
`;
// /////////////////////////////////////////////////////////////////////////////////////
// UPDATE DATE
const UPDATE_CERATED = `
    UPDATE products SET updated_at = CURRENT_TIMESTAMP WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////
// GET CATEGORY
const GET_CATEGORY = `
    SELECT * FROM category 
`;
// /////////////////////////////////////////////////////////////////////////////////////
//  GET SUB CATEGORY
const GET_SUB_CATEGORY = `
    SELECT * FROM sub_category 
`;
// GET ALL PRODUCTS
// /////////////////////////////////////////////////////////////////////////////////////
const getAllProducts = () => fetch(GET_ALL_PRODUCTS);
// UPDATA DATE
// /////////////////////////////////////////////////////////////////////////////////////
const updateDate = (id) => fetch(UPDATE_CERATED, id);
// GET CATEGORY
// /////////////////////////////////////////////////////////////////////////////////////
const getCategory = () => fetch(GET_CATEGORY);
// GET SUB CATEGORY
// /////////////////////////////////////////////////////////////////////////////////////
const getSubCategory = () => fetch(GET_SUB_CATEGORY);
// SEARCH SUB CATEGORY
// /////////////////////////////////////////////////////////////////////////////////////
const serachByTitle = (product_title) => {
    const SEARCH_BY_TITLE = `
        SELECT * FROM products WHERE product_title ILIKE '${product_title}%'
    `;
    return fetch(SEARCH_BY_TITLE);
};
// CREATE PRODUCT
// /////////////////////////////////////////////////////////////////////////////////////
const createProduct = (
    product_img,
    product_price,
    product_title,
    product_sub_title
) =>
    fetch(
        CREATE_PRODUCTS,
        product_img,
        product_price,
        product_title,
        product_sub_title
    );
// UPDATE PRODUCTS
// /////////////////////////////////////////////////////////////////////////////////////
const updateProducts = (
    id,
    product_img,
    product_price,
    product_title,
    product_sub_title
) =>
    fetch(
        UPDATE_PRODUCTS,
        id,
        product_img,
        product_price,
        product_title,
        product_sub_title
    );
// EXPORT MODELS
// /////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    getAllProducts,
    serachByTitle,
    createProduct,
    updateProducts,
    updateDate,
    getCategory,
    getSubCategory,
};
