import { Box, Button, ScrollView, Text } from "@gluestack-ui/themed";
import { HomeCard } from "../../components/Cards/HomeCard";
import { useEffect, useState } from "react";
import { fetchProducts, fetchUserData } from "../../service/api/api";
import { Alert } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  return <Container />;
};

const Container = () => {
  const { signOut } = useAuth()

  const getUser = async () => {
      const { data, error } = await fetchUserData();
      if (error === 403) {
        Alert.alert(
          "Sessão Expirada",
          "Sua Sessão expirou. Favor fazer login novamente.",
          [
            {
              text: "OK", onPress: () => {signOut()}
            }
          ]
        );
      }
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <Box flex={1} backgroundColor="$white">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          mt={48}
          alignItems="center"
        >
          <Text>PAGINA PRINCIPAL</Text>
        </Box>
        <Box>
          <CardsContainer />
        </Box>
      </ScrollView>
    </Box>
  );
};

const CardsContainer = () => {
  const [produtos, setProdutos] = useState([])

  const getProducts = async () => {
    const { data, error } = await fetchProducts();
    setProdutos(data.content);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      <Button onPress={() => { console.log(produtos.map((produto, index) => { console.log(produto) })) }}>
        <Text>Debug</Text>
      </Button>
      {produtos.map((produto, index) => (
        <HomeCard key={index} produto={produto} />
      ))}
    </Box>
  )
}
