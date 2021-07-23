import http from "../http-common";

class AuthService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  register(user) {
    return http.post("/signUp", {
      pseudo: user.pseudo,
      password: user.password
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
      }
      return response.data;
    });
  }

  login(user) {
    return http.post("/login", {
      pseudo: user.pseudo,
      password: user.password
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
      }
      return response.data;
    });
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  logout() {
      localStorage.removeItem('token');
  }
}

export default new AuthService();