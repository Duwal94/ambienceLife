import React from 'react'; // Make sure to import React if you're using JSX
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function EcommerceCard({ img, name }) { // Use curly braces to destructure props
 
  return (
    <Card className="w-96 bg-custom3">
      <CardBody shadow={true} floated={false} className="h-96 p-0">
        
        
        <img
          src={img}
          alt="card-image"
          className="  h-100 w-full  object-fill rounded-md"
        />
      </CardBody>
      <CardBody>
       
        
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-custom1 font-custom1 text-white/75 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          SHOP {name}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EcommerceCard;
