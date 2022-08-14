import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle,  } from './SubInfo';

const AssetCard = ({data}) => {
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.large,
        ...SHADOWS.dark
      }}>
        <View style={{ width: '100%', height: 250 }}>
          <Image
            source={{uri: data.image_url ? data.image_url : data.collection.banner_image_url}}
            resizeMode='cover'
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
            <CircleButton
              imgUrl={assets.heart}
              right={10}
              top={10}
            />
        </View>
        <SubInfo />
        <View style={{ width: '100%', padding: SIZES.font}}>
          <NFTTitle title={data.name} subTitle={data.collection.name} titleSize={SIZES.large} subTitleSize={SIZES.small}/>
          <View
             style={{
              marginTop: SIZES.font,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              text="View Details"
              handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
        </View>
      </View>
  )
}

export default AssetCard