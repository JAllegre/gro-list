import {SafeAreaView, StyleSheet, View} from "react-native";
import ItemList from './ItemList'
import React, {useEffect} from "react";
import Constants from "expo-constants";
import {connect} from "react-redux";
import {fetchAllItems} from "./actions";
import Header from "./Header";

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
       // flex: 1,
        marginTop: Constants.statusBarHeight,
        marginLeft: 10
    }
});

const MainView = ({fetchData} : {fetchData:Function}) => {
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={styles.mainView}>
            <Header/>
            <ItemList />
        </View>
    );
}
const mapDispatchToProps = (dispatch: Function) => ({
    fetchData: () => {
        dispatch(fetchAllItems());
    },
});
export default connect(
    null,
    mapDispatchToProps
)(MainView);