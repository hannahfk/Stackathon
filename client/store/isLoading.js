import { GET_USERS } from './admin_users';
import { GET_PRODUCTS } from './admin_products';

export default function isLoading(state = true, action) {
   switch (action.type) {
      case GET_USERS:
         return false
      case GET_PRODUCTS:
         return false
      default:
         return state
   }
}