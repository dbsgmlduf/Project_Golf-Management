const isLogin = () => !!localStorage.getItem('accessToken');
//localStorage.clear('accessToken');

export default isLogin;