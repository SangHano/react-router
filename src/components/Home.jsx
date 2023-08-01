import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FaceIcon from '@mui/icons-material/Face';
const Home= ()=>{
    return(
        <Box id="box" sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <div id="sideBar">
                    <h1>Testing Side Bar</h1>
                    <h3>Used</h3>
                        <ul>
                            <li>Box</li>
                            <li>Grid</li>
                            <li>React Router</li>
                            <li>Icons</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={10}>
                <div id="mainBar">
                    <h2>Website</h2>
                    <h4>By Mike</h4>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div id="miniBar1">
                    <GitHubIcon/><Link href="https://github.com/SangHano">GitHub</Link>
                    <h2></h2>
                    <LinkedInIcon/><Link href="https://www.linkedin.com/in/mike-sangchul-han/">LinkedIn</Link>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div id="miniBar2">
                    <EmailIcon/><h5>Fake@email.com</h5>
                    <h2></h2>
                    <CallIcon/><h5>111-111-1111</h5>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div id="miniBar3">
                    <FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/>
                    <h2></h2>
                    <FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/><FaceIcon/>
                    </div>
                </Grid>
                
            </Grid>
        </Box>
     ) 
}
export default Home