import {StyleSheet} from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
  container:
  {
    marginVertical: 20,
  },
  imgstyle:
  {
    height: "70%", width: "70%", alignSelf: "center"
  },
  txtstyle:
  {
    color: colors.blackC,
    fontWeight: "bold", alignSelf: "center",
    marginTop: 10
  },
  namestyle:
  {
    color: colors.blackC,
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "500"
  },
  pricestyle:
  {
    color: colors.redB,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10
  },
  descstyle:
  {
    color: colors.blackC,
    alignSelf: "center",
    marginTop: 10
  }
})