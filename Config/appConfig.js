class AppConfig {

    baseUrl = 'https://jsonplaceholder.typicode.com';
    // baseUrl = 'http://localhost:3004';
    todos = this.baseUrl + '/todos/';
    users = this.baseUrl + '/users/';
    posts = this.baseUrl + '/posts/';
    products = 'https://dummyjson.com/products/';
    register = this.baseUrl + '/register/';
    login = this.baseUrl + '/login/';
}

const appConfig = new AppConfig();

export default appConfig;