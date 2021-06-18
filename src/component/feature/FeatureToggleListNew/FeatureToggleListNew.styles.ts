import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    tableRow: {
        cursor: 'pointer',
    },
    tableCell: {
        border: 'none',
        padding: '0.25rem 0',
    },
    tableCellHeader: {
        paddingBottom: '0.5rem',
    },
    tableCellName: {
        width: '250px',
    },
    tableCellEnv: {
        width: '20px',
    },
    tableCellType: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '0.3rem',
    },
    pagination: {
        margin: '1rem 0 0 0',
        display: 'flex',
        justifyContent: ' center',
        position: 'absolute',
        bottom: '25px',
        right: '0',
        left: '0',
    },
    paginationInnerContainer: {
        position: 'relative',
    },
    paginationButton: {
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'efefef',
        margin: '0 0.2rem',
        borderRadius: '3px',
        padding: '0.25rem 0.5rem',
    },
    paginationButtonActive: {
        backgroundColor: '#635DC5',
        color: '#fff',
        transition: 'backgroundColor 0.3s ease',
    },
    idxBtn: {
        border: 'none',
        borderRadius: '3px',
        position: 'absolute',
        height: '23px',
        cursor: 'pointer',
    },
    idxBtnIcon: {
        height: '15px',
        width: '15px',
    },
    idxBtnLeft: {
        left: '-30px',
    },
    idxBtnRight: {
        right: '-30px',
    },
}));
