import axios from "axios";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk";

export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};
export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";
// axios instance
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});
