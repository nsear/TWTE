import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='flex'>
      <View className='center title'>
        <Text>一个点餐小程序</Text>
      </View>
      <View>
        <View id='frame'>
          <View className='heart left'></View>
          <View className='heart right'></View>
          <View className='heart bottom'></View>
        </View>
      </View>
      <View className='center tips'>
        <Text>施工 ing...</Text>
      </View>
      <View className='center to'>
        <Text>For wanwan.</Text>
        <Text className='heart-red'>❤️</Text>
      </View>
    </View>
  )
}
