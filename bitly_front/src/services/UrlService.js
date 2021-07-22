import http from "../http-common";

class UrlService {
  getAllUsers() {
    return http.get("/users");
  }

  getUserId(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

 /* findByQrCode(title) {
    return http.get(`/link?qrCode=${qrCode}`);
  }*/
}

export default new UrlService();