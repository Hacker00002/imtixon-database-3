const { fetch } = require("../../postgres");
// /////////////////////////////////////////////////////////////////////////////////////
// USER_RETRIEVE
const USER_RETRIEVE = `
    SELECT * FROM users WHERE user_email = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////
// ACCOUNT_USER
const ACCOUNT_USER = `
    SELECT * FROM users WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////
// GET_ALL_USER
const GET_ALL_USER = `
    SELECT * FROM users
`;
// /////////////////////////////////////////////////////////////////////////////////////
// UPDATE_CERATED
const UPDATE_CERATED = `
    UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////
// UPDATE_CERATED
const DELETED_DATE = `
    UPDATE archive SET deleted_at = CURRENT_TIMESTAMP WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////
// DELETE_ACCOUNT
const DELETE_ACCOUNT = `
    DELETE FROM users WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////
// UPDATE_ACCOUNT
const UPDATE_ACCOUNT = `
    UPDATE users SET user_email = $1, user_username = $2, user_password = crypt($3, gen_salt('bf', 4)), user_lastname = $4, user_phonenumber = $5 WHERE id = $6
`;
// /////////////////////////////////////////////////////////////////////////////////////
// CREATE_NEW_USER
const CREATE_NEW_USER = `
    INSERT INTO users(user_email, user_username, user_password, user_lastname, user_phonenumber) VALUES($1,$2,crypt($3, gen_salt('bf', 4)),$4,$5) RETURNING id
`;
// GET ALL USERS
// /////////////////////////////////////////////////////////////////////////////////////
const getAllusers = () => fetch(GET_ALL_USER);
// DELET ACCOUNT
// /////////////////////////////////////////////////////////////////////////////////////
const deleteUserAccount = (id) => fetch(DELETE_ACCOUNT, id);
// DELET ACCOUNT
// /////////////////////////////////////////////////////////////////////////////////////
const deleteDateAdd = (id) => fetch(DELETED_DATE, id);
// UPDATE DATE
// /////////////////////////////////////////////////////////////////////////////////////
const updateDate = (id) => fetch(UPDATE_CERATED, id);
// GET ACCOUNT USER
// /////////////////////////////////////////////////////////////////////////////////////
const getAccountUser = (id) => fetch(ACCOUNT_USER, id);
// USER RETRIWE
// /////////////////////////////////////////////////////////////////////////////////////
const userRetriew = (user_email) => fetch(USER_RETRIEVE, user_email);

// /////////////////////////////////////////////////////////////////////////////////////
// UPDATE ACCOUNT
const updateAccount = (
    id,
    user_email,
    user_username,
    user_password,
    user_lastname,
    user_phonenumber
) =>
    fetch(
        UPDATE_ACCOUNT,
        id,
        user_email,
        user_username,
        user_password,
        user_lastname,
        user_phonenumber
    );
// CREATE NEW USER
// /////////////////////////////////////////////////////////////////////////////////////
const createNewUser = (
    user_email,
    user_username,
    user_password,
    user_lastname,
    user_phonenumber
) =>
    fetch(
        CREATE_NEW_USER,
        user_email,
        user_username,
        user_password,
        user_lastname,
        user_phonenumber
    );
// EXPORT MODELS
// /////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    createNewUser,
    getAllusers,
    userRetriew,
    getAccountUser,
    updateAccount,
    updateDate,
    deleteUserAccount,
    deleteDateAdd,
};
