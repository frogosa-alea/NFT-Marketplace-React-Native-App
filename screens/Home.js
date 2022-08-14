import React, { useState, useEffect} from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { options, fetchData } from '../utils/fetchData';

import { COLORS, NFTData, SIZES, assets, SHADOWS} from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar, RectButton } from '../components'
import AssetCard from '../components/AssetCard';
const Home = () => {
    const [nftData, setNftData] = useState(NFTData);
    const [nftApiData, setNftApiData] = useState([]);

    useEffect(() => {
        const fetchNFTData = async() => {
          const data = await fetchData('https://opensea13.p.rapidapi.com/assets',options);
          setNftApiData(data.assets)
        }
        fetchNFTData();
    }, [])

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
    const handleLoadMore = () => {
        console.log('loadMore')
    };
  return (
    <SafeAreaView style={{ flex: 1}}>
        <FocusedStatusBar background={COLORS.primary}/>
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0}}>
                {nftApiData &&
                    <FlatList
                        onEndReached={handleLoadMore}
                        keyExtractor={(item) => item.id}
                        data={nftApiData}
                        showsVerticalScrollIndicator={false}
                        // renderItem={({item}) => <NFTCard data={item} />}
                        renderItem={({item}) => <AssetCard data={item} />}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                    />
                }
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
                <View style={{ flex: 1, backgroundColor: "#ECCD61"}} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home