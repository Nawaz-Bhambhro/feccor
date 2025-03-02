import React from "react";
import { Box, Container, CopyRightWrapper, FooterContainer, IconWrapper, Left, Right } from "../Style/Footer/Style";
import { Typography } from '../Style/Common/Typography';
import { Figure, Image, List, ListItem, Paper } from "../Style/Common/Style";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
        <FooterContainer>
            <Container>
                <Left>
                    <Figure>
                        <Image src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/08/ft-logo.png" alt="Logo" width={60} height={60} />
                    </Figure>
                    <Paper>Beverley Rd Brooklyn, New York 1226 US <br></br>
                        P: + (0712) 819 79 555  | M: info@example.com</Paper>
                    <IconWrapper>
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </IconWrapper>
                </Left>
                <Right>
                    <Box>
                        <Typography variant="h2" color="primary">
                            IT Services
                        </Typography>
                        <List>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography variant="h2" color="primary">
                            IT Services
                        </Typography>
                        <List>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography variant="h2" color="primary">
                            IT Services
                        </Typography>
                        <List>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                        </List>
                    </Box>

                    <Box>
                        <Typography variant="h2" color="primary">
                            IT Services
                        </Typography>
                        <List>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                            <ListItem>Managed IT</ListItem>
                        </List>
                    </Box>
                </Right>
            </Container>
           
        </FooterContainer>
         <CopyRightWrapper>
         <Paper>Copyright © 2018 NanoSoft. Designed and Developed by LineThemes Only on Envato Market.</Paper>
     </CopyRightWrapper>
     </>
    );
}
