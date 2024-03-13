import { ToastDescription, ToastTitle, VStack,  useToast, Toast } from "@gluestack-ui/themed";

export default function BaseToast({titulo, mensagem}:{titulo:string, mensagem:string}) {
    const toast = useToast();
    return (
        toast.show({
            placement: "top",
            render: ({ id }) => {
                const toastId = "toast-" + id
                return (
                    <Toast nativeID={toastId} action="attention" variant="solid">
                        <VStack space="xs">
                            <ToastTitle>{titulo}</ToastTitle>
                            <ToastDescription>
                                {mensagem}
                            </ToastDescription>
                        </VStack>
                    </Toast>
                )
            }
        })
    )
};
