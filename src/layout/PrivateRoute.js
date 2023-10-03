import React from "react";
import { userLocalStorage } from "../api/localService";

export default function PrivateRoute({ children }) {
  let user = userLocalStorage.get();
  if (user?.maLoaiNguoiDung == "QuanTri") {
    return children;
  }
  window.location.href = "/login";
}
