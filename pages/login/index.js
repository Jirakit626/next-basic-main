import Head from "next/head"
import Login from "@/components/Login"
import { Box } from "@mui/material"

export default function Index() {
    return (
        <>
            <Box  sx={{ width: '100vw', marginBottom: '30px', marginTop: '70px' }}>
                <Login></Login>
            </Box>
        </>
    )
}