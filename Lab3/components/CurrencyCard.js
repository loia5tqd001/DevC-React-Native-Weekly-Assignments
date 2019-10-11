import React, { useGlobal } from "reactn"
import { View, TextInput, StyleSheet, Text, Platform } from "react-native"
import PickerItem from "/components/PickerItem"
import { listCurrencies } from "/data/data"
import colors from "/constants/colors"

export const InputCurrenyCard = ({ currency, setCurrency }) => {
  return (
    <View style={styles.container}>
      <PickerItem
        currency={currency.info.code}
        setCurrency={newCurrencyCode =>
          setCurrency({
            amount: currency.amount,
            info: listCurrencies[newCurrencyCode]
          })
        }
      />
      <View style={styles.currency}>
        <TextInput
          autoFocus
          style={styles.amount}
          keyboardType="number-pad"
          onChangeText={newAmount =>
            setCurrency({
              amount: newAmount,
              info: currency.info
            })
          }
          value={currency.amount}
          selectionColor={colors.TurquoiseBlue}
        />
        <Text style={styles.symbol}>{currency.info.symbol_native}</Text>
      </View>
    </View>
  )
}

export const CurrencyCard = ({ currency, setCurrency }) => {
  const formatNumber = (amount) => {
    if (Platform.OS === "ios") {
      return new Intl.NumberFormat().format(amount)
    }

    // 1. Android doesn't have Intl: https://github.com/moment/luxon/issues/51
    // 2. Format number by String.replace: https://blog.abelotech.com/posts/number-currency-formatting-javascript/
    // == Explain the regex:
    // i.          \d{3}           : match three digits
    // ii.        (\d{3})+         : match multile of three (3,6,9,...) digits
    // iii.       (\d{3})+(?!\d)   : match 3x digits, count from the right ('1234567' will match '234567' instead of '123456')
    // iv.     (?=(\d{3})+(?!\d))  : followed by 3x digits, count from the right
    // v.  (\d)(?=(\d{3})+(?!\d))  : a digit followed by 3x digits, count from the right
    // vi./(\d)(?=(\d{3})+(?!\d))/g: all digits followed by 3x digits count from the right
    // More on regex here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    // More on String.replace here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  return (
    <View style={styles.container}>
      <PickerItem
        currency={currency.info.code}
        setCurrency={newCurrencyCode =>
          setCurrency({
            amount: currency.amount,
            info: listCurrencies[newCurrencyCode]
          })
        }
      />
      <View style={styles.currency}>
        <Text style={styles.amount} numberOfLines={1}>
          { formatNumber(currency.amount) }
        </Text>
        <Text style={styles.symbol} numberOfLines={1}>
          {currency.info.symbol_native}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  currency: {
    flexDirection: "row",
    flexBasis: 180
  },
  amount: {
    flexBasis: 150,
    fontSize: 23,
    marginHorizontal: 10,
    textAlign: "right",
    color: colors.Paradiso
  },
  symbol: {
    fontSize: 16,
    textAlign: "center",
    color: colors.TurquoiseBlue
  }
})
