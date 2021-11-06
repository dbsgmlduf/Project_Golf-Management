import Swal from 'sweetalert2';

const FailAlert = () => {
    Swal.fire({
        icon: 'fail',
        title: 'fail!',
        text: '실패하셨습니다. 다시 시도해주세요'
    });
}

export default FailAlert;