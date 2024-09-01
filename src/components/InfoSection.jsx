import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      Title: "Free Shipping",
      Description: "Get your orders delivered with no extra cost.",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      Title: "Suppprt 24/7",
      Description: "We support 24 hours a day.",
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-red-600" />,
      Title: "100% Money Back",
      Description: "You have 30 days to return.",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      Title: "Secure Payment",
      Description: "We ensure secure payment.",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      Title: "Best Offers with discount",
      Description: "Enjoy the best offers with discounts.",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.Title}</h3>
            <p className="mt-2 text-gray-600">{item.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoSection;
