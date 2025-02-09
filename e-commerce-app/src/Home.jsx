import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-Commerce</h1>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Shop</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find Clothes That Match Your Style</h2>
          <p className="text-lg mb-8">Explore our collection of premium outfits and accessories.</p>
          <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="shadow-lg">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span>Image {item}</span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">Product Name</h3>
                  <p className="text-gray-600 mb-2">$120</p>
                  <Button className="bg-black text-white w-full hover:bg-gray-800">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 px-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
