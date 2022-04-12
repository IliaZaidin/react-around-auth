
class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email
      }),
    })
      .then(this._checkResponse)
  };

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email
      }),
    })
      .then(this._checkResponse)
  };

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem('jwt')}`
      },
    })
      .then(this._checkResponse)
  };
}

const auth = new Auth({
  // baseUrl: "https://register.nomoreparties.co"
  baseUrl: "ilia.students.nomoreparties.sbs"
});

export default auth;