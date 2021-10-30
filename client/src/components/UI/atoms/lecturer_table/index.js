import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import Customers from '../customer';
import useStyles from './style';

const customers = [
    {
        'id': 1,
        'name': '홍길동',
        'lastDate': '21-9-01',
        'nextDate': '21-10-14'
    }
    ,
    {
        'id': 2,
        'name': '나영희',
        'lastDate': '21-9-02',
        'nextDate': '21-10-13'
    }
    ,
    {
        'id': 3,
        'name': '김철수',
        'lastDate': '21-9-03',
        'nextDate': '21-10-12'
    }
    ,
    {
        'id': 4,
        'name': '신짱구',
        'lastDate': '21-9-04',
        'nextDate': '21-10-11'
    }
    ,
]
export default function BasicTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table sx={{ minWidth: 650 }} aria-label="lecturer main table" className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">번호</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center">최근 강의 날짜</TableCell>
                        <TableCell align="center">다음 강의 예정일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(c=>{
                        return<Customers key={c.id} id={c.id} name={c.name} lastDate={c.lastDate} nextDate={c.nextDate}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}