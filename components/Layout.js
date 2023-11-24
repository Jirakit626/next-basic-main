import Footer from "./Footer"
import NavbarDesktop from "./NavbarDesktop"
import Box from '@mui/material/Box';
export default function Layout({ children }) {
    return (
        <Box sx={{}}>
            <NavbarDesktop />
            {children}
            {/* <Footer/> */}
        </Box>
    )
}