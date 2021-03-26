import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    title1: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 34
    },
    title2: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 36
    },
    welcome: {
        backgroundColor: '#768eaf',
        color: 'white',
        padding: '150px 60px 360px',
        marginTop: 112,
        '& h4': {
            marginBottom: 10
        }
    },
    containerImage: {
        display: 'flex',
    },
    benefits: {
      backgroundColor: '#eeeeee',
      padding: '0 60px'
    },
    paperBenefits: {
        padding: '128px 108px 0'
    },
    video: {
        marginTop: 26
    },
    subtitle1: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 100
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 26,
    },
    presentation: {
        color: 'white',
        padding: '100px 0 70px',
        backgroundColor: '#305395',
    },
    regions: {
        padding: '60px 0 50px',
        '& h4': {
            marginBottom: 50
        }
    },
    listRegions: {
        textTransform: 'uppercase',
        marginTop: 50
    },
    southeast: {
        '& > span': {
            backgroundColor: '#305395',
        }
    },
    north: {
        '& > span': {
            backgroundColor: '#2c5499',
        }
    },
    northEast: {
        '& > span': {
            backgroundColor: '#2e76b1',
        }
    },
    south: {
        '& > span': {
            backgroundColor: '#8fa9da',
        }
    },
    midwest: {
        '& > span': {
            backgroundColor: '#8397b0',
        }
    },
    circle: {
        height: 35,
        width: 35,
        backgroundColor: '#203864',
        borderRadius: '50%',
        marginRight: 20
    },
    numbers: {
        backgroundColor: '#203864',
        padding: '60px 0 50px',
        color: 'white',
        '& h4': {
            marginBottom: 50
        }
    },
    number: {
        fontWeight: 'bold',
        fontSize: 30
    },
    descriptionNumber: {
        fontSize: 14,
    },
    solutions: {
        backgroundColor: '#d0e3fd',
        padding: '60px 0 50px',
        '& h5': {
            marginBottom: 50
        }
    },
    solution: {
        borderRadius: 15,
        height: 320,
        width: 300,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px 30px 50px',
        '& h6': {
            textTransform: 'uppercase',
            fontSize: 12,
            color: '#203864',
            textAlign: 'center',
            marginBottom: 25,
            minHeight: 36,
            fontWeight: 'bold',
        },
        '& p': {
            fontSize: 12
        }
    },
    clients: {
        backgroundColor: '#eaf1fa',
        padding: '60px 0 50px',
    },
    client: {
        height: 148,
        width: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55,
        borderRadius: 15
    },
    doubts: {
        padding: '60px 0',
        '& h5': {
            marginBottom: 55
        }
    },
  }));

  export default styles