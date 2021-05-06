import React, {useState} from "react";
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export const ShowFilterOptions = () => {
    const countries = ["China", "Egypt", "France", "Hong Kong",
                       "India", "Indonesia", "Iran", "Japan",
                       "Korea", "Pakistan", "Poland","Turkey",
                       "United Kingdom", "United States"];
    const genres = [ "Action", "Adventure", "Black Comedy", "Comedy",
                     "Crime", "Drama" ,"Fantasy", "Historical",
                     "Horror", "Martial Arts", "Mistery", "Parody",
                     "Romance", "Supernatural", "Thriller",
                     "War and Military", "Western"];
    const [countrySelected, setCountry] = useState("None");
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    
    function setCountryToShow (newValue) {
      setCountry(newValue);
    };
    function setDateFromButtonGroup (type) {
      let newDate= new Date();
      switch(type){
        case "Week":
          newDate.setDate(newDate.getDate()-7);
          break;
        case "Month":
          newDate.setDate(newDate.getDate()-31);
          break;
        case "Year":
          newDate.setDate(newDate.getDate()-365);
          break;
        case "All":
          newDate.setDate(newDate.setFullYear(1940, 1, 1));
          break;
        default:
      };
      setDateFrom(newDate);
    };
    const CountryFilter = () =>{
      return (
        <div className="ShowFiltersPage">
          <div style={{display:"inline-flex"}}>
            <h4 id="NameOfFilter">Country:</h4>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {countrySelected}
              </Dropdown.Toggle>
              <Dropdown.Menu id="dropdown-basic dropdown-menu">
                {countries.map((element) => (
                    <Dropdown.Item key={element}
                      id="dropdown-basic"
                      onClick={() => { setCountryToShow(element,"default")}}
                    >
                      {element}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      );
    }
    const GenresFilter = () =>{
      return (
        <div>
          <div className="ShowFiltersPage" style={{display:"inline-flex"}}> 
              <h4 id="NameOfFilter">Genres:</h4>
              <div id="gendersContainer">
                {genres.map((element) => (
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
      );
    }
    const DateFilter = () => {
      return (
        <div >  
          <div className="ShowFiltersPage" style={{display:"inline-flex"}}> 
            <h4 id="NameOfFilter">Release Date:</h4>
            <h4 id="NameOfFilter"> From:</h4>
            <DatePicker selected={dateFrom} 
              onChange={date => setDateFrom(date)} 
              dateFormat='dd/MM/yyyy'
              maxDate={new Date()}
              showYearDropdown
              scrollableMonthYearDropdown
            />
            <h4 id="NameOfFilter" style={{marginLeft:"20px"}}> To:</h4>
            <DatePicker selected={dateTo} 
              onChange={date => setDateTo(date)}
              dateFormat='dd/MM/yyyy'
              maxDate={new Date()} 
              showYearDropdown
              scrollableMonthYearDropdown
            />
          </div>
          <div className="ShowFiltersPage">
            <ButtonGroup className="mb-2">
              <Button
                onClick={() => setDateFromButtonGroup("default")} >
                  Today
              </Button>
              <Button
                onClick={() => setDateFromButtonGroup("Week")} >
                  Last Week
              </Button>
              <Button
                onClick={() => setDateFromButtonGroup("Month")} >
                  Last Month
              </Button>
              <Button
                onClick={() => setDateFromButtonGroup("Year")} >
                  Last Year
              </Button>
            </ButtonGroup>
          </div>
        </div>
      );
    }
    return (
      <div>
        <CountryFilter/>
        <GenresFilter/>
        <DateFilter/>
      </div>
    );
};

export default ShowFilterOptions;