import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';

const DeleteStudy = () => {
    //const [open,setOpen] = useState(false);
    const openHandler = () =>{
        Swal.fire({
            title :'내용을 삭제하시겠습니까??',
            text:'삭제하시면 다시 복구시킬 수 없습니다.',
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText: '취소'
        })
    };
    return (
        <IconButton aria-label="delete" onClick={openHandler}>
            <DeleteIcon />
        </IconButton>
    )

};

export default DeleteStudy;