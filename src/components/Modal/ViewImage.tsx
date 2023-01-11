import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        maxWidth={900}
        h='auto'
        w='auto'
        bg='transparent'
        p={0}
      >
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            w='auto'
            maxHeight={600}
            h='100%'
          />
        </ModalBody>
        <ModalFooter
          justifyContent='flex-start'
          bg='pGray.800'
          height='32px'
          borderBottomRadius={5}
          paddingY='8px'
          paddingX='10px'
        >
          <Link
            href={imgUrl}
            isExternal
            color="pGray.50"
            fontSize="sm"
            lineHeight={4}
            fontWeight="normal"
            _focus={{
              outline: 'none',
            }}
            transition="filter .2s"
            _hover={{ filter: 'brightness(0.7)' }}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
