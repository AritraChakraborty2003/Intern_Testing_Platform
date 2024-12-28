export const checkExist = ({name,email}) => {
    if (!name || !email) {
        return (
            {message:false,status:404}
        )
        
    }
    // apprite backend code to fetch data 

    const response = [];
    return response.length > 0 ?  {status:200,message:true} :  {message:false,status:200};
}
