"use client";
import { useState } from "react";
import { connectWallet } from "../lib/stellar";

export default function ConnectWallet() {
  const [pubKey, setPubKey] = useState<string | null>(null);

    const handleConnect = async () => {
        try {
              // This calls the Freighter API directly
                    const userInfo = await connectWallet();
                          if (userInfo.publicKey) {
                                  setPubKey(userInfo.publicKey);
                                        }
                                            } catch (e) {
                                                  console.error("Freighter not found or access denied", e);
                                                        alert("Please install Freighter Wallet to use TradeFlow!");
                                                            }
                                                              };

                                                                return (
                                                                    <div className="p-4">
                                                                          <button 
                                                                                  onClick={handleConnect}
                                                                                          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition shadow-lg flex items-center gap-2"
                                                                                                >
                                                                                                        {pubKey ? `Connected: ${pubKey.slice(0, 4)}...${pubKey.slice(-4)}` : "Connect Freighter Wallet"}
                                                                                                              </button>
                                                                                                                  </div>
                                                                                                                    );
                                                                                                                    }
                                                                                                                    