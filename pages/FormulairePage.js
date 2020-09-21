import React from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import Liste from './Liste';
import Mybutton from './components/Mybutton';
import { Picker } from '@react-native-community/picker';


var db = openDatabase({ name: 'test50.db', createFromLocation: 1 });

export default class PeoplePage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            FlatListItems: [],
            buttonText: 'Plus...',
            userData: '',
            besoin: 'Somatique',
            precisez: 'MedG',
            sexe: 'M',
            input_age: '18',
        };
    }

    searchUser = () => {
        const { precisez } = this.state;
        const { sexe } = this.state;
        const { input_age } = this.state;

        console.log(this.state.input_age);
        let two = '%';
        //let joined = two + input_name2 + two;
        console.log(input_age);
        db.transaction(tx => {
            tx.executeSql(" SELECT * FROM test50 WHERE " + precisez + " NOT NULL AND age_max >= " + input_age + " AND age_min <= " + input_age + " AND sexe ISNULL OR " + precisez + " NOT NULL AND age_max >= " + input_age + " AND age_min <= " + input_age + " AND sexe = '" + sexe + "' ", [], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                this.setState({
                    FlatListItems: temp,
                });
            });
        });

    };

    AffichageCondionelAge(age_max2, age_min2) {
        if (age_max2 == 999 && age_min2 == 0) {
            return <Text style={style.deepVoice}>Pas de restrictions sur l'âge</Text>
        }
        else if (age_min2 == 0) {
            return <Text style={style.deepVoice}>Age max : {age_max2}</Text>
        }
        else if (age_max2 == 999) {
            return <Text style={style.deepVoice}>Age min : {age_min2}</Text>
        }
        else {
            return <View><Text style={style.deepVoice}>Age min : {age_min2}</Text>
                <Text style={style.deepVoice}>Age max : {age_max2}</Text>
            </View>
        }
    }

    SanteOuSocial(besoin) {
        if (besoin == 'Somatique') {
            return (
                <View style={style.container2}>
                    <Text style={style.title}>Précisez :</Text>
                    <Picker
                        style={[style.picker]} itemStyle={style.pickerItem}
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

                    </Picker>
                </View>
            )
        }
        if (besoin == 'Santé Mentale') {
            return (

                <View style={style.container2}>
                    <Text style={style.title}>Précisez :</Text>
                    <Picker
                        style={[style.picker]} itemStyle={style.pickerItem}
                        selectedValue={this.state.precisez}
                        onValueChange={(itemValue) => this.setState({ precisez: itemValue })}

                    >
                        <Picker.Item label="Psychologue" value="Psychologue" />
                        <Picker.Item label="Psychiatre" value="Psychiatrique" />
                        <Picker.Item label="Traitement Psychiatrique" value="TraitementPsychiatrique" />
                    </Picker>
                </View>
            )
        }
        if (besoin == 'Social') {
            return (
                <View style={style.container2}>
                    <Text style={style.title}>Précisez :</Text>
                    <Picker
                        style={[style.picker]} itemStyle={style.pickerItem}
                        selectedValue={this.state.precisez}
                        onValueChange={(itemValue) => this.setState({ precisez: itemValue })}
                    >
                        <Picker.Item label="Consultations Sociales" value="ConsultSociales" />
                        <Picker.Item label="Socio-Educatif" value="SocioEducatif" />
                        <Picker.Item label="Domiciliation" value="Domiciliation" />
                        <Picker.Item label="Juridique" value="Juridique" />

                    </Picker>
                </View>
            )
        }
        if (besoin == 'Addictions') {
            return (
                <View style={style.container2}>
                    <Text style={style.title}>Précisez :</Text>
                    <Picker
                        style={[style.picker]} itemStyle={style.pickerItem}
                        selectedValue={this.state.precisez}
                        onValueChange={(itemValue) => this.setState({ precisez: itemValue })}
                    >
                        <Picker.Item label="Consultations Addictologie" value="ConsultationAddictologie" />
                        <Picker.Item label="Traitement Addictions" value="DelivranceTraitement1" />
                        <Picker.Item label="Delivrance Subutex" value="Subutex" />  
                        <Picker.Item label="Delivrance Methadone" value="Methadone" />
                        <Picker.Item label="Delivrance Psychotropes" value="Psychotropes" />

                    </Picker>
                </View>
            )
        }
        if (besoin == 'Urgences Sociales') {
            return (
                <View style={style.container2}>
                    <Text style={style.title}>Précisez :</Text>
                    <Picker
                        style={[style.picker]} itemStyle={style.pickerItem}
                        selectedValue={this.state.precisez}
                        onValueChange={(itemValue) => this.setState({ precisez: itemValue })}

                    >
                        <Picker.Item label="Hebergement" value="Hebergement" />
                        <Picker.Item label="Douche" value="Douche" />
                        <Picker.Item label="Repas" value="Repas" />
                        <Picker.Item label="WC" value="WC" />
                        <Picker.Item label="Laverie" value="Laverie" />
                        <Picker.Item label="Bagagerie" value="Bagagerie" />
                        <Picker.Item label="Chenil" value="Chenil" />
                        <Picker.Item label="Emploi" value="Emploi" />

                    </Picker>
                </View>
            )
        }
    }

    render() {
        return (
            <>
                <ScrollView style={style.scrollview_container}>

                    <View style={style.container}>
                        <View style={style.container2}>
                            <Text style={style.title}>Besoin :</Text>
                            <Picker
                                style={[style.picker]} itemStyle={style.pickerItem}
                                selectedValue={this.state.besoin}
                                onValueChange={(itemValue) => this.setState({ besoin: itemValue })}
                            >
                                <Picker.Item label="Somatique" value="Somatique" />
                                <Picker.Item label="Santé Mentale" value="Santé Mentale" />
                                <Picker.Item label="Addictions" value="Addictions" />
                                <Picker.Item label="Social" value="Social" />
                                <Picker.Item label="Urgences Sociales" value="Urgences Sociales" />
                            </Picker>
                        </View>

                        <View>
                            {this.SanteOuSocial(this.state.besoin)}
                        </View>

                        <View style={style.container2}>
                            <Text style={style.title}>Sexe :</Text>
                            <Picker
                                style={[style.picker]} itemStyle={style.pickerItem}
                                selectedValue={this.state.sexe}
                                onValueChange={(itemValue) => this.setState({ sexe: itemValue })}
                            >
                                <Picker.Item label="Homme" value="M" />
                                <Picker.Item label="Femme" value="F" />
                            </Picker>
                        </View>

                        <View style={style.container2}>
                            <Text style={style.title} >Age :</Text>
                            <TextInput
                                style={[style.pickerTexte]}
                                placeholder="18+"
                                onChangeText={input_age => this.setState({ input_age })}
                                placeholderStyle={style.title}
                            />
                        </View>
                        <Mybutton style={style.button}
                            title="Rechercher"
                            customClick={this.searchUser.bind(this)}
                        />

                    </View>
                    <Liste
                        people={this.state.FlatListItems}
                        onPressItem={(pageparams) => {
                            this.props.navigation.navigate('PeopleDetail', pageparams);
                        }}
                    />


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
        marginBottom: 0,
        padding: 20,
        backgroundColor: 'white',
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
    picker: {
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
