const isLecturer = () => !!(localStorage.getItem('userType')==="lecturer");

export default isLecturer;