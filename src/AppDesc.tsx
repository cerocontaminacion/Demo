import {
  Button,
  Container,
  Fab,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import OpenAIAPI from "react-openai-api";
import {
  CompletionPayload,
  CompletionResponse,
} from "react-openai-api/lib/esm/types";
import reactLogo from "./assets/logo192.png";
import openAILogo from "./assets/openai.png";
import AddIcon from "@material-ui/icons/Add";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  logoContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxHeight: "75px",
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  disclaimer: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));

const App = (): JSX.Element => {
  const classes = useStyles();
  const [apiKey, setApiKey] = useState<string>("");
  const [promptText, setPromptText] = useState<string>("");

  const [payload, setPayload] = useState<CompletionPayload>({
    
    prompt: "", 
    maxTokens: 250,
    temperature: 0.7,
    n: 1,
  });

  const changeApiKeyHandler = (e: any) => {
    setApiKey(e.target.value);
  };

  const changePromptHandler = (e: any) => {
    setPromptText(e.target.value);
  };

  const submitHandler = () => {
    const pl = { ...payload, prompt: promptText };
    setPayload(pl);
  };

  const responseHandler = (openAIResponse: CompletionResponse) => {
    setPromptText(`${promptText + openAIResponse.choices[0].text}`);
  };

  const handleNavigation = (site: string): void => {
    switch (site) {
      case "github":
        window.open("/", "_blank");
        break;
      case "twitter":
        window.open("/", "_blank");
        break;
      case "linkedin":
        window.open(
          "/",
          "_blank"
        );
        break;
    }
  };

  return (

<>
<h1>Asistente</h1>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Container className={classes.logoContainer} maxWidth="sm">
{/*          <img className={classes.logo} src={reactLogo} alt="React logo" />
          <AddIcon />
          <img className={classes.logo} src={openAILogo} alt="OpenAI logo" /> */}
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <TextField
            className={classes.textField}
            label="Pegar su clave de Openai"
            type="password"
            variant="outlined"
            value={apiKey}
            onChange={(e) => changeApiKeyHandler(e)}
          />
          <TextField
            className={classes.textField}
            label="Ingrese el texto de consulta"
            multiline
            rows={10}
            value={promptText}
            onChange={(e) => changePromptHandler(e)}
            variant="outlined"
          />
          <Button
            onClick={() => submitHandler()}
            variant="contained"
            color="primary"
          >
            Listo
          </Button>
          <Typography
            className={classes.disclaimer}
            variant="subtitle2"
            component="h2"
          >
            
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container className={classes.logoContainer} maxWidth="sm">
          <Fab
            onClick={() => handleNavigation("github")}
            color="primary"
            aria-label="github"
          >
            <GitHubIcon />
          </Fab>
          &nbsp;
          <Fab
            onClick={() => handleNavigation("twitter")}
            color="primary"
            aria-label="twitter"
          >
            <TwitterIcon />
          </Fab>
          &nbsp;
          <Fab
            onClick={() => handleNavigation("linkedin")}
            color="primary"
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </Fab>
        </Container>
      </Grid>

      {!!apiKey && !!payload.prompt && (
        <OpenAIAPI
          apiKey={apiKey}
          payload={payload}
          responseHandler={responseHandler}
        />
      )}
    </Grid>

</>
  );
};

export default App;
