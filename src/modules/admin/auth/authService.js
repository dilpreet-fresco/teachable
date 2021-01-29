import axios from 'axios';

export default class AuthService {
  static async signinWithEmailAndPassword({ email, password }) {
    const result = await axios.post('/v1/admin/auth/login', {
      email,
      password,
    });
    return result;
  }

  static async signout() {
    this.removeAuthFromStorage();
  }

  static getAuthFromStorage() {
    const token = localStorage.getItem('adminToken');
    const userId = localStorage.getItem('adminId');
    const expirationDate = localStorage.getItem('adminExpirationDate');

    return { token, userId, expirationDate };
  }

  static saveAuthToStorage(token, userId, expiresIn, email) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminId', userId);
    localStorage.setItem('adminExpirationDate', expirationDate);
  }

  static removeAuthFromStorage() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminId');
    localStorage.removeItem('adminExpirationDate');
  }

  static async fetchMe(token) {
    try {
      const { data } = await axios.get('/v1/admin/auth', {
        headers: {
          'x-auth-token': `${token}`,
        },
      });

      // console.log(data)
      return data;
    } catch (err) {
      // console.log(err.response.data);
    }
  }
}
