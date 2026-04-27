
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const BookCard = ({ book }) => {



    return (


        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm ">
            <figure className="p-6">
                <img src={book.image} className="rounded-xl h-87.5 w-80" />
            </figure>
            <div className="card-body ">
                <div className=" flex flex-row gap-2">
                    {
                        book.tags.map((tag, index) =>
                            <div key={index} className="badge text-green-500 bg-green-100 font-semibold">{tag}</div>
                        )
                    }
                </div>
                <h2 className="card-title text-2xl">
                    {book.bookName}


                </h2>
                <p className="font-semibold">By: {book.author}</p>

                <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-4 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="font-semibold flex items-center gap-2">{book.rating} <CiStar /></div>
                </div>
            </div>
        </Link>


    );
};

export default BookCard;