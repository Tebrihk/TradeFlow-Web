import { isAllowed, setAllowed, getUserInfo } from "@stellar/freighter-api";

export async function connectWallet() {
  const allowed = await isAllowed();
  if (!allowed) {
    await setAllowed();
  }
  return await getUserInfo();
}
