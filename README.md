# E-commerce App

This is a React-based e-commerce application that displays products fetched from a fake store API. It includes features such as product listing, filtering, sorting, searching, and a shopping cart.

## New ProductDetails Component

A new `ProductDetails` component has been added to display detailed information about a selected product. It includes:

- Product image, title, category, price, rating, and description.
- An "Add to Cart" button to add the product to the shopping cart.
- Integration with the `ProductList` component to show product details when a product is clicked.
- A back button to return to the product list view.

## Integration Details

- `ProductList` manages the selected product state and conditionally renders `ProductDetails` or the product grid.
- `ProductCard` has been updated to handle click events to select a product without interfering with the "Add to Cart" button.
- The shopping cart functionality uses `localStorage` to persist cart items.

## Running the App

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser (usually at `http://localhost:3000`).

## Testing the New Feature

- Click on any product card to view detailed product information.
- Use the "Add to Cart" button in either the product list or product details view to add items to the cart.
- Use the back button in the product details view to return to the product list.
- Verify filtering, sorting, and searching still work as expected.

## Feedback

Please report any issues or suggestions for improvement.

