import baseUrl from "../Api/baseURL";

//to access all data
const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res.data;
}



export { useGetData }; 