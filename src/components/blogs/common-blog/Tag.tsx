import Link from "next/link";

const tags: string[] = [
   "Bangalore Real Estate",
   "Home Buying",
   "RERA",
   "Legal Verification",
   "Property Investment",
   "Under Construction",
   "Ready to Move",
   "First-Time Buyers",
   "Builder Reputation",
];

const Tag = () => {
   return (
      <div className="keyword bg-white bg-wrapper">
         <h5 className="mb-20">Keywords</h5>
         <ul className="style-none d-flex flex-wrap">
            {tags.map((tag, i) => (
               <li key={i}>
                  <Link href="#">{tag}</Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Tag
