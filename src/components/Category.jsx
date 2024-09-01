 

export const Category = () => {
   const Categories = [
      {
         Title: "Men",
         img: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65746.jpg",
      },
      {
         Title: "Woman",
         img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid",
      },
      {
         Title: "kid",
         img: "https://img.freepik.com/free-photo/joyful-preteen-kid-with-curly-hair-laughing-camera-studio-shot-carefree-little-girl-isolated-pink-background_197531-13694.jpg",
      }
   ]
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Categories.map((category, index) => (
         <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img src={category.img} alt="img" className="w-full object-cover rounded-xl shadow-md" />
            <div className="absolute top-20 left-12">
               <p className="text-xl font-bold">{category.Title}</p>
               <p className="text-gray-600 text-[1rem]">View All</p>
            </div>
         </div>
      ))}
    </div>
  )
}
export default Category