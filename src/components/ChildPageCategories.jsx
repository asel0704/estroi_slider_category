import { Grid, Paper,styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCatalog} from "../store/slice/shop";
import { fetchCategories } from "../fetchers/fetchCategories";

export const ChildPageCategories = () => {

const {catalog} = useSelector((state)=> state.shop);

const dispatch = useDispatch();

useEffect(()=> {
    fetchCategories().then(data =>{
       dispatch(setCatalog(data))
    });
}, [dispatch]);

console.log(catalog.content)

const Item = styled(Paper)(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: "#EAEAEA",
    color: theme.palette.text.secondary,
    minHeight: "88px",
    width: "295px",
   
}));

 return (
     <div style={{marginLeft: "400px"}}>
              <Box>
             <Grid container spacing={{ xs: 2, md: 3 }}
                 columns={{ xs: 2, sm: 8, md: 12 }}
                 style={{ marginTop: "-600px" }}>
                 {catalog.map((data) => (
                     <Grid item xs={2} sm={4} md={4}
                         key={data.name}
                     >
                     <Item
                         onClick={() => { setCatalog(data) }} >
                           <div style={{whiteSpace:'nowrap'}}>{data.name}</div>
                        <div>{data.childCategories.map(item => (
                           <button style={{border:'1px solid white',backgroundColor:'white', width:'200px', marginBottom:'10px', marginRight:'180px', marginTop:'10px'}}>
                            <br></br>
                             {item.name} 
                              <span style={{width:'70px', height:'70px', backgroundColor:'yellow', borderRadius:'50%'}}>{data.childCategories.length}</span>
                                 </button> 
                               
                                  ))}
                         </div>
                          </Item>
                     </Grid>
                 ))}
                     </Grid>
                     
                 </Box>
             
     </div>
 )
}
