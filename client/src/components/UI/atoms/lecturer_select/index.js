import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';

const SelectLecturer = () => {
    //const [open,setOpen] = useState(false);
    const openHandler = () =>{
        Swal.fire({
            title :'강사를 선택하시겠습니까???',
            showCancelButton: true,
            confirmButtonText:'선택',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: '취소'
        })
    };
    return (
        <Button aria-label="select" onClick={openHandler} variant="contained">
            강사선택
        </Button>
    )

};

export default SelectLecturer;