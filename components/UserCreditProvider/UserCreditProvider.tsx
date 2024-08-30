"use client";
import * as React from "react";
import { useState } from "react";

export const UserCreditContext = React.createContext({});

export type UserCredit = {
  credit?: number;
  insuficient?: boolean;
};

function UserCreditProvider({ children }: { children: React.ReactNode }) {
  function newCredit(credit: number) {
    const userCredit: UserCredit = { credit };
    localStorage.setItem("credit", JSON.stringify(userCredit));
  }

  function setInsuficientStatus() {
    const cache: string | null = localStorage.getItem("credit");
    if (cache) {
      const userCredit: UserCredit = JSON.parse(cache);
      userCredit.insuficient = true;
      localStorage.setItem("credit", JSON.stringify(userCredit));
    }
  }

  function getCredit() {
    if (typeof window !== "undefined") {
      const cache: string | null = localStorage.getItem("credit");
      if (cache) {
        const userCredit: UserCredit = JSON.parse(cache);
        return userCredit;
      }
    }
    return null;
  }

  return (
    <UserCreditContext.Provider
      value={{
        getCredit,
        newCredit,
        setInsuficientStatus,
      }}
    >
      {children}
    </UserCreditContext.Provider>
  );
}

export default UserCreditProvider;
