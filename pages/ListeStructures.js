import ListeStructureCadre from './ListeStructureCadre';
import DetailsStructure from './DetailsStructure';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const ListeStructures = createStackNavigator({
    'Main': {
        screen: ListeStructureCadre //Contiens le formulaire
    },
    'PeopleDetail': {
        screen: DetailsStructure,
        navigationOptions: ({ navigation }) => {
            const { nom } = navigation.state.params.person.nom;
            return({
                title: nom,
                headerTitleStyle: {
                    color: 'white',
                }
            });
        }
    }
}, {
    defaultNavigationOptions: {
        title: 'Pessoas',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
            color: 'white',
            //flexGrow: 1,
            textAlign: 'center'
        }
    }
});

const AppContainer = createAppContainer(ListeStructures);
 
export default AppContainer;
