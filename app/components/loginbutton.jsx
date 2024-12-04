import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
const LoginButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button className="bg-green-500 px-8 py-1 text-sm text-white rounded-full hover:bg-green-800 
        shadow-2xl" onPress={onOpen}>ورود / ثبت نام</Button>
            <Modal size={"sm"} backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">ورود / ثبت نام</ModalHeader>
                            <ModalBody>
                                <Input
                                    placeholder="موبایل"
                                    variant="underlined" />
                            </ModalBody>
                            <ModalFooter className="m-auto">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    انصراف
                                </Button>
                                <Button color="success" variant="light" onPress={onClose}>
                                    ثبت نام
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default LoginButton