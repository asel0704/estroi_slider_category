import React, { useEffect } from "react"
import {useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setCatalog } from '../store/slice/shop';
import {ItemCount} from "./ItemCount";
//mui
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ChildPageCategories } from "./ChildPageCategories";
import { fetchCategories } from "../fetchers/fetchCategories";
import { LinkBase } from "./LinkBase";

    const CategoryMenu = () => {
    const { catalog } = useSelector((state) => state.shop);
    const {id} = useParams();   
    const dispatch = useDispatch();
    const navigate = useNavigate()


    useEffect(() => {
        fetchCategories().then((data) => {
            dispatch(setCatalog(data));
        });
    }, [dispatch]);

    const handleClick = (node) => {
       navigate('/category/' + node.id)

    }
    const renderTree = (nodes) => (
  
        <TreeItem key={nodes.id} nodeId={nodes.id + ''}
            label = {<ItemCount nodes={nodes}/>}
            onClick={() => handleClick(nodes)}> 
            </TreeItem>
       
    );
    return (
        <>
            <div>
              <br></br>
                <TreeView aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 580, flexGrow: 1, maxWidth: 300,
                          marginLeft: "50px",overflowY: 'auto'  }}
                >    {catalog.map((data) => (
                         renderTree(data))
                     )}
                    </TreeView>
            </div>
            {id && <ChildPageCategories id={id} />}
        </>
    )
}
export default CategoryMenu