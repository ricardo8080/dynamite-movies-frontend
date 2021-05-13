import React, {useState} from "react";
import filterImg from '../../assets/images/filter_list.svg';
import Button from 'react-bootstrap/Button';
import ShowFilters from './showFilters';

export const FilterPage = () => {
    const [showFilterWords,setShowFiltersWords] = useState("Search with Filters");
    const openFilterOptions = () => {
        setShowFiltersWords((value) => ( value !== "Search with Filters"
                        ? "Search with Filters"
                        : "Show Trends/Last Seen"));
    };

    const FilterButton = () =>{
        return (
            <div style={{color:"#4f3b78", margin:"10px"}} onClick={openFilterOptions}>
                <Button className="showFilters"  variant="dark" style={{backgroundColor: "#4f3b78"}}>    
                    <img value={showFilterWords} 
                         src={filterImg} alt="filterImg" 
                         width="30px" height="30px" 
                         style={{backgroundColor: "#4f3b78", marginRight: "5px"}}/>
                    {showFilterWords}
                </Button>
            </div>  
        );
    };

    return showFilterWords === "Search with Filters" ? (
        <div>
            <FilterButton />
            
        </div>
    ) : (
        <div>
            <FilterButton />
            <ShowFilters />
        </div>
    );
};



export default FilterPage;
