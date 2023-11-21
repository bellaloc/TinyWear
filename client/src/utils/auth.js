import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
  async signup(userData) {
    try {
      // Perform the sign-up API request here, e.g., using fetch or your preferred method
      const response = await fetch('YOUR_SIGNUP_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        // Handle signup failure, maybe throw an error or return a specific response
        throw new Error('Signup failed');
      }

      // Assuming your signup API returns the new user's token
      const { token } = await response.json();

      // Save the token and reload the application
      this.login(token);

      return { success: true };
    } catch (error) {
      // Handle any errors during the signup process
      console.error('Signup error:', error);
      return { success: false, error: 'Signup failed' };
    }
  }
}

export default new AuthService();
