import { useState } from "react";
import styled from "styled-components";
import SearchResult from "./comonents/SearchResult/SearchResult";
const foodData = [
  {
    name: "Boilded Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 18,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 23,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/pancake.png",
    type: "dinner",
  },
];

const filterBtns = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];
const App = () => {
  const [data] = useState(foodData);
  const [filteredData, setFilteredData] = useState(foodData);
  const [selectedBtn, setSelectedBtn] = useState(filterBtns[0].name);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    const filterName = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const filterPrice = data?.filter((food) => food.price <= searchValue);

    if (filterName.length > 0) {
      setFilteredData(filterName);
    } else if (filterPrice.length > 0) {
      setFilteredData(filterPrice);
    } else {
      setFilteredData([]);
    }
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filterType = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filterType);
    setSelectedBtn(type);
  };

  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <div className='search'>
            <input
              onChange={searchFood}
              type='text'
              placeholder='Search Food'
            />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns?.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
const MapContainer = styled.section`
  display: flex;
`;
export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
    outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #f22f2f;
    }
  }
`;
