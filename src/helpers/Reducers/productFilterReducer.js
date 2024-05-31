export const prodFilInitialState = {
    initialProducts: [],
    filteredProducts: [],
    rating: "",
    sortBy: "",
    bestSellerOnly: false,
    inStockOnly: false,
  };
  
  export const productFilterReducer = (state, action) => {
    console.log("Inside productFilterReducer : ", state, action);
    let filteredProducts = state.initialProducts;
    switch (action.type) {
      case "INITIAL_PRODUCTS":
        return {
          ...state,
          initialProducts: action.payload,
          filteredProducts:action.payload
        };
      case "SORT_PRODUCTS":
        filteredProducts = sort(action.payload,
          ratingFiler(state.rating, 
          bestSellerOnly(state.bestSellerOnly,
          inStockOnly(state.inStockOnly ,state.initialProducts))));
        return {
          ...state,
          sortBy: action.payload,
          filteredProducts:filteredProducts
        };
      case "RATING_FILTER":
        filteredProducts = sort(state.sortBy,
          ratingFiler(action.payload, 
          bestSellerOnly(state.bestSellerOnly,
          inStockOnly(state.inStockOnly ,state.initialProducts))));
        return {
          ...state,
          rating: action.payload,
          filteredProducts:filteredProducts
        };
      case "BEST_SELLER_FILTER":
        filteredProducts = sort(state.sortBy,
          ratingFiler(state.rating, 
          bestSellerOnly(!state.bestSellerOnly,
          inStockOnly(state.inStockOnly ,state.initialProducts))));
        return {
          ...state,
          bestSellerOnly: !state.bestSellerOnly,
          filteredProducts:filteredProducts
        };
      case "INSTOCK_ONLY_FILTER":
        filteredProducts = sort(state.sortBy,
          ratingFiler(state.rating, 
          bestSellerOnly(state.bestSellerOnly,
          inStockOnly(!state.inStockOnly ,state.initialProducts))));
        return {
          ...state,
          inStockOnly: !state.inStockOnly,
          filteredProducts:filteredProducts
        };
        case "CLEAR_ALL_FILTERS":
        filteredProducts = sort("",
          ratingFiler("", 
          bestSellerOnly(false,
          inStockOnly(false ,state.initialProducts))));
        return {
          ...state,
          sortBy:"",
          rating:"",
          inStockOnly: false,
          bestSellerOnly:false,
          filteredProducts:filteredProducts
        };
      default:
        throw new Error("No such action");
    }
  };
  
  const sort = (sortBy,products) => {
    if(sortBy==="L2H")
      return products.sort((productA,productB)=>(productA.price-productB.price));
    else if(sortBy==="H2L")    
      return products.sort((productA,productB)=>(-productA.price+productB.price));
    return products;
  }
  
  const bestSellerOnly = (bestSellerOnlyFlag,products) => {
    console.log("Inside bestSellerOnly",bestSellerOnlyFlag,products);
    return bestSellerOnlyFlag?products.filter(product=>product.bestSeller===bestSellerOnlyFlag):products; 
  }
  
  const inStockOnly = (inStockOnlyFlag,products) => {    
    console.log("Inside inStockOnly",inStockOnlyFlag,products);
    return inStockOnlyFlag?products.filter(product=>product.inStock===inStockOnlyFlag):products; 
  }
  
  const ratingFiler = (rating,products) => {
    if(rating===4)
      return products.filter(product=>product.rating>=4);
    else if(rating===3)
    return products.filter(product=>product.rating>=3);
    else if(rating===2)
    return products.filter(product=>product.rating>=2);
    else if(rating===1)
    return products.filter(product=>product.rating>=1);
  
    return products; 
  }
  
  