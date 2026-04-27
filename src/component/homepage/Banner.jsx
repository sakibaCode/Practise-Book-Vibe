import heroImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={heroImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-5'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-success text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;