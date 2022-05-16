import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [categories, setCategories] = useState<any>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const category = await fetch('http://localhost:4000/categories')
            .then(res => res.json())
            setCategories(category);
        }
        fetchRecipes();
    }, [])
    return (
        <div>
            {categories.map((category: any) => <Link to={`/categories/${category}`}> <p key={category}>{category}</p></Link>)}
            <p>Testar navbar</p>
        </div>
    )
}
export default Navbar;