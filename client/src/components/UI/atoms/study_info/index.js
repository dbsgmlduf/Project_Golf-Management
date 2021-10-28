import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import Info from "../info";

const info = [
    {
        'num': 1,
        'studyDate': '21-09-02',
        'topic': '실생활에서 사용할 수 있는 기술'
    },
    
    
]

const StudyInfo = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="customer week study info">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Num</TableCell>
                        <TableCell align="center">강의진행날짜</TableCell>
                        <TableCell align="center">강의주제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {info.map(c => {
                        return <Info key={c.no} num={c.num} studyDate={c.studyDate} topic={c.topic} />
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudyInfo;