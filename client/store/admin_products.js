import axios from "./axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const _getProducts = (products) => ({
   type: GET_PRODUCTS,
   products,
});

export const _deleteProduct = (productId) => ({
   type: DELETE_PRODUCT,
   productId,
});

export const _updateProduct = (product) => ({
   type: UPDATE_PRODUCT,
   product,
});

export const getProducts = () => {
   return async (dispatch) => {
      try {
         const { data: products } = await axios.get("/api/admin/products");
         dispatch(_getProducts(products));
      } catch (error) {
         console.log("Failed to fetch products (GET /api/admin/products)", error);
      }
   };
};

export const deleteProduct = (id, history) => {
   return async (dispatch) => {
      try {
         await axios.delete(`/api/admin/products/${id}`);
         dispatch(_deleteProduct(id));
         history.push("/admin/products");
      } catch (error) {
         console.log(
            `Failed to delete product (DELETE /api/admin/products/${id})`,
            error
         );
      }
   };
};

export const updateProduct = (id, product, history) => {
   console.log(product)
   return async (dispatch) => {
      try {
         await axios.put(`/api/admin/products/${id}`, product);
         dispatch(_updateProduct(product));
         history.push(`/admin/products/${id}`);
      } catch (error) {
         console.log(`Failed to update product (PUT /api/admin/products/${id})`, error);
      }
   };
};

const initialState = [];

export default function (state = initialState, action) {
   switch (action.type) {
      case GET_PRODUCTS:
         return action.products;
      case DELETE_PRODUCT:
         return state.filter((product) => product.id !== action.productId);
      case UPDATE_PRODUCT:
         return state.map((product) =>
            product.id === action.product.id ? action.product : product
         );
      default:
         return state;
   }
}
