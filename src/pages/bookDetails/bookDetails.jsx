import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((b) => b.bookId === Number(bookId));

  return (
    <div className="px-4 py-6">
      <div className="max-w-4xl mx-auto"> {/* ↓ reduced from 6xl */}

        <div className="card bg-base-100 shadow-md lg:flex lg:flex-row">

          {/* Image */}
          <figure className="w-full lg:w-[40%] p-4">
            <img
              src={book.image}
              alt={book.bookName}
              className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl"
            />
          </figure>

          {/* Content */}
          <div className="card-body lg:w-[60%]">

            <h2 className="text-xl lg:text-2xl font-bold">
              {book.bookName}
            </h2>

            <p className="text-sm text-gray-600">
              By: {book.author}
            </p>

            <p className="py-2 border-y text-sm font-medium">
              {book.category}
            </p>

            <p className="text-sm">
              <span className="font-semibold">Review:</span> {book.review}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-green-100 text-green-600 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="border-b mt-3"></div>

            {/* Info */}
            <div className="mt-3 space-y-1 text-sm">
              <p>Pages: <span className="font-semibold">{book.totalPages}</span></p>
              <p>Publisher: <span className="font-semibold">{book.publisher}</span></p>
              <p>Year: <span className="font-semibold">{book.yearOfPublishing}</span></p>
              <p>Rating: <span className="font-semibold">{book.rating}</span></p>
            </div>

            {/* Buttons */}
            <div className="card-actions mt-4 flex gap-3">
              <button className="btn btn-sm">Read</button>
              <button className="btn btn-sm bg-blue-500 text-white">
                Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;