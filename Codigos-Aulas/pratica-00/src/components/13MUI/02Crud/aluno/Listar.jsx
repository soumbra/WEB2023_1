import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios" 

const Listar = () => {
    const [alunos, setAlunos] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3001/aluno/listar")
                .then(
                    (response) => {
                        setAlunos(response.data)
                    }
                )
                .catch(error => console.log(error))
        } 
        ,
        []
    )

    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir?")){
            axios.delete(`http://localhost:3001/aluno/delete/${id}`)
                .then(
                    (reponse) => {
                        const resultado = alunos.filter(aluno => aluno._id != id)
                        setAlunos(resultado)
                    })
                .catch(error => console.log(error))
            alert("Aluno " + id + " excluído com sucesso!")
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth:650}} arial-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>IRA</TableCell>
                            <TableCell>AÇOES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno)=>{
                                    return (
                                        <TableRow>
                                            <TableCell>{aluno._id}</TableCell>
                                            <TableCell>{aluno.nome}</TableCell>
                                            <TableCell>{aluno.ira}</TableCell>                            
                                            <TableCell>
                                                <Box>
                                                    <IconButton arial-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>

                                                    <IconButton arial-label="delete" color="error" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>    
                                            </TableCell>            
                                        </TableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default Listar