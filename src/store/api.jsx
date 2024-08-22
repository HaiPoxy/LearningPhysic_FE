const BASE_URL = "http://localhost:8081/api/v1";
// Common API endpoints
const API = {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    FORGOTPASSWORD: `${BASE_URL}/auth/register`,
    SENDTOEMAIL: `${BASE_URL}/auth/send-to-email`,
    RESETPASSWORD: `${BASE_URL}/auth/reset-password`,

};

export default API;
