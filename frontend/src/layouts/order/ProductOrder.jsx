import React from 'react'
import { Link } from 'react-router-dom'

const ProductOrder = () => {

    const handleWhatsAppShare = () => {
        // Get the article header and content
        const productName = document.getElementById('productName').innerText;
        const productSKU = document.getElementById('productSKU').innerText;
        const productPrice = document.getElementById('productPrice').innerText;
        const productSubtotal = document.getElementById('productSubtotal').innerText;
        const productDelivery = document.getElementById('productDelivery').innerText;
        const productTotalPrice = document.getElementById('productTotalPrice').innerText;

        // Get the current page URL
        const currentPageUrl = window.location.href;

        // Customize the font
        const assistHeader = 'MINTY CHECKOUT ORDER PURCHASE SUMMARY';
        const boldAssistHeader = `*${assistHeader}*`;
        const assistText = 'MINTY Product link:';
        const boldAssistText = `*${assistText}*`;

        const assistProductName = 'Product: ';
        const assistProductSKU = 'SKU No: ';
        const assistProductPrice = 'Product Price: ';
        const assistProductSubtotal = 'Subtotal Price: ';
        const assistProductDelivery = 'Delvery Charges: ';
        const assistProductTotalPrice = 'Total Price: ';

        // Encode the article information for the URL
        const encodedProductMessage = encodeURIComponent(
            boldAssistHeader + 
            '\n\n' + 
            assistProductName + productName + 
            '\n' + 
            assistProductSKU + productSKU + 
            '\n' + 
            assistProductPrice + productPrice + 
            '\n' + 
            assistProductSubtotal + productSubtotal + 
            '\n' + 
            assistProductDelivery + productDelivery + 
            '\n' + 
            assistProductTotalPrice + productTotalPrice + 
            '\n\n' + 
            boldAssistText + 
            '\n' + 
            currentPageUrl
        );

        // Generate the WhatsApp share URL with direct contact number
        const whatsappUrl = `https://wa.me/254700013897?text=${encodedProductMessage}`;

        // Open the share dialog
        window.open(whatsappUrl, '_blank');
    };

  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="mx-4">
            {/* Breadcrumb */}
            <div className="container py-4 flex items-center gap-3">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#234645' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                </Link>
                <span className="text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width='0.6rem' fill='#234645' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </span>
                <p className="text-primary font-medium font-Shrikhand">Checkout</p>
            </div>

            {/* Product Checkout */}
            <div className="grid md:grid-cols-12 items-start pt-4 gap-4">
                {/* Left */}
                <div className="md:col-span-7 text-primary border-primary border-t-2 md:border-t-0 md:border-l-2 px-4 py-8 rounded-3xl shadow-2xl">
                    <h3 className="text-lg font-semibold mb-4">CHECKOUT</h3>
                    <div className="space-y-4">
                        <p className="font-medium">
                            Orders are made via WhatsApp Message, Instagram Direct Message or a Call. <br/>
                            By placing your Order Here, you will be redirected to our WhatsApp Contact number.
                            Enter your name and send message. <br/><br/>

                            We will get in touch with you as soon as possible.
                        </p>
                    </div>
                </div>
        
                {/* Right */}
                <div className="md:col-span-5 text-primary border-primary border-t-2 md:border-t-0 md:border-l-2 px-4 py-8 rounded-3xl shadow-2xl">
                    <h3 className="text-lg font-semibold mb-4">ORDER SUMMARY</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div>
                                <h5 id="productName" className="text-gray-800 font-medium">Bag 1</h5>
                                <p id="productSKU" className="text-sm text-gray-600">SKU: MINTY001</p>
                            </div>
                            <p className="text-gray-600">
                                x1
                            </p>
                            <p id="productPrice" className="text-gray-800 font-medium">Ksh 500</p>
                        </div>
                    </div>
        
                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                        <p>Subtotal</p>
                        <p id="productSubtotal">Ksh 500</p>
                    </div>
        
                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                        <p>Delivery Charges</p>
                        <p id="productDelivery">Ksh 100</p>
                    </div>
        
                    <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                        <p className="font-semibold">Total</p>
                        <p id="productTotalPrice">Ksh 600</p>
                    </div>
        
                    <button onClick={handleWhatsAppShare} aria-label="WhatsApp share" className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-3xl hover:bg-transparent hover:text-primary transition font-medium">Place Order via WhatsApp</button>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ProductOrder