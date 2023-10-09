import axios from "axios";
import { BASE_URL, configHeaders, https } from "./config";

export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
    headers: configHeaders(),
  });
};

// anything related to user will be in this file
export let userServ = {
  getList: () => { 
    return https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00"); 
  },
  delete: (taiKhoan) => https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`),
  

};