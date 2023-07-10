import React, { useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import SearchItem2 from "../../components/searchItem/SearchItem2";


const List = () => {
    const data = [
        {
            "_id": "1",
            "name": "Taj Lands",
            "locality": "Juhu Beach",
            "city": "Mumbai",
            "image": "https://pimg.fabhotels.com/propertyimages/896/images/photos-fabhotel-prime-atlantic-mumbai-Hotels_1685368063184.jpg",
            "wifi": true,
            "tv": true,
            "security": true,
            "amenities": ["Mineral Water Bottle", "Daily Housekeeping", "Free Toiletries"],
            "cancellation": true,
            "breakfast": true,
            "payAtHotel": true,
            "originalPrice": "₹9,333",
            "price": "₹5,320",
            "reviews": 190,
            "rating": "4.5/5"
        },
        {
            "_id": "2",
            "name": "Noor Hotel",
            "locality": "Bandstand",
            "city": "Mumbai",
            "image": "https://pimg.fabhotels.com/propertyimages/319/images/photos-fabhotel-arton-suites-i-mumbai-Hotels_1680701489112.jpg",
            "wifi": true,
            "tv": false,
            "security": true,
            "amenities": ["Amenity 1", "Amenity 2", "Amenity 3"],
            "cancellation": false,
            "breakfast": true,
            "payAtHotel": false,
            "originalPrice": "₹10,000",
            "price": "₹4,000",
            "reviews": 50,
            "rating": "3.8/5"
        },
        {
            "_id": "3",
            "name": "Grand Hotel",
            "locality": "Central Square",
            "city": "New York",
            "image": "https://pimg.fabhotels.com/propertyimages/296/mainfacade/main-facade-photos-fabhotel-sahar-garden-mumbai-Hotels-20180928105537.jpg",
            "wifi": true,
            "tv": true,
            "security": true,
            "amenities": ["Swimming Pool", "Gym", "Spa"],
            "cancellation": true,
            "breakfast": true,
            "payAtHotel": true,
            "originalPrice": "₹12,000",
            "price": "₹8,500",
            "reviews": 120,
            "rating": "4.2/5"
        },
        {
            "_id": "4",
            "name": "Luxury Resort",
            "locality": "Paradise Island",
            "city": "Maldives",
            "image": "https://pimg.fabhotels.com/propertyimages/743/images/photos-fabhotel-aksa-international-andheri-east-mumbai-Hotels_1680766375488.jpg",
            "wifi": true,
            "tv": true,
            "security": true,
            "amenities": ["Private Beach", "Water Sports", "Fine Dining"],
            "cancellation": true,
            "breakfast": true,
            "payAtHotel": true,
            "originalPrice": "₹20,000",
            "price": "₹15,000",
            "reviews": 80,
            "rating": "4.8/5"
        },
        {
            "_id": "5",
            "name": "City Center Inn",
            "locality": "Downtown",
            "city": "Los Angeles",
            "image": "https://pimg.fabhotels.com/propertyimages/200/images/photos-null-mumbai-Hotels_1568275706190.jpg",
            "wifi": true,
            "tv": true,
            "security": true,
            "amenities": ["Restaurant", "Bar", "Meeting Rooms"],
            "cancellation": true,
            "breakfast": true,
            "payAtHotel": true,
            "originalPrice": "₹8,500",
            "price": "₹6,500",
            "reviews": 90,
            "rating": "4.0/5"
        },
        {
            "_id": "6",
            "name": "Cozy Cottage",
            "locality": "Mountain View",
            "city": "Mumbai",
            "image": "https://pimg.fabhotels.com/propertyimages/471/images/photos-fabhotel-royal-international-mumbai-Hotels_1680766077116.jpg",
            "wifi": true,
            "tv": true,
            "security": true,
            "amenities": ["Fireplace", "Scenic Views", "Hiking Trails"],
            "cancellation": true,
            "breakfast": true,
            "payAtHotel": true,
            "originalPrice": "₹15,000",
            "price": "₹12,000",
            "reviews": 70,
            "rating": "4.6/5"
        }
    ];

    const location = useLocation();
    const state = location.state || {}; // Provide a default empty object if location.state is null
    const [destination, setDestination] = useState(state.destination || "");
    const [dates, setDates] = useState(state.dates || []);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(state.options || {});

    const handleClick = (e) => {
        console.log("entered");
    };

    const [selectedLocalities, setSelectedLocalities] = useState([]);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(15000);
    const [sortingOption, setSortingOption] = useState("popularity"); // New state for sorting option

    const handleLocalityChange = (locality) => {
        const updatedLocalities = selectedLocalities.includes(locality)
            ? selectedLocalities.filter((loc) => loc !== locality)
            : [...selectedLocalities, locality];
        setSelectedLocalities(updatedLocalities);
    };

    const handleMaxPriceChange = (price) => {
        setSelectedMaxPrice(parseInt(price, 10));
    };

    const [popup, setPopup] = useState(false);
    const popupClick = () => {
        setPopup(!popup);
    };

    const handleSortByPrice = () => {
        setSortingOption("price");
    };

    const handleSortByPopularity = () => {
        setSortingOption("popularity");
    };

    // Filter and sorting logic
    const filteredItems = data.filter((item) => {
        // Convert price to numerical value
        const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
        if (selectedLocalities.length > 0 && selectedMaxPrice) {
            return (
                selectedLocalities.includes(item.locality) &&
                itemPrice <= selectedMaxPrice
            );
        } else if (selectedLocalities.length > 0) {
            return selectedLocalities.includes(item.locality);
        } else if (selectedMaxPrice) {
            return itemPrice <= selectedMaxPrice;
        }
        return true;
    }).sort((a, b) => {
        if (sortingOption === "price") {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
            const priceB = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
            return priceA - priceB;
        } else if (sortingOption === "popularity") {
            const ratingA = parseFloat(a.rating.split("/")[0]);
            const ratingB = parseFloat(b.rating.split("/")[0]);
            return ratingB - ratingA;
        }
        return 0;
    });


    return (
        <div className="listContainer">
            <div className="listWrapper">
                <div className={`listSearch ${popup ? "popup-appear" : "popup-disappear"}`}>
                    <h2 className={`lsTitle ${popup ? "popup-appear" : ""}`}>Search</h2>
                    <div className={`lsItem ${popup ? "popup-appear" : ""}`}>
                        <label htmlFor="">Destination</label>
                        <input
                            placeholder={destination}
                            type="text"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className={`lsItem ${popup ? "popup-appear" : ""}`}>
                        <label htmlFor="">From Date - To Date</label>
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="headerSearchText"
                        >
                            {/* {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                                dates[0].endDate,
                                "dd/MM/yyyy"
                            )}`} */}
                        </span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="date"
                                minDate={new Date()}
                            />
                        )}
                    </div>
                    <div className={`lsItem ${popup ? "popup-appear" : ""}`}>
                        <label htmlFor="">Options</label>
                        <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult</span>
                                <input
                                    type="Number"
                                    min={1}
                                    className="lsOptionInput"
                                    placeholder={options.adult}
                                />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input
                                    type="Number"
                                    min={0}
                                    className="lsOptionInput"
                                    placeholder={options.children}
                                />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Rooms</span>
                                <input
                                    type="Number"
                                    min={1}
                                    className="lsOptionInput"
                                    placeholder={options.room}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`lsSearchButton ${popup ? "popup-appear" : ""}`}>
                        <button onClick={handleClick}>Search</button>
                    </div>

                    <h3 className={`lsTitle" ${popup ? "popup-appear" : ""}`}>Sort By :</h3>
                    <div className="sort-wrapper">
                        <span onClick={handleSortByPrice} className={`sort-btn vertical-border ${sortingOption === "price" ? 'active' : ''}`}>Price</span>
                        {/* <span className="vertical-border"></span> */}
                        <span onClick={handleSortByPopularity} className={`sort-btn ${sortingOption === "popularity" ? 'active' : ''}`}>Popular</span>
                    </div>

                    <h3 className={`lsTitle" ${popup ? "popup-appear" : ""}`}>Filters</h3>
                    <div className={`sidebar-wrapper ${popup ? "popup-appear" : ""}`}>
                        {/* <div className="widget">
                            <h3 className="lsTitle">Sort By</h3>
                            <div className="widget-body">
                                <span onClick={handleSortByPrice}>Price</span>
                                <span onClick={handleSortByPopularity}>Popularity</span>
                            </div>
                        </div> */}

                        <div className="widget">
                            <h3 className="widget-title">
                                Localities
                            </h3>
                            <div className="collapse show filter-block" >
                                <div className="widget-body custom-checkbox">
                                    <ul className="filter-checkbox-list">
                                        <li>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value="Bandstand"
                                                    checked={selectedLocalities.includes("Bandstand")}
                                                    onChange={(e) => handleLocalityChange(e.target.value)}
                                                />
                                                <span>Bandstand</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value="Juhu Beach"
                                                    checked={selectedLocalities.includes("Juhu Beach")}
                                                    onChange={(e) => handleLocalityChange(e.target.value)}
                                                />
                                                <span>Juhu Beach</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value="Downtown"
                                                    checked={selectedLocalities.includes("Downtown")}
                                                    onChange={(e) => handleLocalityChange(e.target.value)}
                                                />
                                                <span>Downtown</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* price filter */}
                        <div className="widget filter-block">
                            <h3 className="widget-title">Prices</h3>
                            <div className="collapse show" >
                                <div className="widget-body">
                                    <div className="price-range">
                                        <span>Max: </span>
                                        <input
                                            type="range"
                                            min={0}
                                            max={15000}
                                            value={selectedMaxPrice}
                                            onChange={(e) =>
                                                handleMaxPriceChange(e.target.value)
                                            }
                                        />
                                        <span>{selectedMaxPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* All results */}
                <div className={`listResult ${popup ? "popup-disappear" : "popup-appear"}`}>
                    {!filteredItems.length ? (
                        <p>No hotels found. Change the filters to search for other hotels.</p>
                    ) : (
                        filteredItems.map((item) => (
                            <SearchItem2 item={item} key={item._id} />
                        ))
                    )}
                </div>
                <button className="popup-btn" onClick={() => popupClick()}>{popup ? "Results" : "Filters"}</button>
            </div>
        </div>
    );
};

export default List;
