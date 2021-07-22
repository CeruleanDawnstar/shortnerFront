import http from "../http-common";

class UrlService {
  getAll() {
    return http.get("/link");
  }

  get(id) {
    return http.get(`/link/${id}`);
  }

  create(data) {
    return http.post("/link", data);
  }

  update(id, data) {
    return http.put(`/link/${id}`, data);
  }

  delete(id) {
    return http.delete(`/link/${id}`);
  }

 /* findByQrCode(title) {
    return http.get(`/link?qrCode=${qrCode}`);
  }*/
}

export default new UrlService();