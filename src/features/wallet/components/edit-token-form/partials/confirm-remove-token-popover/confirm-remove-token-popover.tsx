import { useRef } from 'react'

import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react'

type ConfirmRemoveTokenPopoverProps = {
  onConfirm: () => void
}

export const ConfirmRemoveTokenPopover = ({
  onConfirm,
}: ConfirmRemoveTokenPopoverProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const initialFocusRef = useRef(null)

  return (
    <Popover
      isOpen={isOpen}
      placement="top"
      initialFocusRef={initialFocusRef}
      arrowShadowColor="rgba(255, 255, 255, 0.5)"
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button type="button" variant="danger" w="32">
          Remove
        </Button>
      </PopoverTrigger>

      <PopoverContent bg="gray.700" borderColor="whiteAlpha.400">
        <PopoverHeader fontWeight="semibold" borderColor="whiteAlpha.400">
          Confirmation
        </PopoverHeader>

        <PopoverArrow bg="gray.700" />
        <PopoverCloseButton />

        <PopoverBody>Are you sure you want to remove this token?</PopoverBody>

        <PopoverFooter
          d="flex"
          justifyContent="flex-end"
          borderColor="whiteAlpha.400"
        >
          <ButtonGroup size="sm">
            <Button
              colorScheme="whiteAlpha"
              ref={initialFocusRef}
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button colorScheme="red" onClick={onConfirm}>
              Confirm
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}
