import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';

export default class PeoplePage extends React.Component {


    render() {
        return (
            <>
                <ScrollView style={style.container}>
                    <Text style={style.title}> ASSAB </Text>
                    <Text style={[style.cell, style.content]}>Projet de mise en réseau en faveur de l'accès aux droits et de l’accès aux soins et la continuité des soins pour les personnes sans abri à marseille. </Text>
                    <Text style={style.title}>  </Text>

                    <Text style={style.title}>Onglet STRUCTURES </Text>
                    <Text style={[style.cell, style.content]}>Liste des différentes structures.</Text>
                    <Text>   </Text>

                    <Text style={style.title}>Onglet RECHERCHE </Text>
                    <Text style={[style.cell, style.content]}>Effectuer une recherche en fonction d'un profil et d'un besoin.</Text>

                </ScrollView >
            </>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 10,
        marginRight: 5,
    },
    cell: {
		fontSize: 15,
	},
    label: {
        fontWeight: 'bold',
        flex: 3,
        fontSize: 20,

    },
    content: {
        //textAlign: 'right',
        flex: 7
    },

});
