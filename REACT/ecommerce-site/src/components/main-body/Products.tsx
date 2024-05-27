import { useEffect, useRef, useState } from "react";
import "../../css/Main-body/Products/Products.css";
import { useCart } from "../../context/usecontext";

const URL = "https://fakestoreapi.com/products";

interface CardDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = () => {
  const { addItem } = useCart();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<CardDetails[]>([]);
  const [page, setPage] = useState(1);
  const abortControllerRef = useRef<AbortController | null>(null);

  const cardsPerPage = 9;
  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const fetchCards = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      try {
        const response = await fetch(URL, {
          signal: abortControllerRef.current?.signal,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as CardDetails[];
        setCards(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();

    return () => abortControllerRef.current?.abort();
  }, []);

  console.log(cards);

  const truncateTitle = (title: string, wordLimit: number) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  if (error) return <h1>Something went wrong... Try again later</h1>;

  const handleAddToCart = (card: Omit<CardDetails, "quantity">) => {
    addItem(card);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="ProductsWrapper">
          <ul className="Card-Parent">
            {currentCards.map((card) => (
              <li className="cards" key={card.id}>
                <img className="image" src={card.image} alt={card.title} />
                <div className="ProductInfo">
                  <div className="price">
                    <div className="titleParent">
                      <p className="title">{truncateTitle(card.title, 2)}</p>
                    </div>
                    <h3 className="rate">${formatPrice(card.price)}</h3>
                  </div>
                  <div className="discount">
                    <p className="id">Product Id: {card.id}</p>
                    <p className="strikethrough">
                      ${formatPrice(card.price + 20)}
                    </p>
                  </div>
                </div>
                <button
                  className="AddToCart"
                  onClick={() => handleAddToCart(card)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
          <div className="pagination-wrapper">
            <button
              className={page === 1 ? "disable" : "prev"}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <div className="pageNumbers">
              {[1, 2, 3].map((pageNumber) => (
                <button
                  className={
                    page === pageNumber ? "currentPage" : "pageButtons"
                  }
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <button
              className={page === 3 ? "disable" : "next"}
              onClick={() => setPage((prev) => Math.min(prev + 1, 3))}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
