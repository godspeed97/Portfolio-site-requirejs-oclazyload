(function () {

    angular.module('petStoreApp')
        .factory('productsSvc', productsSvc);

    function productsSvc($http) {

        var data = {
            products: [
                {
                    name: "Bag Of Dog Food - 12 LBS",
                    description: "The best brand of dog food",
                    category: "Food",
                    price: 49.99
                },
                {
                    name: "Bag of Cat Food - 12 LBS",
                    description: "The best brand of cat food",
                    category: "Food",
                    price: 49.99
                },
                {
                    name: "Remote Control Toy Mouse",
                    description: "Batteries included - Great fun for your cat",
                    category: "Toys",
                    price: 24.99
                },
                {
                    name: "Dog Frisbee",
                    description: "Toy frisbee - Excellent exercise for your dog",
                    category: "Toys",
                    price: 14.99
                },
                {
                    name: "Stainless Steel Food Bowl",
                    description: "Food & Water bowl for your pet",
                    category: "Accessories",
                    price: 49.99
                },
                {
                    name: "Cat Tree & Scratching Post",
                    description: "Assembly required - perfect for your cat to hide, sleep, climb, and scratch",
                    category: "Accessories",
                    price: 179.99
                },
                {
                    name: "Dog Mattress",
                    description: "Super comfortable mattress for your dog to sleep on",
                    category: "Accessories",
                    price: 39.99
                },
                {
                    name: "Bag Of Dog Food - 5 LBS",
                    description: "The best brand of dog food",
                    category: "Food",
                    price: 29.99
                },
                {
                    name: "Bag of Cat Food - 5 LBS",
                    description: "The best brand of cat food",
                    category: "Food",
                    price: 29.99
                },
                {
                    name: "Cat Nail Clippers",
                    description: "Clip your cat's claws with these clippers",
                    category: "Grooming",
                    price: 4.99
                },
                {
                    name: "Dog Nail Clippers",
                    description: "Clip your dog's claws with these clippers",
                    category: "Grooming",
                    price: 4.99
                },
                {
                    name: "Dog Shampoo",
                    description: "The best dog shampoo - doesn't irritate eyes or skin",
                    category: "Grooming",
                    price: 19.99
                },
                {
                    name: "Cat/Dog Brush",
                    description: "A brush for your cat or dog",
                    category: "Grooming",
                    price: 6.99
                }
            ]
        };

        function getProductsData() {
            return data;
        }

        return {
            getProductsData: getProductsData
        }

    }

})();