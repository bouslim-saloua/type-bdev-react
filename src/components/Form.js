import { Box, Button, Title } from "@mantine/core";
import { useState } from "react";
import First from "./First";
import Fourth from "./Fourth";
//import Second from "./Second";
import Third from "./Third";

const Form =() => {
    const boxStyle = {
        width: '70%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '1rem 0',
      };
      const [page, setPage] = useState(0);

      const conditionalComponent = () => {
        switch (page) {
          case 0:
            return <First />;
          case 1:
            return null;
           case 2:
             return <Third />;
           case 3:
             return <Fourth />;
             default:
                return <First />;
        }
      }; 
      const handleSubmit = () => {
        setPage(page + 1);
      }
    return (
      
       <>
      {conditionalComponent()}
      <Button onClick={handleSubmit}>
        { page === 0 || page === 1 ? "Next" : "Submit" }
      </Button>
    </>
      
    );
  }
  export default Form;