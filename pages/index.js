import { Button, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { 
    CasinoOutlined, 
    CreateNewFolderOutlined, 
    DescriptionOutlined, 
    FindInPageOutlined, 
    GavelOutlined, 
    ListOutlined, 
    PersonOutlineOutlined } from '@material-ui/icons';
import Header from '../src/layouts/Header'
import Footer from '../src/layouts/Footer'
import styles from './styles'

export default function Home() {
  const classes = styles();
  return (
    <div>
        <Header />
        <section className={classes.welcome}>
            <Grid container spacing={3}>
                <Grid item sm={7}>
                    <Typography className={classes.title} variant="h4">
                        Acreditamos na inovação <br />
                        para escritórios de advocacia <br />
                        e departamentos jurídicos corporativos
                    </Typography>
                    <Typography paragraph>
                        Através de soluções para potencializar resultados por meio da LEGAL OPERATIONS, <br />
                        com foco em Controladora jurídica e Logística processual e administrativa,
                        utilizando tecnologias inovadoras e alicerçadas em pessoas.
                    </Typography>
                </Grid>
            </Grid>
        </section>
        <section className={classes.benefits}>
            <Paper className={classes.paperBenefits}>
                <Grid spacing={10} container>
                    <Grid item 
                        sm={7}
                        direction="column"
                        justify="center"
                        container
                    >
                        <Typography className={classes.title2} variant="h5">
                            Buscamos proximidade para <br />
                            promover soluções únicas
                        </Typography>
                        <Typography paragraph>
                            Nossas soluções colocam o cliente no centro do negócio, com alta
                            possibilidade de personalização e atendimento especializado para
                            atua nas mais diversas necessidades do processo.
                        </Typography>
                    </Grid>
                    <Grid item sm={5}>
                        <Typography className={classes.containerImage} align="right"> 
                            <img src="notebook.png" />
                        </Typography>
                    </Grid>
                    
                    <Grid item sm={5}>
                        <Typography className={classes.containerImage} align="right"> 
                            <img src="notebook.png" />
                        </Typography>
                    </Grid>
                    <Grid item 
                        sm={7}
                        direction="column"
                        justify="center"
                        container
                    >
                        <Typography className={classes.title2} variant="h5">
                            Buscamos proximidade para <br />
                            promover soluções únicas
                        </Typography>
                        <Typography paragraph>
                            Nossas soluções colocam o cliente no centro do negócio, com alta
                            possibilidade de personalização e atendimento especializado para
                            atua nas mais diversas necessidades do processo.
                        </Typography>
                    </Grid>

                    <Grid item 
                        sm={7}
                        direction="column"
                        justify="center"
                        container
                    >
                        <Typography className={classes.title2} variant="h5">
                            Buscamos proximidade para <br />
                            promover soluções únicas
                        </Typography>
                        <Typography paragraph>
                            Nossas soluções colocam o cliente no centro do negócio, com alta
                            possibilidade de personalização e atendimento especializado para
                            atua nas mais diversas necessidades do processo.
                        </Typography>
                    </Grid>
                    <Grid item sm={5}>
                        <Typography className={classes.containerImage} align="right"> 
                            <img src="notebook.png" />
                        </Typography>
                    </Grid>
                    
                    <Grid item sm={5}>
                        <Typography className={classes.containerImage} align="right"> 
                            <img src="notebook.png" />
                        </Typography>
                    </Grid>
                    <Grid item 
                        sm={7}
                        direction="column"
                        justify="center"
                        container
                    >
                        <Typography className={classes.title2} variant="h5">
                            Buscamos proximidade para <br />
                            promover soluções únicas
                        </Typography>
                        <Typography paragraph>
                            Nossas soluções colocam o cliente no centro do negócio, com alta
                            possibilidade de personalização e atendimento especializado para
                            atua nas mais diversas necessidades do processo.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </section>
        <section className={classes.presentation}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item sm={10}>
                    <Typography className={classes.title1} variant="h5">
                        Controladoria jurídica e Logística processual e administrativa, <br />
                        utilizando tecnologias inovadoras e alicerçadas em pessoas.
                    </Typography>
                </Grid>
                <Grid item sm={10}>
                    <Typography className={classes.subtitle1} variant="subtitle1">
                        O jurify oferece um modelo de negócios para escritórios de advocacia e departamentos 
                        jurídicos corporativos, <br />
                        possuindo um caledárion de inovação constante, com lançamentos 
                        de novos produtos para otimizar a rotina jurídica <br />
                        dos clientes e aumentar a eficiência 
                        em atividades específicas.
                    </Typography>
                </Grid>
                <Grid item sm={10}>
                    <Typography variant="h5">
                        <b>Assista</b> este vídeo para entender em detalhes <br />
                        a <b>revolução</b> que a <b>Jurify</b> trará para <b>sua empresa</b>.
                    </Typography>
                </Grid>
                <Grid item sm={10}>
                    <iframe
                        className={classes.video}
                        width="955"
                        height="530"
                        src="https://www.youtube.com/embed/HF6JVakz2LI?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe> 
                </Grid>
            </Grid>
        </section>
        <section className={classes.numbers}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h4">
                        Nossos números
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    xs={10} 
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={2}>
                        <Typography align="center">
                            <CasinoOutlined style={{fontSize: 80}} />
                        </Typography>
                        <Typography className={classes.number} align="center">
                            9
                        </Typography>
                        <Typography className={classes.descriptionNumber} align="center">
                            novos produtos <br/>
                            lançados
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography align="center">
                            <CasinoOutlined style={{fontSize: 80}} />
                        </Typography>
                        <Typography className={classes.number} align="center">
                            3.400.000
                        </Typography>
                        <Typography className={classes.descriptionNumber} align="center">
                            demandas  <br/>
                            atendidas
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography align="center">
                            <CasinoOutlined style={{fontSize: 80}} />
                        </Typography>
                        <Typography className={classes.number} align="center">
                            125.000
                        </Typography>
                        <Typography className={classes.descriptionNumber} align="center">
                            diligências <br/>
                            realizadas
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography align="center">
                            <CasinoOutlined style={{fontSize: 80}} />
                        </Typography>
                        <Typography className={classes.number} align="center">
                            3.600
                        </Typography>
                        <Typography className={classes.descriptionNumber} align="center">
                            novos advogados <br/>
                            treinados
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography align="center">
                            <CasinoOutlined style={{fontSize: 80}} />
                        </Typography>
                        <Typography className={classes.number} align="center">
                            50.000
                        </Typography>
                        <Typography className={classes.descriptionNumber} align="center">
                            audiências <br/>
                            feitas
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section className={classes.regions}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h4">
                        Regiões atendidas
                    </Typography>
                </Grid>
                <Grid item direction="row" justify="center" xs={8} container>
                    <Grid item sm={6}>
                        <List className={classes.listRegions}>
                            <ListItem className={classes.southeast}>
                                <span className={classes.circle}></span>
                                <ListItemText primary="Sudeste" />
                            </ListItem>
                            <ListItem className={classes.southeast}>
                                <span className={classes.circle}></span>
                                <ListItemText primary="Norte" />
                            </ListItem>
                            <ListItem className={classes.northEast}>
                                <span className={classes.circle}></span>
                                <ListItemText primary="Nordeste" />
                            </ListItem>
                            <ListItem className={classes.south}>
                                <span className={classes.circle}></span>
                                <ListItemText primary="Sul" />
                            </ListItem>
                            <ListItem className={classes.midwest}>
                                <span className={classes.circle}></span>
                                <ListItemText primary="Centro-Oeste" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={6}>
                        <img src="map.png" />
                    </Grid>
                </Grid>
                
            </Grid>
        </section>
        <section className={classes.solutions}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h4">
                        Nossas soluções
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        em controladoria jurídica e logística processual forense e administrativa
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    xs={10} 
                    spacing={5} 
                    container
                >
                    <Grid item sm={4}>
                        <Paper className={classes.solution} elevation={3}>
                            <CreateNewFolderOutlined style={{color:"#203864", fontSize: 100}} />
                            <Typography variant="subtitle2">
                                Cadastramento de <br />
                                novos processos
                            </Typography>
                            <Typography  paragraph>
                                Inserção de dados de novos processos e seus incidentais nos respectivos
                                sistemas do cliente, atendendo às peculiaridades processuais e sistêmicas.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.solution} elevation={3}>
                            <PersonOutlineOutlined style={{color:"#203864", fontSize: 100}} />
                            <Typography variant="subtitle2">
                                Habilitação <br />
                                de patronos
                            </Typography>
                            <Typography  paragraph>
                                Inserção de dados de novos processos e seus incidentais nos respectivos
                                sistemas do cliente, atendendo às peculiaridades processuais e sistêmicas.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.solution} elevation={3}>
                            <DescriptionOutlined style={{color:"#203864", fontSize: 100}} />
                            <Typography variant="subtitle2">
                                Realização de <br />
                                diligências
                            </Typography>
                            <Typography  paragraph>
                                Inserção de dados de novos processos e seus incidentais nos respectivos
                                sistemas do cliente, atendendo às peculiaridades processuais e sistêmicas.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.solution} elevation={3}>
                            <GavelOutlined style={{color:"#203864", fontSize: 100}} />
                            <Typography variant="subtitle2">
                                Realização de audiências presenciais e telepresenciais
                            </Typography>
                            <Typography  paragraph>
                                Inserção de dados de novos processos e seus incidentais nos respectivos
                                sistemas do cliente, atendendo às peculiaridades processuais e sistêmicas.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.solution} elevation={3}>
                            <FindInPageOutlined style={{color:"#203864", fontSize: 100}} />
                            <Typography variant="subtitle2">
                                Leitura, interpretação e <br />
                                lançamento de citações e intimações
                            </Typography>
                            <Typography  paragraph>
                                Inserção de dados de novos processos e seus incidentais nos respectivos
                                sistemas do cliente, atendendo às peculiaridades processuais e sistêmicas.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.solution} elevation={3}>
                            <ListOutlined style={{color:"#203864", fontSize: 100}} />
                            <Typography variant="subtitle2">
                                Protocolos físicos & eletrônicos
                            </Typography>
                            <Typography  paragraph>
                                Inserção de dados de novos processos e seus incidentais nos respectivos
                                sistemas do cliente, atendendo às peculiaridades processuais e sistêmicas.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section className={classes.clients}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h4">
                        Confira alguns clientes satisfeitos
                    </Typography>
                </Grid>
                <Grid item>
                <Paper className={classes.client}>
                    <img src="ferreira-chagas.png" />
                </Paper>
                </Grid>
            </Grid>
        </section>
        <section className={classes.doubts}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h4">
                        Ficou com alguma dúvida?
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        Converse com um especialista do nosso time.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        Quero conversar com um especialista
                    </Button>
                </Grid>
            </Grid>
        </section>
        <Footer />
    </div>
  );
}