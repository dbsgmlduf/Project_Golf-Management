import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import React from 'react';

export const learnerListItems = (
    <div>
        <ListItem button component={Link} to="/learner/myprofile">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="프로필수정" />
        </ListItem>
        <ListItem button component={Link} to="/learner">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="강사목록" />
        </ListItem>
        <ListItem button component={Link} to="/learner/addlecturer">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="강사추가" />
        </ListItem>
        <ListItem button component={Link} to="/learner/calendar">
            <ListItemIcon>
                <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="캘린더" />
        </ListItem>
    </div>
);
export const lecturerListItems = (
    <div>
        <ListItem button component={Link} to="/lecturer/myprofile">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="프로필수정" />
        </ListItem>
        <ListItem button component={Link} to="/lecturer">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="회원목록" />
        </ListItem>
        <ListItem button component={Link} to="/lecturer/addlearner">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="회원추가" />
        </ListItem>
        <ListItem button component={Link} to="/lecturer/calendar">
            <ListItemIcon>
                <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="캘린더" />
        </ListItem>
    </div>
);
