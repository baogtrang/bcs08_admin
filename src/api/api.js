import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
    headers: configHeaders(),
  });
};
