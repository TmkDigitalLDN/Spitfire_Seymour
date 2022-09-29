import React from "react";
import BlogFilter from "../../../components/blog/blog-filter";
import BlogItem from "../../../components/blog/blog-item";
import BlogData from "../../../data/blog.json";
import useMasonry from "../../../hooks/use-masonry";
import { slugify } from "../../../utils";


const BlogContainer = () => {
    const { categories } = useMasonry(
        BlogData,
        ".masonryGrid",
        ".masonry-item",
        ".blog-filter-menu",
        ".blog-filter-menu button"
    );
    return (
        <div className="blog-area blog-masonry-area">
            <div className="container">
                <div className="row">
                <h1 style={{textAlign: "center"}}>Coming soon!</h1>
                </div>
               
            </div>
        </div>
    );
};

export default BlogContainer;
