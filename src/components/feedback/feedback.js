import { FormControl, InputLabel, Input, Button } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../../../styles/Home.module.css';
import { Box } from '@mui/system';
import axios from 'axios';

export default function FeedbackField() {

    /*Armazenamento de dados*/

    const [lista, setLista] = useState([]);
    const [id, setId] = useState(null);
    const [name, setName] = useState([]);
    const [feedback, setFeedback] = useState([]);


    /*malipulação das variáveis*/
    const handleChangeName = (text) => {
        setName(text);
    }
    const handleChangeFeedback = (text) => {
        setFeedback(text);
    }

    /*manipulação de ações*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/feedbacks', { name, feedback })
            setLista(lista.concat(data.data))
            setName('')
            setFeedback('')
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (_id) => {
        try {
            await axios.delete(`/api/feedbacks/${_id}`)
            setLista(lista.filter(row => row._id !== _id));
        } catch (error) {
            console.log(error)
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/feedbacks/${id}`, { name, feedback })
            setLista(lista.map(row => row._id === id ? { name, feedback, _id: id } : row))
            setName('')
            setFeedback('')
            setId(null)
        } catch (error) {
            console.log(error)
        }

    };

    const handleShowUpdate = (row) => {
        setId(row._id);
        setName(row.name);
        setFeedback(row.feedback);
    }

    useEffect(() => {
        axios.get('/api/feedbacks').then(({ data }) => {
            setLista(data.data)
        })
    }, [])

    return (
        <div className={styles.crud}>

            <h1>Feedbacks</h1>
            <p>Viu algo possa acrescentar? Deixe um feedback, com certeza contribuirá muito com meu crescimento profissional.</p>

            <div className={styles.crud_form}>
                <Box as="form" className={styles.crud_submit} onSubmit={id ? handleUpdate : handleSubmit}>
                    <FormControl sx={{ m: 2 }} className={styles.crud_input}
                        onChange={e => handleChangeName(e.target.value)}>
                        <InputLabel htmlFor="my-input">Nome</InputLabel>
                        <Input value={name} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{ m: 2 }} className={styles.crud_input}
                        onChange={e => handleChangeFeedback(e.target.value)}>
                        <InputLabel htmlFor="my-input">Feedback</InputLabel>
                        <Input value={feedback} aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button sx={{ m: 4 }} type="submit" variant="outlined"><a>{id ? 'Atualizar' : 'Adicionar'}</a></Button>

                </Box>

            </div>

            <TableContainer className={styles.crud_table} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell >Feedback</TableCell>
                            <TableCell >Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lista.map(row => (
                            <TableRow key={row.email}

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell >{row.name}</TableCell>
                                <TableCell >{row.feedback}</TableCell>
                                <TableCell >
                                    <Button sx={{ m: 2 }} onClick={() => handleShowUpdate(row)} variant="outlined" >Editar</Button>
                                    <Button sx={{ m: 2 }} onClick={() => handleDelete(row._id)} variant="outlined" color="error">Excluir</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className={styles.crud_table_mobile}>
                {lista.map(row => (
                    <ul key={row.email}>
                        <li><p>Nome:</p>{row.name}</li>
                        <li><p>Feedback:</p>{row.feedback}</li>
                        <li><Button sx={{ m: 2 }} onClick={() => handleShowUpdate(row)} variant="outlined" >Editar</Button>
                            <Button sx={{ m: 2 }} onClick={() => handleDelete(row._id)} variant="outlined" color="error">Excluir</Button>
                        </li>
                    </ul>
                ))}
            </div>
        </div >
    )
}