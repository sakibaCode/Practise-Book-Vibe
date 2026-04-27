import { Suspense } from "react";
import Showbooks from "../../component/homepage/Showbooks";
import Banner from "../../component/homepage/Banner";

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Suspense fallback={<div>Loading books...</div>}>
                <Showbooks />
            </Suspense>
        </div>
    );
};

export default Homepage;