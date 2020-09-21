import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListeItem from './ListeItem';

const Liste = props => {
	const { people, onPressItem } = props;
	return(
		<FlatList 
		data={people}
		keyExtractor={(item, index) => index.toString()}
		renderItem={({ item }) => (
				<ListeItem 
	        		person={item} 
	        		navigateToPeopleDetail={onPressItem}
	        	/> 
			)}
		/>
	);
}

const style = StyleSheet.create ({
	container: {
		backgroundColor: '#e2f9ff',
	},
});

export default Liste;