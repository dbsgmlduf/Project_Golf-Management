import Swal from 'sweetalert2';

const SuccessAlert = () => {
    Swal.fire({
        icon: 'success',
        title: 'SUCCESS!',
        text: '성공하셨습니다.'
    });
}

export default SuccessAlert;