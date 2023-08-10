
const OneProfilePage = ({params}:any) => {
    const {id} = params;
    return (
        <div className="flex justify-center items-center h-screen flex-col" >
            Profile no: {id}
        </div>
    );
}
export default OneProfilePage;