import React, { useState} from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if(!value.length) return setNftData(NFTData);

        const filteredData = NFTData.filter(
            (item) => item.name.toLowerCase().includes(value.toLowerCase())
        );

        if(filteredData.length) {
            setNftData(filteredData);
        } else {
            setNftData(NFTData);
        }

    }
  return (
    <SafeAreaView style={{ flex: 1}}>
        <FocusedStatusBar background={COLORS.primary}/>
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0}}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={nftData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => <NFTCard data={item} />}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                />
            </View>
            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1
            }}>
                <View style={{ height: 300, backgroundColor: COLORS.primary}}/>
                <View style={{ flex: 1, background: COLORS.white}} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home