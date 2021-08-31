import InputBox from "./InputBox";

function Timeline({currentUser}) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4
        xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto mx-w-md md:max-w-lg lg:max-w-2xl">
                <InputBox currentUser={currentUser}/>
            </div>
        </div>
    )
}

export default Timeline