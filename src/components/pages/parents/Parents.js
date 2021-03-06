import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utility/axiosWithAuth';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

function Parents() {
    const [parents, setParents] = useState([])


    useEffect(() => {
        axiosWithAuth()
            .get('https://alifcloud.herokuapp.com/api/parents/')
            .then(res => {
                console.log('Inside axios', res.data)

                setParents(res.data)

            })
            .catch(err => console.log(err.response));
    }, []);

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
            marginLeft: 100
        },
        header: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
            marginLeft: 100,
            display: 'flex'
        },
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        table: {
            minWidth: 240,
        },
        title: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
            marginLeft: 100
        },
        add: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
            marginLeft: 500
        }
    }));

    const classes = useStyles();

    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div className={classes.header}>
                    <h2 className={classes.title}>Parents</h2>
                    <h2 className={classes.add}>
                        <Link to="/parentadd">Add New Parent</Link>
                    </h2>
                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">ID</StyledTableCell>
                                <StyledTableCell align="left">NAME</StyledTableCell>
                                <StyledTableCell align="left">PHONE</StyledTableCell>
                                <StyledTableCell align="left">ADDRESS</StyledTableCell>
                                <StyledTableCell align="left">SPOUSE</StyledTableCell>
                                <StyledTableCell align="left">SPOUSE PHONE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {parents.map((parent) => {

                                return <TableRow key={parent.name}>

                                    <TableCell align="left">{parent.id}</TableCell>
                                    <TableCell align="left">{parent.name}</TableCell>
                                    <TableCell align="left">{parent.phone}</TableCell>
                                    <TableCell align="left">{parent.address}</TableCell>
                                    <TableCell align="left">{parent.spouse_name}</TableCell>
                                    <TableCell align="left">{parent.spouse_phone}</TableCell>
                                </TableRow>

                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        </React.Fragment>
    );

}

export default Parents;



