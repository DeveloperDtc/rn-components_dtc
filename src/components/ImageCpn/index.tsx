import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { Icons } from '../../themes'

interface OwnProps {
  imageUrl?: string
  image?: any
  imgStyle?: any
  iconName?: string
  colorIcon?: string
  sizeIcon?: number
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
  typeVectorIcon?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
}

type Props = OwnProps

export const ImageCpn: React.FunctionComponent<Props> = (props) => {
  const {
    imageUrl,
    imgStyle,
    colorIcon,
    iconName,
    sizeIcon,
    image,
    resizeMode = 'contain',
    typeVectorIcon = 'AntDesign',
  } = props

  return iconName ? (
    <View style={styles.container}>
      {typeVectorIcon === 'AntDesign' && (
        <Icons.AntDesign
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Entypo' && (
        <Icons.Entypo
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'EvilIcons' && (
        <Icons.EvilIcons
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Feather' && (
        <Icons.Feather
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'FontAwesome' && (
        <Icons.FontAwesome
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'FontAwesome5' && (
        <Icons.FontAwesome5
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Fontisto' && (
        <Icons.Fontisto
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Foundation' && (
        <Icons.Foundation
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Ionicons' && (
        <Icons.Ionicons
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'MaterialCommunityIcons' && (
        <Icons.MaterialCommunityIcons
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'MaterialIcons' && (
        <Icons.MaterialIcons
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Octicons' && (
        <Icons.Octicons
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'SimpleLineIcons' && (
        <Icons.SimpleLineIcons
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
      {typeVectorIcon === 'Zocial' && (
        <Icons.Zocial
          name={iconName!}
          size={sizeIcon}
          color={colorIcon}
          style={[imgStyle]}
        />
      )}
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl } || image}
        style={[imgStyle]}
        resizeMode={resizeMode}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
