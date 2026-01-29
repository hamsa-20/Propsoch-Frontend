import Link from "next/link"

const category_list: string[] = [
   "Home Buying Guides (5)",
   "Bangalore Real Estate (6)",
   "Legal & Documentation (4)",
   "Investment Insights (3)",
   "Under Construction Projects (4)",
   "Ready to Move Homes (3)",
   "First-Time Buyers (5)",
]

const Category = () => {
   Category

   return (
      <div className="categories bg-white bg-wrapper mb-30">
         <h5 className="mb-20">Category</h5>
         <ul className="style-none">
            {category_list.map((category, i) => (
               <li key={i}><Link href="#">{category}</Link></li>
            ))}
         </ul>
      </div>
   )
}

export default Category
