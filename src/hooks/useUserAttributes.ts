// stores
import { useAuthStore } from "@/stores";

const useUserAttributes = () => useAuthStore((state) => state.userAttributes);

export default useUserAttributes;
