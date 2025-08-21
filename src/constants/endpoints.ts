const API_URL = process.env?.NEXT_PUBLIC_SUPABASE_URL;
// const API_URL = "http://127.0.0.1:8000";
// const API_LOCAL_URL = "";

const ENDPOINTS = {
  LOGIN: `${API_URL}/login`,
  TOKEN: `${API_URL}/token`,
  GET_ME: `${API_URL}/users/me`,
};

export default ENDPOINTS;
