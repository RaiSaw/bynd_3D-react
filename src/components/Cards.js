import { Text, VStack, CardBody, Card, HStack, Box, Image } from "@chakra-ui/react";
import React from "react";
import {motion} from 'framer-motion'


const Categories = ({ title, alt, imageSrc }) => {
    return(
        <Card
        ass={motion.span}
        color="#333"
        borderRadius="xl"
        boxShadow='dark-lg'
        left={0}
        right={0}
        w='100%'
        /* bg={imageSrc} */
        /* alt={alt} */
        /*whileHover={{
          scale: 1.2,
          transition: { duration: 2 },
        }}*/
        //whileTap={{ scale: 1.5 }}
        //whileDrag={{ scale: 1.2 }}
        //whileFocus={{ scale: 2 }}
        >
        <CardBody>
          <Image /* bg='url({imageSrc}) top/cover no-repeat' */ src={imageSrc} alt={alt}/>
          <VStack alignItems="flex-start">
          <Text className="stars" transition='all 2s' _hover={{ scale: 2 }}></Text>
          <HStack gap={2} justifyContent="space-between" alignItems="center">
            {/* <Avatar className='Avatar' name={name} src={imageSrc} size={['md','lg','xl']}/> */}
            <Text fontFamily={'Karla'} fontWeight='bold' fontSize={['8','16', '18']}>{title}</Text>
          </HStack>
            <Text fontFamily={'Karla'} fontWeight='regular' fontSize={['8','12', '16']} lineHeight='1.5' color="#333">Categories</Text>
            <Text fontFamily={'Karla'} fontWeight='regular' fontSize={['8','12', '16']} lineHeight='1.5' color="#333">View All</Text>
        </VStack>
        </CardBody>
      </Card>
    )
}
export default Categories;
<div className="col">
                  <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4  opacity-80" /* style={{backgroundImage: ('/Characters.png')}} */ data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="artstation.com">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h3 className="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">3D Models</h3>
                      <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto" /* style="cursor:pointer" */>
                          <small className="fw-bold border rounded">View All</small>
                        </li>
                        <li className="d-flex align-items-center me-3" /* style={{cursor:"pointer"}} */>
                          {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                          <small className="fw-bold border rounded">Categories</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>