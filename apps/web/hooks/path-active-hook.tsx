import { useRouter } from "next/router";

const usePathActiveHook = () => {
  const router = useRouter();
  const { pathname } = router;

  return pathname;
};

export default usePathActiveHook;
