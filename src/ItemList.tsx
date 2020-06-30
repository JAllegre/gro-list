import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, VirtualizedList} from 'react-native';
import {connect} from "react-redux";
import {GroListItem, GroList, GroState} from "./index";

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

interface MyItem {
    key: string;
    title: string;
}



// const getItem = (data, index) => {
//     return {
//         key: Math.random().toString(12).substring(0),
//         title: `Item ${index+1}`
//     }
// }
//
// const getItemCount = (data) => {
//     return 50;
// }
interface ItemLineProps {
    title: string;
}

const ItemLine = ({title}: ItemLineProps) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const ItemList = ( {items} : { items: GroList } ) => {
    console.info('ju>>>>>ItemList(50)>ItemList>', items);
    return (
        <SafeAreaView>
            <VirtualizedList
                data={items}
                // initialNumToRender={4}
                renderItem={({item}) => <ItemLine title={item.title}/>}
                keyExtractor={(item: MyItem) => item.key}
                getItemCount={() => items.length}
                getItem={(data: any, index: number) => items[index]}
            />
        </SafeAreaView>
    );
}


const mapStateToProps = (state: GroState) => {
    console.info('ju>>>>>ItemList(66)>mapStateToProps>', state.GroList);
    return {
        items: state.GroList,
    };
};

export default connect(
    mapStateToProps,
    null
)(ItemList);
