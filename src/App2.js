import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import PersonalDetails from './components/Form/PersonalDetails';
const App2 = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg" style={{ display: 'flex' }}>
            <PersonalDetails />
        </Container>
    );
};

export default App2;
