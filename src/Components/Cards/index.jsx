import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
  
const ProductAddToCart = ( {AgregarAlCarrito, data} ) => {
    
    return (
        <Flex p={50}  w='100%' maxW='350px' alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="300px"     
                h="400px"          
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                w="100%"
                >
            <Box h="50%">    
                <Image
                    src={data.image}
                    alt={`Picture of ${data.title}`}
                    roundedTop="lg"
                    m="15px auto" 
                    objectFit="cover"
                    h="100%"
                    
                />
            </Box>    
                <Box p="6">
                    <Box d='flex' alignItems='baseline'>
                        {data.isNew && (
                        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                            New
                        </Badge>
                        )}
                    </Box>
                    <Flex mt='1' justifyContent='space-between' alignContent='center'>
                        <Box
                        fontSize='1xl'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated>
                        {data.title}
                        </Box>
                    </Flex>

                <Flex flexDirection={'column'} w='100%' justifyContent='space-between' alignContent='center'  fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
                   
                    <Box as='span' color={'gray.600'} fontSize='lg'>
                        $  {data.price.toFixed(2)}
                    </Box>

                    <Button
                        px={4}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                        bg: 'blue.500',
                        }}
                        _focus={{
                        bg: 'blue.500',
                        }}
                        
                        onClick= {() => AgregarAlCarrito(data)}>
                        Agregar al carrito
                    </Button>   
                           
                   
                </Flex>
            </Box>
            </Box>
        </Flex>
    );
}

export default ProductAddToCart;