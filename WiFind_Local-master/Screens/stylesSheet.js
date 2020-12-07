import { StyleSheet } from 'react-native';






export default StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center'
    },

    input: {
        textAlign: 'center',
        fontSize: 20,
        height: 48,
        width: 250,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#59b5f9',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 10,
    },

    button: {
        backgroundColor: '#59b5f9',
        marginBottom: 10,
        borderRadius: 10,
        height: 48,
        width: 250,
        alignItems: "center",
        justifyContent: 'center'
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold"
    },

    centerButton: {
        width: '100%',
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    error : {
        position: "absolute",
        bottom: -30,
        alignSelf: "center",
        color: 'red',
        textAlign: 'center'
    }

});