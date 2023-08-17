const { fetch } = require("../../postgres");
// /////////////////////////////////////////////////////////////////////////////////////

const USER_RETRIEVE = `
    SELECT * FROM users WHERE user_email = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////

const ACCOUNT_USER = `
    SELECT * FROM users WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////

const GET_ALL_USER = `
    SELECT * FROM users
`;
// /////////////////////////////////////////////////////////////////////////////////////

const UPDATE_CERATED = `
    UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = $1
`;
// /////////////////////////////////////////////////////////////////////////////////////

const UPDATE_ACCOUNT = `
    UPDATE users SET user_email = $1, user_username = $2, user_password = crypt($3, gen_salt('bf', 4)), user_lastname = $4, user_phonenumber = $5 WHERE id = $6
`;
// /////////////////////////////////////////////////////////////////////////////////////

const CREATE_NEW_USER = `
    INSERT INTO users(user_email, user_username, user_password, user_lastname, user_phonenumber) VALUES($1,$2,crypt($3, gen_salt('bf', 4)),$4,$5) RETURNING id
`;
// /////////////////////////////////////////////////////////////////////////////////////
const getAllusers = () => fetch(GET_ALL_USER);

// /////////////////////////////////////////////////////////////////////////////////////
const updateDate = (id) => fetch(UPDATE_CERATED, id);

// /////////////////////////////////////////////////////////////////////////////////////
const getAccountUser = (id) => fetch(ACCOUNT_USER, id);

// /////////////////////////////////////////////////////////////////////////////////////
const userRetriew = (user_email) => fetch(USER_RETRIEVE, user_email);

// /////////////////////////////////////////////////////////////////////////////////////

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

// /////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    createNewUser,
    getAllusers,
    userRetriew,
    getAccountUser,
    updateAccount,
    updateDate,
};
