class Auth {
    constructor() {
        this.authenticated = false;
    }
    login(cb) {
        //this.authenticated = true;
        localStorage.setItem('isAuth', true)
        cb()
    }
    logout(cb) {
        //this.authenticated = false;
        localStorage.setItem('isAuth', false)
        cb()
    }
    isAuthenticated() {
        //return this.authenticated;
        return localStorage.getItem('isAuth')
    }
    
}

export default new Auth()
