import BookCard from "../../ui/BookCard";

import { use } from "react";


const bookPromise = fetch("/booksData.json").then(res => res.json())

const Showbooks = () => {

    const books = use(bookPromise)

    return (
        <div className="my-12 container mx-auto">

            <h2 className="font-bold text-2xl mb-6 text-center">Books</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-8 gap-10 md:grid-cols-2 ">
                {
                    books.map((book,index) => {

                        return (

                            <BookCard key={index} book={book}/>
                            
                        )

                    })
                }
            </div>

        </div>
    );
};

export default Showbooks;