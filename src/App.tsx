import { useEffect, useState } from "react";
import { Permission } from "./utils/enums";
import { Age } from "./utils/types";
// arrObj: {}[] = [{}]
const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string | number;
}[] = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: 123456789,
  },
];

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: {
    freeWifi: boolean;
    freeParking: boolean;
    specialOffer: boolean;
  };
}[] = [
  {
    image: "https://source.unsplash.com/random",
    name: "Zuich, Switzerland",
    totalReviews: 148,
    rating: 4.8,
    location: "Switzerland",
    price: 300,
    date: "05/09/1994",
    departure: "Brazil",
    features: {
      freeWifi: true,
      freeParking: true,
      specialOffer: false,
    },
  },
];

// const obj: {} = {}
// union types |
// Permissions
function App() {
  const [count, setCount] = useState(0);
  const user: {
    firstName: string;
    lastName: string;
    age: Age;
    isStudent: boolean;
    school: (string | number)[];
    scores: number[];
    contact: [number, string];
    permission: Permission;
  } = {
    firstName: "Tran",
    lastName: "Anh Tuan",
    age: "40",
    isStudent: false,
    school: ["Cao Thang", "Ton Duc Thang", "Sai Gon University", 35],
    scores: [10, 9, 8],
    contact: [123456789, "tuan@gmail.com"],
    permission: Permission.ADMIN,
  };
  function displayReview(
    totalReviews: number | string,
    name: string,
    premium: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }
  // optional: không bắt buộc
  // name?: parameter này không bắt buộc
  // const travelItem: image, name, totalReviews, rating, location, price, date, departure, features: wifi, parking, offer
  // Khai báo 1 biến có tên là travelItem là một mảng chứa các object có các properties(thuộc tính) như trên

  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img
            src="https://images.unsplash.com/photo-1659464797962-62a9b8324abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
