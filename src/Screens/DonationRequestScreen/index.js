import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {donationRequest} from "../../Shared/components/Card/DonationCard/Data";
import DonationCard from "../../Shared/components/Card/DonationCard";

const DonationRequestScreen = () => {
    return (
        <FlatList
            data={donationRequest}
            renderItem={({item}) => <DonationCard item={item} />}/>
    )
};

export default DonationRequestScreen;

const styles = StyleSheet.create({

})