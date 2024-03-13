import { Box, Button, ButtonIcon, ButtonText, EditIcon, Icon, Input, InputField, Link, ScrollView, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../../service/api/auth";
import { registerSchema } from "../../schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {


    return (
        <Container></Container>
    )
}


const Container = () => {

    const navigation = useNavigation()

    function handleRouteChange() {
        navigation.navigate('login');
    }

    return (
        <Box flex={1} backgroundColor="$white" pt={12}>
            <ScrollView
                style={{ height: '100%' }}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Box
                    mt={36}
                    gap={16}
                    px={24}
                >
                    <Text textAlign="center">PAGINA DE CADASTRO</Text>
                    <RegisterForm />
                    <Box flex={1} flexDirection="row" gap={8} justifyContent="center">
                        <Text>Já tem uma conta?</Text>
                        <Link onPress={handleRouteChange}>
                            <Text>
                                Entre.
                            </Text>
                        </Link>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    );
};

const RegisterForm = () => {

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<RegisterRequest>({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
        await registerUser(data)
    }

    return (
        <Box
            mt={22}
            flex={1}
            gap={6}
            px={24}
        >
            <Input variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} >
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='nome'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            type="text"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder='Digite seu nome'
                        />
                    )}
                />
            </Input>
            {errors.nome && (
                <Text alignSelf="flex-start" ml={16} color="red">{errors.nome.message}</Text>
            )}

            <Input mt={16} variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} >
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

            <Input mt={16} variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} >
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


            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                        selectedValue={value}
                        onValueChange={(itemValue: string) => {
                            onChange(itemValue);
                        }}                    >
                        <SelectTrigger mt={16} variant="rounded" size="lg">
                            <SelectInput placeholder="Selecione o tipo de conta" />
                            <SelectIcon>
                                <Icon />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="Administrador" value="ADMIN" />
                                <SelectItem label="Cliente" value="CLIENTE" />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                )}
                rules={{ required: true }}
                name='role'
            />
            {errors.role && (
                <Text alignSelf="flex-start" ml={16} color="red">{errors.role.message}</Text>
            )}

            <Button alignSelf="center" gap={8} size="lg" variant="solid" action="primary" mt={24} isDisabled={false} isFocusVisible={false} onPress={handleSubmit(onSubmit)}>
                <ButtonText>Registrar</ButtonText>
                <ButtonIcon as={EditIcon} />
            </Button>
        </Box>
    )
};