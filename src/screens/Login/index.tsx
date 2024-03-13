import { AddIcon, Box, Button, ButtonIcon, ButtonText, Input, InputField, ScrollView, Link, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/authSchema";

export default function Login() {
    return (
        <Container />
    )
}

const Container = () => {
    const navigation = useNavigation()
    const { signIn } = useAuth();

    function handleRouteChangeToRegister() {
        navigation.navigate('register');
    }

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<LoginRequest>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
        try {
            await signIn(data);

        } catch (error: any) {
            console.error(error);
            if (error.response.data.userMessage) {
                Alert.alert(error.response.data.userMessage);
            } else {
                Alert.alert('Falha ao tentar realizar login o usuário!');
            }
        }
    };
    



    return (
        <Box flex={1} backgroundColor="$white" pt={12}>
            <ScrollView
                style={{ height: '100%' }}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Box
                    mt={22}
                    alignItems="center"
                    flex={1}
                    gap={16}
                    px={24}
                >
                    <Text>PAGINA DE LOGIN</Text>
                    <Input variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} >
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            name='login'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    type="text"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder='Digite seu email'
                                />
                            )}
                        />
                    </Input>
                    {errors.login && (
                        <Text alignSelf="flex-start" ml={16} color="red">{errors.login.message}</Text>
                    )}
                    <Input variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} >
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            name='senha'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    type="password"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder='Digite sua senha'
                                />
                            )}
                        />
                    </Input>
                    {errors.senha && (
                        <Text alignSelf="flex-start" ml={16} color="red">{errors.senha.message}</Text>
                    )}

                    <Button size="lg" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} onPress={handleSubmit(onSubmit)}>
                        <ButtonText>Logar</ButtonText>
                        <ButtonIcon as={AddIcon} />
                    </Button>

                    <Box flex={1} flexDirection="row" gap={8}>
                        <Text>Ainda não tem uma conta?</Text>
                        <Link onPress={handleRouteChangeToRegister}>
                            <Text>
                                Cadastrar.
                            </Text>
                        </Link>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    );
};