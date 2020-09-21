/*Example of Expandable ListView in React Native*/
import React, { Component, useState } from 'react';
//import react in our project
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
//import basic react native components
import { openDatabase } from 'react-native-sqlite-storage';
import { SafeAreaView, StatusBar, } from 'react-native';
import { Picker } from '@react-native-community/picker';

import Liste from './Liste';


//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'test50.db', createFromLocation: 1 });
//var db = openDatabase({name: "test50.db", createFromLocation: "~test50.db"});


export default class ListeStructures extends React.Component {
    constructor(props) {
        super();
        this.state = {
            FlatListItems: [],
            buttonText: 'Plus...',
            userData: '',
            input_name: '',
        };

        db.transaction(tx => {
            tx.executeSql("SELECT * FROM test50", [], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                this.setState({
                    FlatListItems: temp,
                });
            });
        });
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={style.container}>
                    <Liste
                        people={this.state.FlatListItems}
                        onPressItem={(pageparams) => {
                            this.props.navigation.navigate('PeopleDetail', pageparams);
                        }}
                    />
                </SafeAreaView>
            </>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 3,
    },
    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    button: {
        padding: 10,
        backgroundColor: '#FF9800',
        //backgroundColor: '#c2185b',
    },
    buttonText: {
        color: '#FFF',
    },

    container2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 5,
    },
    picker2: {
        width: 200,
        height: 40,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,

    },
    pickerItem: {
        color: 'red'
    },
    button: {
        justifyContent: 'flex-start',
    },
    pickerTexte: {
        textAlign: 'center',
        width: 60,
        height: 40,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
    },
    container3: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginTop: 5,
    },
    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    button2: {
        padding: 10,
        backgroundColor: '#FF9800',
        //backgroundColor: '#c2185b',
    },
    collapsibleItem: {
        //borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#CCC',
        padding: 5,
    },
    buttonText: {
        color: '#FFF',
    },
});


/* 
//PICKER GEANT PAR CATEGORIES
   <Picker
                        style={[style.picker2]} itemStyle={style.pickerItem}
                        selectedValue={this.state.precisez}
                        onValueChange={(itemValue) => this.setState({ precisez: itemValue })}

                    >
                        <Picker.Item label="Médecin Généraliste" value="medG" />
                        <Picker.Item label="Soins Infirmiers" value="Soinsinfirmiers" />
                        <Picker.Item label="Depistage" value="Depistage" />
                        <Picker.Item label="Sérologie,(VIH, Hépatite..)" value="Depistage" />
                        <Picker.Item label="Dentaire" value="Dentaire" />
                        <Picker.Item label="Laboratoire" value="Laboratoire" />
                        <Picker.Item label="Imagerie Médicale" value="imagerieMed" />
                        <Picker.Item label="Psychologique" value="Psychologue" />
                        <Picker.Item label="Santé Mentale" value="Psychiatrique" />
                        <Picker.Item label="Traitement Psychiatrique" value="TraitementPsychiatrique" />
                        <Picker.Item label="Addictions" value="ConsultationAddictologie" />
                        <Picker.Item label="Delivrance Subutex" value="Subutex" />
                        <Picker.Item label="Delivrance Methadone" value="Methadone" />
                        <Picker.Item label="Delivrance Psychotropes" value="Psychotropes" />
                        <Picker.Item label="Traitement Addictions" value="DelivranceTraitement1" />
                        <Picker.Item label="Consultations Sociales" value="ConsultSociales" />
                        <Picker.Item label="Socio-Educatif" value="SocioEducatif" />
                        <Picker.Item label="Domiciliation" value="Domiciliation" />
                        <Picker.Item label="Juridique" value="Juridique" />
                        <Picker.Item label="Hebergement" value="Hebergement" />
                        <Picker.Item label="Douche" value="Douche" />
                        <Picker.Item label="Repas" value="Repas" />
                        <Picker.Item label="WC" value="WC" />
                        <Picker.Item label="Laverie" value="Laverie" />
                        <Picker.Item label="Bagagerie" value="Bagagerie" />
                        <Picker.Item label="Chenil" value="Chenil" />
                        <Picker.Item label="Emploi" value="Emploi" />
                        
                    </Picker>

                        */