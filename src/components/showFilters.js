import React, {useState} from "react";
import { Button, Dropdown } from 'react-bootstrap'

export const ShowFilterOptions = () => {
    const countries = ["United States","India","United Kingdom"];
    const genders = ["Action","Sci-Fi","Drama"]
    const [countrySelected, setCountry] = useState("None");
    /*
      function setCountryToShow (newValue) {
        setCountry(newValue);
        console.log(countrySelected);
      };
    */
    return (
      <div>
        <div className="ShowFiltersPage">
          <div style={{display:"inline-flex"}}>
            <h4 id="NameOfFilter">Country:</h4>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {countrySelected}
              </Dropdown.Toggle>
              <Dropdown.Menu id="dropdown-basic">
                {countries.map((element) => (
                    <Dropdown.Item key={element}
                      id="dropdown-basic"
                      onClick={() => { setCountry(element)}}
                    >
                      {element}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>    
          <div className="ShowFiltersPage" style={{display:"inline-flex"}}> 
              <h4 id="NameOfFilter">Gender:</h4>
              <div id="gendersContainer">
                {genders.map((element) => (
                  <Button 
                    className="btn btn-outline-info"
                    id="genderButton" 
                    key={element}
                  >{element}
                    </Button>
                ))}
              </div>
          </div>
        </div>
        
        <div >      
            <h3 id="NameOfFilter">Release Date:</h3>

            
        </div>
      </div>
    );
};

export default ShowFilterOptions;