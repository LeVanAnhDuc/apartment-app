// stores
import { authStore } from "@/stores";

const useUserAttributes = () => authStore((state) => state.userAttributes);

export default useUserAttributes;
