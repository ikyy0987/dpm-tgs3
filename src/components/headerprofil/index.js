import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile.png")}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>Zacky Alvianza</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>UIR</Text>
          <Text style={styles.labelText}>DURI</Text>
        </View>
      </View>
      <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
        <Text style={buttonStyles.grayOutlinedButtonText}>Edit profil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#FFD700", 
    backgroundColor: "#FFFFFF", 
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    margin: 15,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#FFD700", 
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FFD700", 
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF", 
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
    width: 80,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFD700", 
  },
  labelText: {
    color: "#FFD700", 
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
