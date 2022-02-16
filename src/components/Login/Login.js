import React from "react";
import { Overlay, LoginModalContainer, LoginModal, IconTwitter, LoginTitle, LoginContent, ButtonLogin, Line, TxtCreateAcount } from "./Login.Style";
import LogoTwitter from "./img/logo-twitter.png";
import LogoGoogle from "./img/logo-google.png";
import LogoApple from "./img/logo-apple.png";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Login() {
  const useStyles = makeStyles(() => ({
    input: {
      maxWidth: "290px!important",
      width: "100%",
      marginBottom: "25px!important",
    },
  }));

  const classes = useStyles();

  return (
    <Overlay>
      <LoginModalContainer>
        <LoginModal>
          <div>
            <IconTwitter src={LogoTwitter} />
          </div>
          <LoginTitle>Connectez-vous à Twitter</LoginTitle>

          <ButtonLogin borderColor='#dadce0' bg='transparent' mb='25px'>
            <img src={LogoGoogle} alt='logo de google' />
            <span>Se connecter avec Google</span>
          </ButtonLogin>
          <ButtonLogin bg='transparent' borderColor='#dadce0'>
            <img src={LogoApple} alt="logo d'apple" />
            <span>Se connecter avec Apple</span>
          </ButtonLogin>
          <Line>ou</Line>
          <TextField size='medium' id='outlined-basic' label='Adresse mail' variant='outlined' className={classes.input} />
          <ButtonLogin bg='black' color='white' borderColor='black' bold mb='25px'>
            <span>Suivant</span>
          </ButtonLogin>
          <ButtonLogin bg='#fff' color='#000' borderColor='#dadce0'>
            <span>Mot de passe oublié ?</span>
          </ButtonLogin>
          <TxtCreateAcount>
            Vous n'avez pas de compte ?<a href='/'>Inscrivez-vous</a>
          </TxtCreateAcount>
        </LoginModal>
      </LoginModalContainer>
    </Overlay>
  );
}
