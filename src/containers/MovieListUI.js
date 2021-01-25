import React, { useState, useReducer } from "react";
import MovieCardUI from "./MovieCardUI";
import { Button } from "@material-ui/core";
import MovieDetailView from "./MovieDetailUI";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
  import {NotificationContainer,NotificationManager } from 'react-notifications';
import { getAllRestaurants, handleAddRestaurants, handleDeleteRestaurants, handleUpdateRestaurants } from "../actions/restaurants";
import ManageDialog from "../components/dialog";
import {
  TextValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";

const PhoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const inputValues = ["name", "email", "phoneNumber", "image", "rating"];

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "phoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "image":
      return {
        ...state,
        image: action.payload,
      };
    case "rating":
      return {
        ...state,
        rating: action.payload,
      };
    default:
      throw new Error();
  }
};

const MovieListUI = ({ handleOpen, handleClose }) => {
  let [editData, setEditData] = useState({});
  let [updateStatus, setUpdateStatus] = useState(false);
  let [open, setOpen] = useState(false);

  const [state, stateDispatch] = useReducer(reducer, {
    name: "",
    phoneNumber: "",
    email: "",
    rating: "",
    image: "",
  });

  let { restaurants } = useSelector(({ Restaurants }) => Restaurants);

  let dispatch = useDispatch();

  const handlegetRestaurants = async () => {
    dispatch(getAllRestaurants());
  };

  React.useEffect(() => {
    handlegetRestaurants();
  }, []);

  ValidatorForm.addValidationRule('phoneNumberValid', (value) => {
    if (!value.match(PhoneNumberRegex)) {
        return false;
    }
    return true;
});


const handleCloseModal = () => {
  handlegetRestaurants();
  setOpen(false)
};


  const handleSave_Update = async() => {
    let postData = {
      ...state
    }
    const callback = (res) => {
    if(res && res.status === 200){
      handleCloseModal()
    } 
    if(res && res.status === 401){
      console.log(res,"sdsddd")
      NotificationManager.error(
      `${res.message}`
    );
    }
    }
     await handleAddRestaurants(postData, callback)
  };
  

  const handleDelete = async(data) => {
  let postData = {
    ...data
  }
  const callback = (res) => {
    if(res && res.status === 200){
      handleCloseModal()
    } 
    if(res && res.status === 401){
      console.log(res,"sdsddd")
      NotificationManager.error(
      `${res.message}`
    );
    }
    }
     await handleDeleteRestaurants(postData, callback)

  }

  const handleUpdateModal = (data) => {
    let keys = Object.keys(data);
    keys.map(i => {
      i !== "id" && stateDispatch({ type: i === "phonenumber" ? "phoneNumber" : i, payload: data[i] })
    })
    setUpdateStatus(true);
    // handleOpen(true);
    setOpen(true)
  }

  const handleUpdate = async(data) => {
    const callback = (res) => {
      if(res && res.status === 200){
        setUpdateStatus(false);
        handleCloseModal()
      } 
      if(res && res.status === 401){
        console.log(res,"sdsddd")
        NotificationManager.error(
        `${res.message}`
      );
      }
      }
    let response = await handleUpdateRestaurants(state, callback)
  }


  const handleDeleteData = () => {
    let keys = Object.keys(state);
    keys.map(i => {
      i !== "id" && stateDispatch({ type: i === "phonenumber" ? "phoneNumber" : i, payload: "" })
    })
    setUpdateStatus(false)
  }
  return (
    <>
       <Button
              color = "primary"
              onClick = {() => {
                handleDeleteData()
                setOpen(true)
              }}
              variant = "contained"
              style = {{float:"right"}}
             >
                 Add New 
             </Button>
      <div className="col-lg-12 row">
        {restaurants &&
          restaurants.map((i, n) => {
            return (
              <MovieCardUI
                data={i}
                key={n}
                handleDelete={handleDelete}
                handleUpdate = {handleUpdateModal}
              />
            );
          })}
        <ManageDialog
          isOpen={open}
          handleModalClose={() => {
            handleDeleteData()
            setOpen(false)
          }}
          title="Add Restaurants"
          isDialog={true}
          // buttons={true}
          // onSave={() => handleSave_Update()}
        >
          <div className="col-lg-12">
            <ValidatorForm onSubmit={() => updateStatus ? handleUpdate() : handleSave_Update()}>
              {inputValues &&
                inputValues.map((i) => {
                  return (
                    <div style={{ padding: "10px" }}>
                      <TextValidator
                        fullWidth
                        label={i}
                        onChange={(e) =>
                          stateDispatch({ type: i, payload: e.target.value })
                        }
                        name={i}
                        value={state[i] ? state[i] : ""}
                        variant="outlined"
                        validators={
                          i === "phoneNumber"
                            ? ["required", "phoneNumberValid"]
                            : ["required"]
                        }
                        disabled = {updateStatus ? i === "phoneNumber" ? true : false : false}
                      />
                    </div>
                  );
                })}
              <div className="col-lg-12">
                <div style={{ float: "right" }}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
              </div>
            </ValidatorForm>
          </div>
        </ManageDialog>
        <NotificationContainer />
      </div>
    </>
  );
};

export default MovieListUI;
