import { Input, Heading, Flex} from '@chakra-ui/react';


const Shop = ({products, setProductos, setPage}) => {   
   
    const handleOnChange = (event) =>{
        const data = event.target.value;
    
        const listaFiltrada = products.filter((product) => {
            
          return product.title.includes(data);
          
        });
        setProductos(listaFiltrada);
        setPage(1);
    };
    

    return(
        
        <>
        
        <Heading as='h1' size='lg' mt="5" mb="5" ml="5">Productos</Heading>
        <Flex ml='25px' mr='25px'>
            <Input placeholder='Buscar producto por nombre' onChange={handleOnChange} d='flex' justifyContent={'center'}/>
        </Flex>
        
        </>
    );
}

export default Shop;