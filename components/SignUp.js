import { Grid, Box, Typography, FormControl, OutlinedInput, Button } from "@mui/material"
import { Lock, Person } from '@mui/icons-material';
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function SignUp() {
    const initialState = { username: "", password: "", name: "" }
    const [dataForm, setDataForm] = useState(initialState)
    const [isValidate, setIsValidate] = useState(false)
    const router = useRouter()

    const submit = function () {
        setIsValidate(true)
        if (dataForm.username && dataForm.password && dataForm.name) {
            setIsValidate(false)
            router.push('/', { scroll: false })
        }
    }

    return (
        <Box >
             <Typography component="div" variant="h4" sx={{ marginBottom: '10px', marginLeft: '10px' }}>
                    Sign Up
                </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} md={6}>
                    <FormControl sx={{ width: '100%', marginBottom: '10px' }}>
                        <OutlinedInput startAdornment={<Person sx={{ fontSize: 25 }} > </Person>} placeholder="Username" sx={{ color: '#8E8E8E', background: 'wite' }} value={dataForm.username} onChange={(e) => setDataForm({ ...dataForm, username: e.target.value })} error={isValidate && !dataForm.username} />
                    </FormControl>
                    <FormControl sx={{ width: '100%', marginBottom: '10px' }}>
                        <OutlinedInput startAdornment={<Lock sx={{ fontSize: 25 }} > </Lock >} type="password" placeholder="Password" sx={{ color: '#8E8E8E', background: '#EBEDFF' }} value={dataForm.password} onChange={(e) => setDataForm({ ...dataForm, password: e.target.value })} error={isValidate && !dataForm.password} />
                    </FormControl>
                    <FormControl sx={{ width: '100%', marginBottom: '10px' }}>
                        <OutlinedInput  placeholder="Name" sx={{ color: '#8E8E8E', background: 'wite' }} value={dataForm.name} onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })} error={isValidate && !dataForm.name} />
                    </FormControl>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                        <Button sx={{ background: '#2D3DDF', color: 'white', width: 150, height: 50 }} onClick={submit}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}