import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  Text,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, DeleteIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsFillCartFill, BsEmojiFrown } from 'react-icons/bs';
import Logo from '../../Assets/logoAda.svg';


const Links = ['Logo'];
const LinksCentro = ['Inicio', 'Productos', 'Contacto'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const CalcularTotal = (carrito) => carrito.reduce((total, product) => total + product.price * product.cantidad, 0);

const Navbar = ( {carrito, VaciarCarrito, EliminarProducto} ) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const total = CalcularTotal(carrito);


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
        <Flex alignItems={'center'} justifyContent={'center'}>
          <img src={Logo} alt="" width='25px'/>
          <Heading fontSize='lg' ml='5px'  >AdaShop
          </Heading>
        </Flex>  
        <Flex>
            <HStack spacing={2} m='0 auto' >
              <HStack
                as={'nav'}
                spacing={4}
                >
                {LinksCentro.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
        </Flex> 

          <Flex alignItems={'center'} > 
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} mr='7'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>

              <Button  onClick={onOpen} leftIcon={<BsFillCartFill />}>
                  ({carrito.length})
              </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader>Carrito</DrawerHeader>
                <DrawerCloseButton />

                <DrawerBody>
                    {(carrito.length > 0) ? <>
                      {carrito.map(product => {
                      return (
                        
                          <Box key={product.id} mt='5' pb={'5'}  d='flex' wrap='nowrap' flexDir='row' ml='2'>
                            <Flex>
                              <Image src={product.image} w='90px' h='70px'/> 
                            </Flex>
                            <Flex ml='4' flexDir={'column'} >     
                              <p>{product.title}</p>                           
                              <p>${product.price}</p>
                              <p>{product.cantidad} { product.cantidad > 1 ? 'unidades' : 'unidad'} </p>                              
                            </Flex >
                            <Button onClick={() => EliminarProducto(product.id)} color={'red'} leftIcon={<DeleteIcon/>} ></Button> 
                            
                          </Box>
                      
                      )})} 
                    
                    </> : <Text>No hay productos en el carrito{<BsEmojiFrown/>}</Text> } 
                </DrawerBody>

                <DrawerFooter d='flex' flexDirection='column' alignItems='center' justifyContent='center'>   
                  <Button colorScheme='blue' w='100%' rightIcon={<DeleteIcon />} onClick={VaciarCarrito} >Vaciar carrito </Button> 
                  <Text fontSize='4xl'>Total: ${total}</Text> 
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          
          <><Heading  alignItems={'flex-start'} justifyContent={'flex-start'} >
             <img src={Logo} alt=""></img>
            </Heading>
          <Box pb={4} display={{ md: 'none' }} m='0 auto' >
            <Stack as={'nav'} spacing={2} >
              {LinksCentro.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box> </>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;