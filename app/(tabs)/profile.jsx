import { View, Text, Image } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import Bio from "../../components/Bio";
import { ScrollView } from "react-native";
import PhotoProfile from "../../components/PhotoProfile";
import { Colors } from "../../constants/Colors";

const profile = () => {
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PhotoProfile />
        {/* About */}
        <View>
          <Text
            style={{ fontSize: 22, fontFamily: "latoBold", marginBottom: 8 }}
          >
            About Ahmad Uffi
          </Text>
          <View>
            <Bio title={"username"} value={"Ahmad Uffi"} />
            <Bio title={"age"} value={"21"} />
            <Bio title={"gender"} value={"Mele"} />
            <Bio title={"address"} value={"Purwokerto Selatan"} />
            <Bio title={"Goal"} value={"Fat loss"} />
            <Bio title={"Activities"} value={"somewhat active"} />
            <Bio title={"Health"} value={"Healthy"} />
          </View>
        </View>

        <View style={{ display: "flex", gap: 22 }}>
          <View
            style={{
              backgroundColor: Colors.black,
              borderRadius: 12,
              padding: 18,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Image
              source={require("../../assets/images/change.png")}
              style={{ width: 32, height: 32 }}
            />
            <Text
              style={{ color: "white", fontFamily: "latoBold", fontSize: 16 }}
            >
              Change personal info
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.black,
              borderRadius: 12,
              padding: 18,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Image
              source={require("../../assets/images/about.png")}
              style={{ width: 32, height: 32 }}
            />

            <Text
              style={{ color: "white", fontFamily: "latoBold", fontSize: 16 }}
            >
              About This App
            </Text>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default profile;
