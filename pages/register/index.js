import Head from "next/head"
import SignUp from "@/components/SignUp"
import { Box } from "@mui/material"

export default function Index() {
    return (
        <>
            <Box sx={{ width: '100vw', marginBottom: '30px', marginTop: '70px' }}>
                <SignUp></SignUp>
            </Box>
        </>
    )
}