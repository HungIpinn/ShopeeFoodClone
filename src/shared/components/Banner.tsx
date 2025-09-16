import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { getBanner } from '@/Redux/Slices/Banner/bannerThunk';

interface IProps {
    cateId?:number,
    positionId:number
}

const Banner = (props:IProps) => {
    const {cateId,positionId} = props
    const dispatch = useAppDispatch();
    const authData = useAppSelector((state) => state.auth);
    
    useEffect(() => {
        dispatch(getBanner({ placeid: positionId, categoryId: cateId??0}));
    }, [])
    

  return (
    <View>
      <Text>Banner</Text>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})