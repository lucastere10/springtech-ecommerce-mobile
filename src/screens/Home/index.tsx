import { Box, Button, ScrollView, Text } from "@gluestack-ui/themed";
import { HomeCard } from "../../components/Cards/HomeCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../service/api/api";
import { Input } from "@gluestack-ui/themed";

export default function Home() {
  return <Container />;
};

const Container = () => {
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

  return(
    <Box>
      <Button onPress={() => {console.log(produtos.map((produto, index) => {console.log(produto)}))}}>
        <Text>Debug</Text>
      </Button>
      {produtos.map((produto, index) => (
        <HomeCard key={index} produto={produto} />
      ))}
    </Box>
  )
}
