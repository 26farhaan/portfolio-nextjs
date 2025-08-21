import axios from "axios";

const apiService = axios.create({
  withCredentials: true, // ⬅️ WAJIB agar cookie dikirim otomatis
});

export default apiService;
