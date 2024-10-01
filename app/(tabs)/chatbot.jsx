import React, { useState, useEffect } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";

const GeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showStopIcon, setShowStopIcon] = useState(false);

  const API_KEY = "AIzaSyB6BHx3BOlbsPhKPYQjJZ5hmj2dz_peknk";

  useEffect(() => {
    const startChat = async () => {
      try {
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt =
          "Hallo, saya ingin konsultasi dengan anda, anggap anda adalah dokter yang sedang berhadapan dengan pasien. anda akan menjawab pertanyaan apaun tentang medis dan kesehata, jangan menjawab hal diluar topik tersebut. jawab dengan bahasa indonesia yang ramah. setelah saya memberikan pesan ini, anda akan menjawan : Hallo, Selamat datang";
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        console.log(text);
        // showMessage({
        //   message:
        //     "Hallo, saya ingin konsultasi dengan anda, anggap anda adalah dokter yang sedang berhadapan dengan pasien. anda akan menjawab pertanyaan apaun tentang medis dan kesehata, jangan menjawab hal diluar topik tersebut. jawab dengan bahasa indonesia yang ramah. setelah saya memberikan pesan ini, anda akan menjawan : Hallo, Selamat datang",
        //   description: text,
        //   type: "info",
        //   icon: "info",
        //   duration: 2000,
        // });

        setMessages([{ text, user: false }]);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };
    startChat();
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return; // Prevent empty messages from being sent

    setLoading(true);
    const userMessage = { text: userInput, user: true };

    // Update messages with user input
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Constructing the prompt with context from previous messages
    let context = updatedMessages
      .map((message) =>
        message.user ? `User: ${message.text}` : `Bot: ${message.text}`
      )
      .join("\n");

    // Adding the user's new message to the prompt
    const prompt = `${context}\nUser: ${userInput}\nBot: (jawab dengan singkat dan bersahabat dan anda adalah dokter)`;

    try {
      // Generate response using the GoogleGenerativeAI model
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = result.response;
      const botText = response.text().trim(); // Menghapus spasi di awal dan akhir

      // Periksa jika botText sudah ada dalam messages
      const isDuplicate = updatedMessages.some((msg) => msg.text === botText);

      // Update messages dengan bot response hanya jika bukan duplikat
      if (!isDuplicate && botText) {
        setMessages([...updatedMessages, { text: botText, user: false }]);
      }

      // Text to speech if necessary
      if (botText && !isSpeaking) {
        Speech.speak(botText);
        setIsSpeaking(true);
        setShowStopIcon(true);
      }
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  const toggleSpeech = () => {
    console.log("isSpeaking", isSpeaking);
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && !lastMessage.user) {
        Speech.speak(lastMessage.text);
        setIsSpeaking(true);
      }
    }
  };

  const clearMessages = () => {
    setMessages([]);
    setIsSpeaking(false);
    setShowStopIcon(false);
  };

  const renderMessage = ({ item }) => {
    const messageLines = item.text.split("\n");
    const cleanText = item.text.replace(/\*/g, "").trim();

    return (
      <View
        style={[
          styles.messageContainer,
          item.user ? styles.userMessageContainer : styles.botMessageContainer,
        ]}
      >
        {messageLines.map((line, index) => (
          <Text
            key={index}
            style={[
              styles.messageText,
              item.user ? styles.userMessageText : styles.botMessageText,
            ]}
          >
            {cleanText}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#192126",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24, // Increases text size
            fontWeight: "bold",
            color: "white", // Makes the text bold for more emphasis
          }}
        >
          AI MENTOR
        </Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => `${item.text}-${index}`}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message"
          onChangeText={setUserInput}
          value={userInput}
          onSubmitEditing={sendMessage}
          style={styles.input}
          placeholderTextColor="#fff"
        />
        {showStopIcon && (
          <TouchableOpacity style={styles.stopIcon} onPress={clearMessages}>
            <Entypo name="controller-stop" size={24} color="white" />
          </TouchableOpacity>
        )}
        {loading && <ActivityIndicator size="large" color="black" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffff", marginTop: 50 },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "black",
    color: "white",
  },
  messageText: { fontSize: 16 },
  userMessage: { textAlign: "right", color: "#00f" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 10,
    height: 50,
    color: "white",
  },
  micIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  stopIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
  },
  iconStyle: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffff",
    marginTop: 50,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    maxWidth: "75%",
  },
  botMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#192126",
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    marginLeft: 20,
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#BBF246",
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 20,
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  userMessageText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 10,
    height: 50,
    color: "white",
  },
  micIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  stopIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
  },
});

export default GeminiChat;
