import { StyleSheet, Text, View } from 'react-native'
type currencyBtnProps ={
    flag:string,
    name:string,
}
const CurrencyBtn = ({flag,name}:currencyBtnProps) :JSX.Element=> {
  return (
    <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{flag}</Text>
            <Text style={styles.country}>{name}</Text>
        </View>
  )
}
export default CurrencyBtn
const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})