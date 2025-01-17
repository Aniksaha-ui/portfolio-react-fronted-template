import { useParams } from "react-router-dom";
import useAxios from "./useAxios";

const useApi = () => {
  const axiosClient = useAxios();

  /** get localstorage value */
  const getLocalStorageValue = () => {
    return {
      token: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null,
      email: localStorage.getItem("email")
        ? localStorage.getItem("email")
        : null,
      role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
    };
  };

  /** calling login api */

  const login = async (data) => {
    const response = await axiosClient.apiClient("POST", "user/login", data);
    if (response) {
      if (response?.data) {
        return response.data;
      }
    } else {
      return { message: response.message, data: [] };
    }
    return null;
  };
  /** calling login api */

  /** calling category api */
  const getAllCategory = async (keyword, pageNumber = 0) => {
    const response = await axiosClient.apiClient(
      "GET",
      `category/all?keyword=${keyword}&page=1`
    );
    if (response) {
      if (response?.data?.success === true) {
        return response;
      }
    }
    return null;
  };
  /** calling category api */

  /** get all tour */
  const getTour = async () => {
    const response = await axiosClient.apiClient("POST", "tour");
    return response.data.data;
  };

  const getTourById = async (id) => {
    const response = await axiosClient.apiClient("GET", `tour/${id}`);
    return response.data.data;
  };

  const tourWiseBookingInfomation = async (tourId) =>{
    const response = await axiosClient.apiClient("GET", `booking/${tourId}`);
    return response.data.data;
  }
  /*************************Transaction service start here ******************/
  const getApprovedTransaction = async () => {
    const response = await axiosClient.apiClient("GET", "transection/approved");
    return response.data.data;
  };

  const getPendingTransaction = async () => {
    const response = await axiosClient.apiClient("GET", "transection/pending");
    return response.data.data;
  };

  const getRejectTransaction = async () => {
    const response = await axiosClient.apiClient("GET", "transection/reject");
    return response.data.data;
  };

  const getTransactionById = async (trnxId) => {
    const response = await axiosClient.apiClient(
      "GET",
      `transection/${trnxId}`
    );
    return response.data.data;
  };

  const updateTransactionStatus = async (data) => {
    const response = await axiosClient.apiClient(
      "POST",
      "transection/update",
      data
    );
    return response.data.isExecute;
  };

  /*************************Transaction service start here ******************/

  /*************************Booking Service start here *********************/
  const getAllBooking = async () => {
    const response = await axiosClient.apiClient("GET", `booking`);
    return response.data.data;
  };

  const getBookingDetails = async () => {};

  const bookingDetails = async (userId, tourId, bookingId) => {
    const filterOption = { bookingId: bookingId, tourId: tourId, id: userId };
    const response = await axiosClient.apiClient(
      "POST",
      "booking/tour-details",
      filterOption
    );
    console.log(response.data.data);
    return response.data.data;
  };

  /*************************Booking Service end here *********************/

  /*************************Hotel Service start *************************/

  const getAllHotels = async () => {
    const response = await axiosClient.apiClient("POST", `hotel`, {});
    return response.data.data;
  };

  const addHotel = async (hotel) => {
    const response = await axiosClient.apiClient("POST", `hotel/create`, hotel);
    return response.data.data;
  };

  const deleteHotel = async (hotelId) => {
    const response = await axiosClient.apiClient("DELETE", `hotel/${hotelId}`);
    return response.data.data;
  };

  /*************************Hotel Service end *************************/

  /*************************Account Service start *************************/

  const getAllAccounts = async () => {
    const response = await axiosClient.apiClient("POST", `account`, {});
    return response.data.data;
  };

  const addAccount = async (account) => {
    const response = await axiosClient.apiClient("POST", `account/create`, account);
    return response.data.data;
  };


  /*************************Account Service end *************************/



  /********************************Deposite Service Start **************/
  const getAllDeposite = async () => {
    const response = await axiosClient.apiClient("GET", `deposite`);
    return response.data.data;
  };

  /********************************Deposite Service Start **************/



  /********************************Tour Report Service Start ***********/
  const batchWiseReport = async(data) =>{
    const response = await axiosClient.apiClient("POST",'tour/people',data);
    return response.data.data;
  }
  /********************************Tour Report Service End ***********/


  /*****************************************get information of laravel data ***********/
  const page = async () =>{
    const response = await axiosClient.apiClient("GET",'api/test');
    return response;
  }



  return {
    login,
    getAllCategory,
    getLocalStorageValue,
    getTour,
    getTourById,
    getApprovedTransaction,
    getPendingTransaction,
    getRejectTransaction,
    getTransactionById,
    updateTransactionStatus,
    getAllBooking,
    getBookingDetails,
    bookingDetails,
    tourWiseBookingInfomation,
    getAllHotels,
    addHotel,
    deleteHotel,
    getAllAccounts,
    addAccount,
    getAllDeposite,
    batchWiseReport,
    page
  };
};

export default useApi;
