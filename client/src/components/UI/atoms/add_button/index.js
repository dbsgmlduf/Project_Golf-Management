import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

const AddButton = () => {
    const classes = useStyles();
    return (
        <Button variant="contained" startIcon={<AddIcon />} className={classes.addButton}>
        등록
        </Button>
    )
};

export default AddButton;