import React from "react";

function Page() {
    return (
        <form action="">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="description">description</label>
            <input type="text" id="description" name="description" />

            <label htmlFor="rating">rating</label>
            <input type="text" id="rating" name="rating" />

            <label htmlFor="location">location</label>
            <input type="text" id="location" name="location" />

            <label htmlFor="have_spa">have_spa</label>
            <input type="checkbox" id="have_spa" name="have_spa" value="yes" />
            <input type="checkbox" id="have_spa" name="have_spa" value="no" />

            <label htmlFor="have_pool">have_pool</label>
            <input
                type="checkbox"
                id="have_pool"
                name="have_pool"
                value="yes"
            />
            <input type="checkbox" id="have_pool" name="have_pool" value="no" />

            <label htmlFor="image_url">image_url</label>
            <input type="file" id="image_url" name="image_url" />
        </form>
    );
}

export default Page;
