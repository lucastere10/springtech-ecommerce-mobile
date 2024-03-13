import { Text } from "@gluestack-ui/themed";
import { Box, Button } from "@gluestack-ui/themed";
import { useAuth } from "../../contexts/AuthContext";

export default function Perfil(){
    const {signOut} = useAuth()

    return(
        <Box>
            <Button onPress={signOut}>
                <Text>SignOut</Text>
            </Button>
        </Box>
    )
}