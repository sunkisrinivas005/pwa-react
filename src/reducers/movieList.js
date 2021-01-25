import { MOVIE_LIST, ADD_TO_CART } from "../constants/ActionTypes";

const INIT_STATE = {
  loader: true,
  cartBucket: [],
  activeCompany: {
    name: "Amazon",
    id: 1,
  },
  company: [
    {
      name: "Amazon",
      id: 1,
    },
    {
      name: "Infosys",
      id: 2,
    },
    {
      name: "Facebook",
      id: 3,
    },
  ],
  items: [
    {
      name: "Small Pizza",
      price: 200,
      itemId: 1,
    },
    {
      name: "Medium Pizza",
      price: 300,
      itemId: 2,
    },
    {
      name: "Large Pizza",
      price: 400,
      itemId: 3,
    },
  ],
  pricingRules: {
    Facebook: [
      {
        name: "dis-1",
        itemNo: 1,
        description:
          "Gets a discount on Large Pizza where the price drops to $299.99 per pizza",
        specialValidation: false,
        price: 299,
        Quantity: null,
      },
    ],
    Amazon: [
      {
        name: "dis-2",
        itemNo: 3,
        description:
          "Gets a discount on Large Pizza where the price drops to $230.99 per pizza",
        specialValidation: false,
        price: 230,
        Quantity: null,
      },
    ],
    Infosys: [
      {
        name: "dis-3",
        itemNo: 2,
        description: "Gets a 3 for 2 deal for Small Pizzas",
        specialValidation:true,
        price: 299,
        Quantity: 3,
        discountPrice: 2,
      },
    ],
    totalDiscount : [],
  },
};

const handleCartValues = (data, action) => {
  return [...data.cartBucket, {name : action.payload.name, price: action.payload.price, itemId :action.payload.itemId}];
};


const handleTotalDiscount = (data, action) => {
  if(data.pricingRules && data.pricingRules[action.payload.activeCompany.name]){
    let discountRules = data.pricingRules[action.payload.activeCompany.name];
    if(discountRules && !discountRules[0].specialValidation && discountRules[0].itemNo === action.payload.itemId){
      console.log(discountRules, action.payload.itemId, "discountRules")
      return [
          {
            ...action.payload,
            price:discountRules[0].price
          }
        ]
    }

  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MOVIE_LIST: {
      return {
        ...state,
        movieList: action.payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartBucket: handleCartValues(state, action),
        totalDiscount : handleTotalDiscount(state,action)
      };
    }
    default:
      return state;
  }
};
