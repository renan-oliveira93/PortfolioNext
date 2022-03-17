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

export default function CrudUsuarios() {

    /*Armazenamento de dados*/

    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState(null);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [telefone, setTelefone] = useState([]);
    const [errors, setErrors] = useState({ name: null, email: null, telefone: null })
    const validForm = () => {
        if (!name) {
            setErrors({ name: 'Name is required' })
            return false
        }
        if (!email) {
            setErrors({ name: 'Email is required' })
            return false
        }
        if (!telefone) {
            setErrors({ name: 'Telefone is required' })
            return false
        }
        setErrors({})
        return true
    }

    /*malipulação das variáveis*/

    const handleChangeName = (text) => {
        setName(text);
        console.log(name);
    }
    const handleChangeEmail = (text) => {
        setEmail(text);
        console.log(email);
    }
    const handleChangeTelefone = (text) => {
        setTelefone(text);
        console.log(telefone);
    }

    /*manipulação de ações*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validForm()) return
        try {
            const { data } = await axios.post('../api/usuarios', { name, email, telefone })
            setUsuarios(usuarios.concat(data.data))
            setName('')
            setEmail('')
            setTelefone('')
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (_id) => {
        try {
            await axios.delete(`../api/usuarios/${_id}`)
            setUsuarios(usuarios.filter(usuario => usuario._id !== _id));
        } catch (error) {
            console.log(error)
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!validForm()) return
        try {
            await axios.put(`/api/usuarios/${id}`, { name, email, telefone })
            setUsuarios(usuarios.map(usuario => usuario._id === id ? { name, email, telefone, _id: id } : usuario))
            setName('')
            setEmail('')
            setTelefone('')
            setId(null)
        } catch (error) {
            console.log(error)
        }

    };

    /*busca no banco de dados*/

    const handleShowUpdate = (usuario) => {
        setId(usuario._id);
        setName(usuario.name);
        setEmail(usuario.email);
        setTelefone(usuario.telefone);
    }

    useEffect(() => {
        axios.get('../api/usuarios').then(({ data }) => {
            setUsuarios(data.data)
        })
    }, [])

    return (
        <div className={styles.crud}>

            <h1>Crud de usuários</h1>
            <p>Crud de usuários criado apenas para divulgação do meu trabalho, insira dados aleatórios para teste.</p>

            <div className={styles.crud_form}>
                <Box as="form" className={styles.crud_submit} onSubmit={id ? handleUpdate : handleSubmit}>
                    <FormControl sx={{ m: 2 }} className={styles.crud_input}
                        onChange={e => handleChangeName(e.target.value)}>
                        <InputLabel htmlFor="my-input">Nome</InputLabel>
                        <Input value={name} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{ m: 2 }} className={styles.crud_input}
                        onChange={e => handleChangeEmail(e.target.value)}>
                        <InputLabel htmlFor="my-input">Email</InputLabel>
                        <Input value={email} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{ m: 2 }} className={styles.crud_input}
                        onChange={e => handleChangeTelefone(e.target.value)}>
                        <InputLabel htmlFor="my-input">Telefone</InputLabel>
                        <Input value={telefone} aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button sx={{ m: 4 }} type="submit" variant="outlined"><a>{id ? 'Atualizar' : 'Adicionar'}</a></Button>
                </Box>
            </div>

            <div className={styles.crud_table_bg}>
                <TableContainer className={styles.crud_table}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Telefone</TableCell>
                                <TableCell >Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usuarios.map(usuario => (
                                <TableRow key={usuario.email}

                                    sx={{ '&:last-child td, &:last-child th': { border: 0, m: 2 } }}
                                >

                                    <TableCell >{usuario.name}</TableCell>
                                    <TableCell >{usuario.email}</TableCell>
                                    <TableCell >{usuario.telefone}</TableCell>
                                    <TableCell >
                                        <Button onClick={() => handleShowUpdate(usuario)} variant="outlined" sx={{ m: 2 }}>Editar</Button>
                                        <Button onClick={() => handleDelete(usuario._id)} variant="outlined" color="error" sx={{ m: 2 }}>Excluir</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.crud_table_mobile}>
                {usuarios.map(usuario => (
                    <ul key={usuario.email}>
                        <li><p>Nome:</p>{usuario.name}</li>
                        <li><p>Email:</p>{usuario.email}</li>
                        <li><p>Telefone:</p>{usuario.telefone}</li>
                        <li><Button sx={{ m: 2 }} onClick={() => handleShowUpdate(usuario)} variant="outlined" >Editar</Button>
                            <Button sx={{ m: 2 }} onClick={() => handleDelete(usuario._id)} variant="outlined" color="error">Excluir</Button>
                        </li>
                    </ul>
                ))}
            </div>
        </div >
    )
}