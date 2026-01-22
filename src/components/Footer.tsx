import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-center py-4">
            <div className="container mx-auto">
                <p className="text-yellow-600">© {new Date().getFullYear()} My Company. All rights reserved.</p>
                <p className="text-red-600">Follow us on social media!</p>
                <ul className="flex justify-center space-x-4">
                    <li><a href="#" className="text-yellow-600 hover:underline">Facebook</a></li>
                    <li><a href="#" className="text-yellow-600 hover:underline">Twitter</a></li>
                    <li><a href="#" className="text-yellow-600 hover:underline">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;