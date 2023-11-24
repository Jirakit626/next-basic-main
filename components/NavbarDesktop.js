import styles from "@/styles/Home.module.css"
import { Grid, Box, Typography } from "@mui/material"
import { useRouter } from 'next/navigation'
export default function NavbarDesktop() {
    const router = useRouter()

    const goHome = function () {
        router.push('/', { scroll: false })
    }

    const goLogin = function () {
        router.push('/login', { scroll: false })
    }

    const goSignup = function () {
        router.push('/register', { scroll: false })
    }

    return (
        <Box className={styles.bg} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box sx={{ marginBottom: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between' ,margin:'20px'}}>
                        <Typography component="div" variant="h4" sx={{ marginBottom: '10px', marginLeft: '10px', color: 'white', cursor: 'pointer' }} onClick={goHome}>
                            Coin Cryto
                        </Typography>
                        <Box sx={{ marginBottom: '10px', display: 'flex', }}>
                            <Typography component="div" variant="h6" sx={{ marginBottom: '10px', marginRight: '10px', cursor: 'pointer', color: 'white' }} onClick={goLogin}>
                                Log in
                            </Typography>
                            <Typography component="div" variant="h6" sx={{ marginBottom: '10px', marginRight: '10px', cursor: 'pointer', color: 'white' }} onClick={goSignup}>
                                Sign up
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}