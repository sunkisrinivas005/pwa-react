import { useCallback } from "react";
import  {GET_ALL_RESTAURANTS} from "../constants/ActionTypes";
import API from "../middleware";


export const getAllRestaurants = () => {
  return async dispatch => {
      let url  = '/getall-restaurants';
      let method = "GET"
      const headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      };
      let res = await API({url, method, headers});
      const body = res && res.data ? res.data : [];
        if (body && body.status === 200) {
            console.log("testing")
        dispatch({
            type: GET_ALL_RESTAURANTS,
            payload: body && body.data ? body.data : {},
        });
        } else if (res.message === "error") {
         console.log("error")
        }
        return res;
  }
}

export const handleAddRestaurants = async(data, Callback) => {
        let url  = '/add-restaurant';
        let method = "POST"
        const headers = {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        };
        let res = await API({url, method, headers, data});
        const body = res && res.data ? res.data : [];
          if (body && body.status === 200) {
            let {data} = res
           Callback(data)
          } else if (body && body.status === 401) {
              let {data} = res
           Callback(data)
          }else {
              console.log("error")
          }
          return res;
  }

  export const handleDeleteRestaurants = async(data, Callback) => {
    let url  = '/delete-restaurant';
    let method = "POST"
    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    };
    let res = await API({url, method, headers, data});
    const body = res && res.data ? res.data : [];
      if (body && body.status === 200) {
        let {data} = res
         Callback(data)
      } else if (body && body.status === 401) {
          let {data} = res
         Callback(data)
      }else {
          console.log("error")
      }
      return res;
}

export const handleUpdateRestaurants = async(data, Callback) => {
  let url  = '/update-restaurant';
  let method = "POST"

  const headers = {
    "Content-Type": "application/json"
  };

  let res = await API({url, method, headers, data});

  const body = res && res.data ? res.data : [];
    if (body && body.status === 200) {
      let {data} = res
       Callback(data)
    } else if (body && body.status === 401) {
        let {data} = res
       Callback(data)
    }else {
        console.log("error")
    }
    return res;
}