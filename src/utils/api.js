class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._token = options.token;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // "authorization": localStorage.getItem('jwt')
        authorization: this._token
      }
    })
      .then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // authorization: localStorage.getItem('jwt')
        authorization: this._token
      }
    })
      .then(this._checkResponse);
  }

  editProfile(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        // authorization: localStorage.getItem('jwt'),
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._checkResponse);
  }

  updateProfilePicture(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        // authorization: localStorage.getItem('jwt'),
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: link
      })
    })
      .then(this._checkResponse);
  }

  addCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        // authorization: localStorage.getItem('jwt'),
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: { 
        // authorization: localStorage.getItem('jwt') 
        authorization: this._token
      }
    })
      .then(this._checkResponse);
  }

  like(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        // authorization: localStorage.getItem('jwt')
        authorization: this._token
      }
    })
      .then(this._checkResponse);
  }

  dislike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        // authorization: localStorage.getItem('jwt')
        authorization: this._token
      }
    })
      .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  token: "3818518a-0f00-4af2-b13c-93949a3b17de"
});

export default api;