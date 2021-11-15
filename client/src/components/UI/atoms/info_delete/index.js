import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';
import axios from 'axios';

const DeleteStudy = (props) => {
    //const [open,setOpen] = useState(false);
    const openHandler = () => {
        Swal.fire({
            title: '내용을 삭제하시겠습니까??',
            text: '삭제하시면 다시 복구시킬 수 없습니다.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
        }).then((result) => {
            let data = {
                lec_theme: '',
                lec_content: '',
                supplement_item: '',
                class_date: '',
                next_class_date: '',
            };
            if (result.isConfirmed) {
                axios
                    .patch(`api/instructors/enrollment/${props.username}`, data)
                    .then((response) => {
                        const isSuccess = response.data.isSelected.isenrolled;
                        if (!isSuccess) {
                            //성공
                            Swal.fire({
                                icon: 'success',
                                title: 'SUCCESS!',
                                text: '성공하셨습니다.',
                            }).then(() => {
                                window.location.replace(
                                    `/lecturer/info/${props.username}`
                                );
                            });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            icon: 'fail',
                            title: 'FAIL!',
                            text: '삭제 요청을 실패하셨습니다!',
                        });
                    });
            } else {
                Swal.fire({
                    icon: 'fail',
                    title: 'FAIL!',
                    text: '삭제를 취소하셨습니다!',
                });
            }
        });
    };
    return (
        <IconButton aria-label="delete" onClick={openHandler}>
            <DeleteIcon />
        </IconButton>
    );
};

export default DeleteStudy;
